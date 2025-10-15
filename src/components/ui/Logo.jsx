import Image from "next/image";
import { motion } from "framer-motion";

export const Logo = () => {
    return (
        <a
            href="#"
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
        >
            <Image width={35} height={35} src="/logo-image.png" alt="" className="rounded-sm" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-lg whitespace-pre text-white dark:text-white"
            >
                MuffinBite
            </motion.span>
        </a>
    );
};
export const LogoIcon = () => {
    return (
        <a
            href="#"
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black "
        >
            <Image width={130} height={130} src="/logo-image.png" alt="" className="rounded-sm" />
        </a>
    );
};