import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tudum() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/splash");
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="
                min-h-screen
                bg-black
                flex
                items-center
                justify-center
                overflow-hidden
                select-none
                relative
            "
        >
            {/* Efek Vignette & Red Ambient Light Ala Layar Bioskop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black pointer-events-none animate-pulse" />

            <div className="text-center px-4 relative z-10">
                <h1
                    style={{ fontFamily: "Bebas, sans-serif" }}
                    className="
                        text-4xl
                        md:text-7xl
                        font-black
                        text-[#E50914]
                        tracking-[10px]
                        md:tracking-[20px]
                        drop-shadow-[0_0_50px_rgba(229,9,20,0.8)]
                        animate-pulse
                        transition-all
                        duration-1000
                    "
                >
                    WARNING: MASTERPIECE AHEAD
                </h1>

                <div className="mt-8 space-y-4">
                    <p
                        className="
                            text-red-500
                            text-xs
                            md:text-sm
                            tracking-[8px]
                            font-extrabold
                            uppercase
                            drop-shadow-[0_0_15px_rgba(229,9,20,0.6)]
                        "
                    >
                        NETFLIX UNIVERSE EXCLUSIVE
                    </p>

                    <p
                        className="
                            text-white
                            italic
                            text-sm
                            md:text-lg
                            font-light
                            tracking-wider
                            drop-shadow-lg
                        "
                    >
                        Starring the Only Core Memory: <span className="text-[#E50914] font-bold not-italic">Mutia Rahmah</span>
                    </p>

                    <p
                        className="
                            text-gray-400
                            text-xs
                            md:text-sm
                            mt-5
                            max-w-sm
                            md:max-w-md
                            mx-auto
                            font-light
                            leading-relaxed
                            tracking-wide
                        "
                    >
                        Peringatan keras: Mengandung kadar kebaperan tingkat tinggi, senyuman candu, serta plot twist paling gila di hidupku di mana satu orang perempuan sukses bikin aku kecanduan mencintainya tanpa tombol pause.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tudum;