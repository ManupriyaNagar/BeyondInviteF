'use client';

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Phone() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMusicPlay = () => {
        if (audioRef.current && !isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="w-full -mt-6 relative min-h-screen">
            {/* Background Image */}
            <img
                src="/bg.jpg"
                alt="background"
                className="w-full h-screen object-cover"
            />

            {/* Foreground Content */}
            <div className="container mx-auto absolute inset-0 flex flex-row justify-between items-center pt-20 w-full gap-6">
                {/* Left: Video */}
                <div className="w-[30%] relative">
                    <video
                        src="/video1.mp4"
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="w-auto cover rounded-[3rem] border-b-2 border-black shadow-2xl ml-35 cursor-pointer"
                    />
                </div>

                {/* Center: Image with Framer Motion */}
                <motion.div
                    className="w-[70%] ml-20 mt-60"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 8, delay: 1, type: "spring" }}
                >
                    <img
                        src="/beyong invtes (1).png"
                        alt="Beyond Invite"
                        className="rounded-xl h-[78vh] w-[60vh]"
                    />
                </motion.div>
            </div>

            {/* Music Play Button at Bottom-Right */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleMusicPlay}
                className="absolute bottom-40 right-90 bg-gradient-to-r from-[#dca751] to-[#c7944c] text-white px-2 py-2 rounded-full shadow-xl font-semibold text-lg font-['Noto_Serif_Display']"
            >
                {isPlaying ? "Playing..." : "Play Music"}
            </motion.button>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/apple.mp3" />
        </div>
    );
}