"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

type Uniforms = Record<string, THREE.IUniform>;

export const CanvasRevealEffectSwitch: React.FC<{
    animationSpeed?: number;
    opacities?: number[];
    colors?: [ number, number, number ][];
    containerClassName?: string;
    dotSize?: number;
    showGradient?: boolean;
}> = ( {
    animationSpeed = 0.4,
    opacities = [ 0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1 ],
    colors = [ [ 0, 255, 255 ] ],
    containerClassName,
    dotSize = 3,
    showGradient = true,
} ) =>
    {
        const uniforms = useMemo( () =>
        {
            let colorsArray: [ number, number, number ][] = new Array( 6 ).fill( colors[ 0 ] );
            if ( colors.length === 2 )
            {
                colorsArray = [ colors[ 0 ], colors[ 0 ], colors[ 0 ], colors[ 1 ], colors[ 1 ], colors[ 1 ] ];
            } else if ( colors.length === 3 )
            {
                colorsArray = [ colors[ 0 ], colors[ 0 ], colors[ 1 ], colors[ 1 ], colors[ 2 ], colors[ 2 ] ];
            }

            return {
                u_colors: {
                    value: colorsArray.map( ( color ) => [
                        color[ 0 ] / 255,
                        color[ 1 ] / 255,
                        color[ 2 ] / 255,
                    ] ),
                },
                u_opacities: { value: opacities },
                u_total_size: { value: 4 },
                u_dot_size: { value: dotSize },
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2( 1, 1 ) },
            };
        }, [ colors, opacities, dotSize ] );

        return (
            <div className={ cn( "h-full relative bg-white w-full", containerClassName ) }>
                <Canvas className="h-full w-full">
                    <ShaderComponent animationSpeed={ animationSpeed } uniforms={ uniforms } />
                </Canvas>
                { showGradient && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
                ) }
            </div>
        );
    };

const ShaderComponent: React.FC<{
    animationSpeed: number;
    uniforms: Uniforms;
}> = ( { animationSpeed, uniforms } ) =>
    {
        const { size } = useThree();
        const ref = useRef<THREE.Mesh>( null );

        // Update `u_time` on each frame
        useFrame( ( { clock } ) =>
        {
            if ( ref.current )
            {
                const timestamp = clock.getElapsedTime();
                const material = ref.current.material as THREE.ShaderMaterial;
                material.uniforms.u_time.value = timestamp * animationSpeed;
            }
        } );

        const preparedUniforms = useMemo( () =>
        {
            const prepared: Uniforms = {};
            Object.entries( uniforms ).forEach( ( [ key, uniform ] ) =>
            {
                if (
                    uniform.value instanceof THREE.Vector2 ||
                    uniform.value instanceof THREE.Vector3
                )
                {
                    prepared[ key ] = { value: uniform.value.clone() };
                } else
                {
                    prepared[ key ] = { value: uniform.value };
                }
            } );

            // Add resolution and time uniforms
            prepared[ "u_time" ] = { value: 0 };
            prepared[ "u_resolution" ] = {
                value: new THREE.Vector2( size.width, size.height ),
            };

            return prepared;
        }, [ uniforms, size ] );

        const material = useMemo( () =>
        {
            return new THREE.ShaderMaterial( {
                vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
                fragmentShader: `
        precision mediump float;
        in vec2 fragCoord;
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;

        float random(vec2 xy) {
          return fract(sin(dot(xy, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 st = fragCoord.xy / u_resolution.xy;
          float opacity = step(0.0, st.x) * step(0.0, st.y);

          vec2 gridPos = vec2(
            floor(st.x * u_total_size),
            floor(st.y * u_total_size)
          );

          float randValue = random(gridPos);
          opacity *= u_opacities[int(randValue * 10.0)];

          fragColor = vec4(u_colors[int(randValue * 6.0)], opacity);
        }
      `,
                uniforms: preparedUniforms,
            } );
        }, [ preparedUniforms ] );

        return (
            <mesh ref={ ref }>
                <planeGeometry args={ [ 2, 2 ] } />
                <primitive object={ material } attach="material" />
            </mesh>
        );
    };
