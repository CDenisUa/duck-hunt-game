// Core
import {type ComponentType, useEffect, useState} from "react";
import { motion } from "framer-motion";
// Types
import type {DuckPropTypes} from "../components/svg/duck/Duck.types.ts";
// Store
import { useUserStore } from "../store";
// Utils
import { getSettingsByDifficulty } from "../utils/getSettingByDifficulty.ts";
import { getRandomPosition } from "../utils/getRandomPosition.ts";

export const withChaoticFlight = (WrappedComponent: ComponentType<DuckPropTypes>) => {
    const { difficultyLevel } = useUserStore();
    const { interval, stiffness, damping } = getSettingsByDifficulty(difficultyLevel);

    return (props: DuckPropTypes) => {
        const [position, setPosition] = useState(getRandomPosition(difficultyLevel));

        useEffect(() => {
            const id = setInterval(() => {
                setPosition(getRandomPosition(difficultyLevel));
            }, interval);

            return () => clearInterval(id);
        }, [difficultyLevel, interval]);

        return (
            <motion.div
                style={{
                    position: "absolute",
                    width: "246px",
                    height: "64px",
                    pointerEvents: "auto",
                }}
                animate={{ top: position.top, left: position.left }}
                transition={{
                    type: "spring",
                    stiffness,
                    damping,
                }}
            >
                <WrappedComponent {...props} />
            </motion.div>
        );
    };
};

