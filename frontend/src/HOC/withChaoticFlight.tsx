// Core
import { type ComponentType, useEffect, useState } from "react";
import { motion } from "framer-motion";
// Types
import type { DuckPropTypes } from "../components/svg/duck/Duck.types.ts";
// Store
import { useUserStore, useGameStore } from "../store";
// Utils
import { getSettingsByDifficulty } from "../utils/getSettingByDifficulty.ts";
import { getRandomPosition } from "../utils/getRandomPosition.ts";

export const withChaoticFlight = (WrappedComponent: ComponentType<DuckPropTypes>) => {
    return (props: DuckPropTypes) => {
        const { round } = useGameStore();
        const { difficultyLevel, setDifficultyLevel } = useUserStore();

        const { interval, stiffness, damping, type } = getSettingsByDifficulty(difficultyLevel, round);

        const [position, setPosition] = useState(() => getRandomPosition(difficultyLevel));
        const [prevPosition, setPrevPosition] = useState(position);

        useEffect(() => {
            if (type !== difficultyLevel) {
                setDifficultyLevel(type);
            }
        }, [type, difficultyLevel, setDifficultyLevel]);

        useEffect(() => {
            const id = setInterval(() => {
                const newPosition = getRandomPosition(difficultyLevel);
                setPrevPosition(position);
                setPosition(newPosition);
            }, interval);

            return () => clearInterval(id);
        }, [difficultyLevel, interval, position]);

        return (
            <motion.div
                style={{
                    position: "absolute",
                    width: "246px",
                    height: "64px",
                    pointerEvents: "auto",
                }}
                initial={{
                    top: prevPosition?.top,
                    left: prevPosition?.left,
                }}
                animate={{
                    top: position?.top,
                    left: position?.left,
                }}
                transition={{
                    type: "spring",
                    stiffness,
                    damping,
                }}
                exit={{ opacity: 0 }}
            >
                <WrappedComponent {...props} />
            </motion.div>
        );
    };
};