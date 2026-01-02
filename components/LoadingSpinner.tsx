import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/assetPath';

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                }}
                className="relative"
            >
                {/* Pulsing blurred background effect */}
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full scale-150"></div>

                <motion.img
                    src={getAssetPath("/favicon.png")}
                    alt="Loading..."
                    className="w-24 h-24 object-contain relative z-10"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        ease: "linear",
                        repeat: Infinity
                    }}
                />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-aviation-navy font-bold tracking-widest text-sm uppercase"
            >
                Carregando...
            </motion.p>
        </div>
    );
};
