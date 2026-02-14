"use client";

import { motion } from "framer-motion";

export default function OrganicBrushBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gray-950">

            {/* 1. Le calque de GRAIN (Noise) - C'est le secret pour l'effet "papier/organique" */}
            {/* On utilise un SVG base64 ultra-léger pour éviter de charger une image */}
            <div
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* 2. Les Coups de Brush (Blobs animés) */}
            {/* Note comment je positionne tout sur les côtés (left/right négatifs) */}

            {/* GAUCHE - Grand coup cyan vertical */}
            <BrushStroke
                color="bg-[#06b6d4]" // Cyan
                className="top-[10%] -left-[10%] w-[35vw] h-[40vh] opacity-30"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [-10, -15, -10], // Légère rotation
                    x: [0, 20, 0], // Flottement horizontal
                }}
                duration={15}
            />

            {/* GAUCHE - Petit accent violet */}
            <BrushStroke
                color="bg-[#8b5cf6]" // Violet
                className="top-[40%] -left-[5%] w-[20vw] h-[20vw] opacity-20"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                    y: [0, -30, 0],
                }}
                duration={12}
                delay={2}
            />

            {/* DROITE - Grand coup violet/bleu étiré */}
            <BrushStroke
                color="bg-[#7c3aed]" // Deep Purple
                className="top-[20%] -right-[12%] w-[40vw] h-[50vh] opacity-25"
                animate={{
                    scale: [1, 1.05, 1],
                    rotate: [15, 20, 15],
                    x: [0, -30, 0],
                }}
                duration={18}
                delay={1}
            />

            {/* DROITE - Accent Cyan en bas */}
            <BrushStroke
                color="bg-[#22d3ee]" // Bright Cyan
                className="bottom-[10%] -right-[5%] w-[30vw] h-[30vw] opacity-20"
                animate={{
                    scale: [1, 1.15, 1],
                    y: [0, 40, 0],
                }}
                duration={14}
                delay={3}
            />

            {/* BAS - Une nappe diffuse pour lier le tout */}
            <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black via-gray-900/50 to-transparent z-10" />

        </div>
    );
}

// Composant réutilisable pour chaque "Tache"
function BrushStroke({ color, className, animate, duration, delay = 0 }: any) {
    return (
        <motion.div
            className={`absolute rounded-[100%] blur-[80px] sm:blur-[120px] mix-blend-screen ${color} ${className}`}
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0.08, 0.16, 0.08], // Effet de respiration (glowing)
                ...animate
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
}