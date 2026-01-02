import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

interface IntroAnimationProps {
    onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-aviation-navy overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            onAnimationComplete={() => {
                // We trigger clean up after the main sequence is done, 
                // but the exit animation is handled by AnimatePresence in the parent
            }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Animated Icon */}
                <motion.div
                    initial={{ scale: 0, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "backOut", delay: 0.1 }}
                    className="mb-8"
                >
                    <img src={getAssetPath("/favicon.png")} alt="HTC Logo" className="w-32 h-32 object-contain" />
                </motion.div>

                {/* Separator Line */}
                <motion.div
                    className="w-full h-[1px] bg-white/10 mb-8"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                />

                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="text-lg md:text-xl text-white font-bold tracking-[0.3em] uppercase"
                    >
                        Seja Bem-Vindo
                    </motion.p>
                </div>

                {/* Loading Line */}
                <motion.div
                    className="mt-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.6 }}
                    onAnimationComplete={() => setTimeout(onComplete, 300)} // Small delay before exit
                />
            </div>
        </motion.div>
    );
};
