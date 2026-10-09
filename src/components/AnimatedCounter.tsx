"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LOCALES } from "@/lib/i18n";

interface AnimatedCounterProps {
    value: string;
    duration?: number;
    className?: string;
}

const parseValue = (
    value: string
): { number: number; prefix: string; suffix: string } => {
    const match = value.match(/^([^\d]*)(\d[\d,.]*)(.*)/);


    if (match) {
        const prefix = match[1] || "";
        const numberStr = match[2].replace(/,/g, "").replace(/\./g, "");
        const suffix = match[3] || "";
        return { number: parseInt(numberStr, 10) || 0, prefix, suffix };
    }

    return { number: 0, prefix: "", suffix: value };
};

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    value,
    duration = 2000,
    className = "",
}) => {
    const { language } = useLanguage();
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const hasAnimated = useRef(false);

    const { number: targetNumber, prefix, suffix } = parseValue(value);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = Date.now();
        const startValue = 0;

        const easeOutQuart = (t: number): number => {
            return 1 - Math.pow(1 - t, 4);
        };

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);

            const currentValue = Math.floor(
                startValue + (targetNumber - startValue) * easedProgress
            );
            setDisplayValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(targetNumber);
            }
        };

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
            {prefix}
            {displayValue.toLocaleString(LOCALES[language])}
            {suffix}
        </motion.span>
    );
};
