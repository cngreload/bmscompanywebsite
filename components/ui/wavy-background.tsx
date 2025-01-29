"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ( {
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    [ key: string ]: unknown;
} ) =>
{
    const noise = createNoise3D();

    const canvasRef = useRef<HTMLCanvasElement | null>( null );
    const containerRef = useRef<HTMLDivElement | null>( null );
    const ctxRef = useRef<CanvasRenderingContext2D | null>( null );
    const wRef = useRef<number>( 0 );
    const hRef = useRef<number>( 0 );
    const ntRef = useRef<number>( 0 );
    const animationIdRef = useRef<number>( 0 );

    const getSpeed = useCallback( (): number =>
    {
        switch ( speed )
        {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    }, [ speed ] );

    const waveColors = useMemo(
        () => colors ?? [ "#ff33cc", "#009900", "#e879f9", "#000000", "#00ffff" ],
        [ colors ]
    );

    const drawWave = useCallback(
        ( n: number ) =>
        {
            const ctx = ctxRef.current;
            if ( !ctx ) return;
            ntRef.current += getSpeed();
            for ( let i = 0; i < n; i++ )
            {
                ctx.beginPath();
                ctx.lineWidth = waveWidth || 50;
                ctx.strokeStyle = waveColors[ i % waveColors.length ];
                for ( let x = 0; x < wRef.current; x += 5 )
                {
                    const y =
                        noise( x / 800, 0.3 * i, ntRef.current ) * 100 +
                        hRef.current * 0.5;
                    ctx.lineTo( x, y );
                }
                ctx.stroke();
                ctx.closePath();
            }
        },
        [ getSpeed, noise, waveColors, waveWidth ]
    );

    const render = useCallback( () =>
    {
        const ctx = ctxRef.current;
        if ( !ctx ) return;

        ctx.fillStyle = backgroundFill || "white";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect( 0, 0, wRef.current, hRef.current );
        drawWave( 5 );
        animationIdRef.current = requestAnimationFrame( render );
    }, [ backgroundFill, drawWave, waveOpacity ] );

    const setupCanvas = useCallback( () =>
    {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if ( !canvas || !container ) return;

        const ctx = canvas.getContext( "2d" );
        if ( !ctx ) return;

        ctxRef.current = ctx;

        const containerBounds = container.getBoundingClientRect();
        wRef.current = ctx.canvas.width = containerBounds.width;
        hRef.current = ctx.canvas.height = containerBounds.height;

        ctx.filter = `blur(${ blur }px)`;
        ntRef.current = 0;
    }, [ blur ] );

    const handleResize = useCallback( () =>
    {
        const ctx = ctxRef.current;
        const container = containerRef.current;
        if ( !ctx || !container ) return;

        const bounds = container.getBoundingClientRect();
        wRef.current = ctx.canvas.width = bounds.width;
        hRef.current = ctx.canvas.height = bounds.height;
        ctx.filter = `blur(${ blur }px)`;
    }, [ blur ] );

    const init = useCallback( () =>
    {
        setupCanvas();
        window.onresize = handleResize;
        render();
    }, [ setupCanvas, handleResize, render ] );

    useEffect( () =>
    {
        init();
        return () =>
        {
            cancelAnimationFrame( animationIdRef.current );
        };
    }, [ init ] );

    const [ isSafari, setIsSafari ] = useState( false );
    useEffect( () =>
    {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes( "Safari" ) &&
            !navigator.userAgent.includes( "Chrome" )
        );
    }, [] );

    return (
        <div
            ref={ containerRef }
            className={ cn(
                "relative flex items-center justify-center w-full h-[15rem] px-4 py-8 overflow-hidden",
                containerClassName
            ) }
        >
            <canvas
                className="absolute inset-0 z-0 w-full h-full"
                ref={ canvasRef }
                id="canvas"
                style={ {
                    ...( isSafari ? { filter: `blur(${ blur }px)` } : {} ),
                } }
            ></canvas>
            <div
                className={ cn(
                    "relative z-10 flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto",
                    className
                ) }
                { ...props }
            >
                { children }
            </div>
        </div>
    );
};
