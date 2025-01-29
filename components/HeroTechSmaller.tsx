// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { gsap } from "gsap";

// interface SvgItem {
//    src: string;
//    name: string;
// }

// const ThreeCircleTech: React.FC = () => {
//    const containerRef = useRef<HTMLDivElement>(null);

//    const svgs: SvgItem[] = [
//       {
//          src: "/svg/techicons/assembly.svg",
//          name: "Assembly",
//       },
//       { src: "/svg/techicons/nextjs.svg", name: "Nextjs" },
//       { src: "/svg/techicons/csharp.svg", name: "C#" },
//       { src: "/svg/techicons/php.svg", name: "PHP" },
//       { src: "/svg/techicons/react.svg", name: "React" },
//       { src: "/svg/techicons/vue.svg", name: "Vue" },
//       { src: "/svg/techicons/c.svg", name: "C Language" },
//       { src: "/svg/techicons/python.svg", name: "Python" },
//       { src: "/svg/techicons/django.svg", name: "Django" },
//       {
//          src: "/svg/techicons/laravel.svg",
//          name: "Laravel",
//       },
//       {
//          src: "/svg/techicons/mongodb.svg",
//          name: "Mongodb",
//       },
//       {
//          src: "/svg/techicons/cplusplus.svg",
//          name: "Cplusplus",
//       },
//       { src: "/svg/techicons/vhdl.svg", name: "Vhdl" },
//       { src: "/svg/techicons/mysql.svg", name: "Mysql" },
//       { src: "/svg/techicons/matlab.svg", name: "Matlab" },
//    ];

//    useEffect(() => {
//       const container = containerRef.current;
//       if (!container) return;

//       // Scene, Camera, Renderer Setup
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(
//          75,
//          container.offsetWidth / container.offsetHeight,
//          0.1,
//          1000
//       );
//       camera.position.set(0, 0, 20);

//       const renderer = new THREE.WebGLRenderer({
//          alpha: true,
//       });
//       renderer.setSize(
//          container.offsetWidth,
//          container.offsetHeight
//       );
//       container.appendChild(renderer.domElement);

//       const svgMeshes: THREE.Mesh[] = [];
//       const circleRadii = [6, 9, 12];

//       // Resize Handler
//       const resizeHandler = () => {
//          const isSmallScreen = window.innerWidth <= 768;

//          camera.aspect =
//             container.offsetWidth / container.offsetHeight;
//          camera.updateProjectionMatrix();

//          renderer.setSize(
//             container.offsetWidth,
//             container.offsetHeight
//          );

//          scene.scale.set(
//             isSmallScreen ? 0.8 : 1, // Scale down slightly for smaller screens
//             isSmallScreen ? 0.8 : 1,
//             isSmallScreen ? 0.8 : 1
//          );
//       };

//       const createScene = () => {
//          const loader = new THREE.TextureLoader();

//          // Pulsating Logo
//          const logoTexture = loader.load(
//             "/svg/bmslogoclean.svg"
//          );
//          const logoMaterial = new THREE.SpriteMaterial({
//             map: logoTexture,
//             transparent: true,
//          });
//          const logoMesh = new THREE.Sprite(logoMaterial);
//          logoMesh.scale.set(6, 6, 1);
//          scene.add(logoMesh);

//          gsap.to(logoMesh.scale, {
//             x: 7,
//             y: 7,
//             repeat: -1,
//             yoyo: true,
//             duration: 2,
//             ease: "power2.inOut",
//          });

//          // Dashed Lines
//          circleRadii.forEach((radius, index) => {
//             const dashedCurve = new THREE.EllipseCurve(
//                0,
//                0,
//                radius,
//                radius,
//                0,
//                2 * Math.PI,
//                false
//             );
//             const dashedGeometry =
//                new THREE.BufferGeometry().setFromPoints(
//                   dashedCurve.getPoints(100)
//                );
//             const dashedMaterial =
//                new THREE.LineDashedMaterial({
//                   color: 0xcccccc,
//                   dashSize: 0.3,
//                   gapSize: 0.2,
//                });

//             const dashedLine = new THREE.Line(
//                dashedGeometry,
//                dashedMaterial
//             );
//             dashedLine.computeLineDistances();
//             scene.add(dashedLine);

//             gsap.to(dashedLine.rotation, {
//                z: -Math.PI * 2,
//                repeat: -1,
//                duration: 15 - index * 2,
//                ease: "linear",
//             });
//          });

//          // Icons Around Circles
//          svgs.forEach((svg, index) => {
//             const texture = loader.load(svg.src);
//             const material = new THREE.MeshBasicMaterial({
//                map: texture,
//                transparent: true,
//             });

//             const geometry = new THREE.PlaneGeometry(1, 1);
//             const mesh = new THREE.Mesh(geometry, material);

//             const radius =
//                circleRadii[index % circleRadii.length];
//             const angleOffset =
//                (index / svgs.length) * 2 * Math.PI;

//             mesh.position.set(
//                radius * Math.cos(angleOffset),
//                radius * Math.sin(angleOffset),
//                0
//             );

//             svgMeshes.push(mesh);
//             scene.add(mesh);
//          });

//          // Animation Loop
//          const animate = () => {
//             svgMeshes.forEach((mesh, i) => {
//                const radius =
//                   circleRadii[i % circleRadii.length];
//                const time =
//                   (Date.now() / 5000 +
//                      i / svgMeshes.length) %
//                   1;
//                const angle = time * 2 * Math.PI;

//                mesh.position.set(
//                   radius * Math.cos(angle),
//                   radius * Math.sin(angle),
//                   0
//                );
//             });

//             renderer.render(scene, camera);
//             requestAnimationFrame(animate);
//          };

//          animate();
//       };

//       createScene();

//       window.addEventListener("resize", resizeHandler);
//       resizeHandler();

//       return () => {
//          window.removeEventListener(
//             "resize",
//             resizeHandler
//          );
//          container.removeChild(renderer.domElement);
//       };
//    }, [svgs]);

//    return (
//       <div
//          ref={containerRef}
//          className="w-full h-[80vh] lg:h-[100vh] mt-5 overflow-hidden relative"
//       />
//    );
// };

// export default ThreeCircleTech;
