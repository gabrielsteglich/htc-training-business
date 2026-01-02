import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: string;
    duration?: number;
    className?: string;
}

// Extracts numeric parts and preserves symbols like +, %, etc.
const parseValue = (value: string): { number: number; prefix: string; suffix: string } => {
    // Match optional prefix (like currency), number, and suffix (like +, %, etc.)
    const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);

    if (match) {
        const prefix = match[1] || '';
        const numberStr = match[2].replace(/,/g, '').replace(/\./g, '');
        const suffix = match[3] || '';
        return { number: parseInt(numberStr, 10) || 0, prefix, suffix };
    }

    return { number: 0, prefix: '', suffix: value };
};

// Formats number with thousands separator
const formatNumber = (num: number): string => {
    return num.toLocaleString('pt-BR');
};

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    value,
    duration = 2000,
    className = ''
}) => {
    const [displayValue, setDisplayValue] = useState('0');
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const hasAnimated = useRef(false);

    const { number: targetNumber, prefix, suffix } = parseValue(value);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = Date.now();
        const startValue = 0;

        // Easing function for smooth deceleration
        const easeOutQuart = (t: number): number => {
            return 1 - Math.pow(1 - t, 4);
        };

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);

            const currentValue = Math.floor(startValue + (targetNumber - startValue) * easedProgress);
            setDisplayValue(formatNumber(currentValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(formatNumber(targetNumber));
            }
        };

        // Small delay before starting animation for dramatic effect
        const timeoutId = setTimeout(() => {
            requestAnimationFrame(animate);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [isInView, targetNumber, duration]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            {prefix}{displayValue}{suffix}
        </motion.span>
    );
};
