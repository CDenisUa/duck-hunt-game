// Core
import { motion } from 'framer-motion';
import {type FC, useEffect, useState} from "react";
// Types
import type {DuckPropTypes} from "./Duck.types.ts";

const Duck: FC<DuckPropTypes> = (props) => {
    const {
        isHit = false,
        setIsHit
    } = props;
    const [fly, setFly] = useState(false);
    const wingsUpOpacity = !isHit ? (fly ? 1 : 0) : 0;
    const wingsDownOpacity = !isHit ? (!fly ? 1 : 0) : 0;

    useEffect(() => {
        if (isHit) return;

        const interval = setInterval(() => {
            setFly(prev => !prev);
        }, 300);

        return () => clearInterval(interval);
    }, [isHit]);

    return (
        <motion.svg
            onClick={() => setIsHit(true)}
            xmlns="http://www.w3.org/2000/svg"
            width={246}
            height={64}
            initial={{ opacity: 1 }}
            animate={{ opacity: isHit ? 0 : 1 }}
            transition={{ duration: isHit ? 1 : 0.5 }}
        >
            <g fill="none" fillRule="evenodd">
                {/*Wings Down*/}
                <motion.g
                    id="wings-down"
                    initial={false}
                    animate={{ opacity: wingsDownOpacity }}
                    transition={{ duration: 0.1 }}
                    transform="translate(10, 12)"
                >
                    <path fill="#E26D02" d="M72.12 15.44H86v4.517H72.12z"/>
                    <path
                        fill="#9B9B9B"
                        d="M28.667 33.806v-8.43h-5.432v8.43h-2.112v4.517h10.863v-4.517z"
                    />
                    <path
                        fill="#EF941B"
                        d="M86 16.043H73.628v-5.118h2.112v1.806h5.13v1.204H86z"
                    />
                    <path
                        fill="#C9CBCD"
                        d="M70.912 19.355H57.937v-3.01h-2.414v5.117h-4.828v-7.527h2.716v-1.204h2.414v-1.204h2.112V9.118h2.716v-2.71h10.26v1.807h2.715v7.828h-2.716z"
                    />
                    <path
                        fill="#C9CBCD"
                        d="M58.842 6.108v3.311h4.225V4.602h-3.923V4h-3.018v2.108z"
                    />
                    <path
                        fill="#9B9B9B"
                        d="M69.705 19.054v-3.312h3.923v4.215H72.12v3.613H57.333v-4.516z"
                    />
                    <path fill="#C9CBCD" d="M60.954 20.86h2.716v-1.806h-2.716z"/>
                    <path
                        fill="#9B9B9B"
                        d="M50.695 27.183h5.13V23.57h2.414v-7.828H53.41v5.118h-2.716z"
                    />
                    <path
                        fill="#C9CBCD"
                        d="M50.695 20.56v-6.625h-3.018v2.41h-4.224v3.31H39.53v5.12h3.923v2.408h9.958v-6.624z"
                    />
                    <path fill="#465059" d="M21.123 33.204h-5.734v5.119h5.734z"/>
                    <path
                        fill="#465059"
                        d="M4.828 23.57h1.207v-1.807h7.544v-1.806h7.544v1.806-4.215h5.13v14.15H24.14v2.108h-8.75V31.7h-3.923V29.59h-3.32v-3.01H3.621v-2.108H0v-2.71h4.828z"
                    />
                    <path
                        fill="#C9CBCD"
                        d="M15.39 33.806V31.7h-3.923V29.59H9.354v6.022h1.51v2.409h2.111v1.806h2.414v-4.215h3.018v-1.807z"
                    />
                    <path fill="#BDC2C7" d="M39.832 33.806h-4.828v4.517h4.828z"/>
                    <path
                        fill="#9B9B9B"
                        d="M44.66 33.505h3.017v-3.01h1.81v-3.312h-6.034v5.72h-6.035v2.71h7.242z"
                    />
                    <path fill="#C9CBCD" d="M35.305 41.032H22.33v-2.71h12.975z"/>
                    <path
                        fill="#EF941B"
                        d="M21.726 41.032v5.42h-6.94v-5.42h6.94Zm0 7.226h-5.431v-1.806h5.431v1.806Zm-.603 0v3.01h-3.32v-3.01h3.32Z"
                    />
                    <path
                        fill="#CD6200"
                        d="M28.365 43.742h-9.656v-2.71h9.656v2.71Zm-2.414 0v3.01h-4.225v-3.01h4.225Z"
                    />
                    <path
                        fill="#EBEDF0"
                        d="M66.084 7.613h-2.716v9.032h8.148V7.613h-1.81V7.01h-3.622z"
                    />
                    <path fill="#2C333A" d="M67.895 8.516h2.716v5.118h-2.716z"/>
                    <path fill="#9B9B9B" d="M58.239 15.742h2.715v-3.01H58.24z"/>
                    <path fill="#C9CBCD" d="M58.239 21.161h2.715v-3.01H58.24z"/>
                    <path
                        fill="#465059"
                        d="M39.99 55.484V58.796h4.27v-1.807h3.662V60h4.271v-8.731h-1.525v-4.516h-1.83v-2.409H46.09V33.505h-1.83v-6.322h8.848v-5.42h-2.136v-5.72h-6.712v-2.108h-6.408v-.903H25.954V29.29h.916v3.312h-1.22v5.42h1.83v11.44h1.525v3.011h8.543v3.01h2.441v-.902h4.272v2.408Z"
                    />
                </motion.g>

                {/*Wings Up*/}
                <motion.g
                    id="wings-up"
                    initial={false}
                    animate={{ opacity: wingsUpOpacity }}
                    transition={{ duration: 0.1 }}
                    transform="translate(-72, 0)"
                >
                    <path fill="#C9CBCD" d="M120.895 53.784H108.07v-3.005h12.825z"/>
                    <path fill="#E26D02" d="M158.772 28.244H171v4.507h-12.228z"/>
                    <path
                        fill="#C9CBCD"
                        d="M130.14 13.822v9.915h-.894v6.61h.894v18.029h-9.544v2.704h-3.28v-2.704h-7.456V30.347h2.684v-3.004h-1.193v-5.409h2.088V10.216h1.193V7.211h14.912V5.108h4.175v8.714z"
                    />
                    <path
                        fill="#EF941B"
                        d="M171 28.845h-12.228v-5.108h2.088v1.803h5.07v1.202H171z"
                    />
                    <path
                        fill="#C9CBCD"
                        d="M106.877 45.972h-5.666v5.108h5.666zM156.088 32.15h-12.825v-3.004h-2.386v4.507h-5.666v-6.911h3.578V25.54h2.386v-1.202h2.088v-2.404h2.684V19.23h10.14v1.803h2.685v8.413h-2.684z"
                    />
                    <path
                        fill="#C9CBCD"
                        d="M143.86 16.526v5.709h4.175v-6.01h-2.684v-2.103h-2.983v2.404z"
                    />
                    <path
                        fill="#9B9B9B"
                        d="M143.561 31.85h-.596v4.507h14.316V32.75h1.49v-3.906h-3.876v3.005h-8.65v-.902h-2.684zM143.561 28.545h2.685V25.54h-2.685z"
                    />
                    <path fill="#C9CBCD" d="M146.246 33.653h2.684V31.85h-2.684z"/>
                    <path
                        fill="#9B9B9B"
                        d="M136.105 39.962h5.07v-3.605h2.386v-7.812h-4.772v5.108h-2.684z"
                    />
                    <path
                        fill="#465059"
                        d="M138.79 39.962h-9.843V37.56h-3.877V32.45h1.79V21.934h2.087V12.62h3.281V7.812h1.491V5.108h-4.175v2.404h-6.562V4.207h2.386V1.803h4.176v.901h4.175V0h3.58v8.113h-1.79v4.807h-1.491v2.103h-2.685V25.84h-2.087v3.306h3.877v-2.404h2.982v6.61h2.684v6.61Zm-25.65-29.746h2.386v5.408h-2.386v-5.408Zm4.772-3.606h5.07v3.005h-5.07V6.61ZM90.772 36.357h1.193v-1.803h7.456v-1.803h7.456v1.803-4.207h5.07V44.47h-2.087v2.104h-8.65v-2.104h-3.877v-2.103h-3.28v-3.004h-4.474v-2.104H86v-2.704h4.772z"
                    />
                    <path
                        fill="#C9CBCD"
                        d="M101.21 46.573v-2.104h-3.877v-2.103h-2.087v6.01h1.49v2.403h2.089v1.803h2.386v-4.206h2.982v-1.803z"
                    />
                    <path
                        fill="#9B9B9B"
                        d="M117.614 46.573h-10.737v4.507h10.737zM117.614 30.347h-5.667v6.911h4.176v2.404H120v1.803h8.947v-3.906h-3.877V32.45h1.79v-3.906h-9.246z"
                    />
                    <path
                        fill="#9B9B9B"
                        d="M130.14 46.272h2.983v-3.004h1.79v-3.306h-5.966v5.71h-5.965v.9h-2.386v4.508h4.772v-2.704h4.772z"
                    />
                    <path
                        fill="#EF941B"
                        d="M107.474 53.784v5.408h-6.86v-5.408h6.86Zm0 7.211h-5.369v-1.803h5.369v1.803Zm-.597 0V64h-3.28v-3.005h3.28Z"
                    />
                    <path
                        fill="#CD6200"
                        d="M114.035 56.488h-9.544v-2.704h9.544v2.704Zm-2.386 0v3.005h-4.175v-3.005h4.175Z"
                    />
                    <path
                        fill="#EBEDF0"
                        d="M151.316 20.432h-2.684v9.014h8.052v-9.014h-1.79v-.601h-3.578z"
                    />
                    <path fill="#2C333A" d="M153.105 21.333h2.684v5.108h-2.684z"/>
                    <path d="M171 5h85v53.2h-85z"/>
                </motion.g>

            </g>
        </motion.svg>
    );
}
export default Duck;
