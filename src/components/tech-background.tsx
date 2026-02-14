"use client";

import { useEffect, useRef } from "react";

// Configuration modifiable pour ajuster le style facilement
const CONFIG = {
    particleCount: 100, // Nombre de points (ajuster selon la performance)
    connectionDistance: 120, // Distance max pour créer une ligne
    mouseRange: 150, // Rayon d'influence de la souris
    baseSpeed: 0.5, // Vitesse de flottement naturel
    colors: ["#06b6d4", "#8b5cf6", "#3b82f6"], // Cyan, Violet, Blue
};

export default function ModernTechBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        // Gestion de la souris avec "Easing" (pour que le mouvement ne soit pas saccadé)
        let mouse = { x: -1000, y: -1000 };

        // Classe Particle améliorée
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            originalX: number;
            originalY: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                // Vitesse aléatoire fluide
                this.vx = (Math.random() - 0.5) * CONFIG.baseSpeed;
                this.vy = (Math.random() - 0.5) * CONFIG.baseSpeed;
                // Taille variable pour effet de profondeur (les petits bougent plus lentement, les gros plus vite ?)
                // Ici on fait l'inverse pour simuler la profondeur : gros = proche = rapide (parallax)
                this.size = Math.random() * 2 + 1;
                this.color = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];

                // On garde une référence (optionnel si on voulait un effet de grille, ici non utilisé mais utile pour extension)
                this.originalX = this.x;
                this.originalY = this.y;
            }

            update() {
                // Mouvement naturel
                this.x += this.vx;
                this.y += this.vy;

                // Rebondir sur les bords de manière fluide (wrap around)
                // Si la particule sort à droite, elle revient à gauche (effet infini)
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                // Interaction Souris (Physique de répulsion douce)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CONFIG.mouseRange) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (CONFIG.mouseRange - distance) / CONFIG.mouseRange;

                    // Plus doux : on pousse la particule, mais on ne change pas brutalement sa direction
                    const repulsion = force * 2; // Force multiplier
                    this.vx -= forceDirectionX * repulsion * 0.05;
                    this.vy -= forceDirectionY * repulsion * 0.05;
                } else {
                    // Retour progressif à la vitesse normale (friction pour éviter que ça parte en vrille)
                    // C'est subtil, mais ça stabilise l'animation
                    const baseVx = (this.vx > 0 ? 1 : -1) * 0.2; // Tendance légère
                    if (Math.abs(this.vx) > CONFIG.baseSpeed * 2) this.vx *= 0.98;
                    if (Math.abs(this.vy) > CONFIG.baseSpeed * 2) this.vy *= 0.98;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialisation
        let particles: Particle[] = [];

        const init = () => {
            width = canvas.width = containerRef.current?.offsetWidth || window.innerWidth;
            height = canvas.height = containerRef.current?.offsetHeight || window.innerHeight;

            particles = [];
            // Adapter le nombre de particules à la taille de l'écran (moins sur mobile)
            const density = width < 768 ? 50 : CONFIG.particleCount;

            for (let i = 0; i < density; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Mise à jour et dessin
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Dessiner les connexions
                // Optimisation: On ne compare qu'aux particules après i pour éviter les doublons
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONFIG.connectionDistance) {
                        ctx.beginPath();
                        // L'opacité dépend de la distance : plus proche = plus visible
                        const opacity = 1 - distance / CONFIG.connectionDistance;

                        // Créer un dégradé pour la ligne entre les deux points
                        const gradient = ctx.createLinearGradient(
                            particles[i].x, particles[i].y,
                            particles[j].x, particles[j].y
                        );
                        // Utiliser les couleurs des particules pour le dégradé
                        // Astuce: convertir hex en rgb pour gérer l'opacité serait mieux, 
                        // mais ici on applique l'opacité globale au stroke

                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.4})`; // Violet par défaut avec opacité dynamique
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        // Event Listeners
        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener("resize", handleResize);
        // On attache l'événement au parent ou à window pour une meilleure capture
        containerRef.current?.addEventListener("mousemove", handleMouseMove);
        containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", handleResize);
            containerRef.current?.removeEventListener("mousemove", handleMouseMove);
            containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden bg-transparent"
        // Le z-index 0 permet de le mettre derrière votre contenu (qui devra avoir z-10 ou relative)
        >
            <canvas
                ref={canvasRef}
                className="block h-full w-full"
                style={{ touchAction: "none" }}
            />

            {/* Optionnel : Un overlay gradient pour fondre les bords et donner un look plus "pro" */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
        </div>
    );
}