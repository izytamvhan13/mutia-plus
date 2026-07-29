function LoadingScreen() {
    return (
        <div
            className="
                fixed
                inset-0
                bg-black
                flex
                flex-col
                items-center
                justify-center
                z-50
                select-none
                overflow-hidden
            "
        >
            {/* ── Thin Netflix-style progress bar at top ── */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E50914]/20 z-20">
                <div
                    className="h-full bg-[#E50914]"
                    style={{
                        animation: "netflixBar 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                    }}
                />
            </div>

            {/* ── Ambient red glow background — very subtle ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 50% 55%, rgba(229,9,20,0.07) 0%, transparent 70%)",
                }}
            />

            {/* ── Main content ── */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center -translate-y-4">
                {/* Spinner — refined single ring with glow */}
                <div className="relative w-20 h-20 mb-10 flex items-center justify-center">
                    {/* Outer track */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-white/5" />
                    {/* Spinning ring */}
                    <div
                        className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#E50914] animate-spin"
                        style={{
                            boxShadow: "0 0 18px rgba(229,9,20,0.6), 0 0 40px rgba(229,9,20,0.2)",
                            animationDuration: "0.9s",
                            animationTimingFunction: "linear",
                        }}
                    />
                    {/* Inner pulse */}
                    <div className="absolute inset-3 bg-red-600/10 rounded-full animate-ping pointer-events-none" />

                    {/* NETFLIX text inside ring */}
                    <span
                        className="text-white font-black text-[10px] tracking-[0.25em] z-10"
                        style={{ fontFamily: "Bebas, sans-serif" }}
                    >
                        NETFLIX
                    </span>
                </div>

                {/* TIA+ wordmark — bigger, sharper, more Netflix-like */}
                <h1
                    style={{
                        fontFamily: "Bebas, sans-serif",
                        textShadow:
                            "0 0 40px rgba(229,9,20,0.8), 0 0 80px rgba(229,9,20,0.4), 0 0 120px rgba(229,9,20,0.15)",
                        animation: "wordmarkPulse 3s ease-in-out infinite",
                    }}
                    className="
                        text-6xl
                        md:text-8xl
                        font-black
                        text-[#E50914]
                        tracking-[0.18em]
                    "
                >
                    TIA+
                </h1>

                {/* Divider line — subtle, like Netflix */}
                <div className="w-12 h-px bg-[#E50914]/40 mt-5 mb-5" />

                {/* Loading text */}
                <p
                    className="
                        text-gray-400
                        text-xs
                        md:text-sm
                        tracking-[0.3em]
                        uppercase
                        font-light
                    "
                    style={{
                        fontFamily: "NetflixSans, Helvetica, Arial, sans-serif",
                        animation: "textFade 2s ease-in-out infinite",
                    }}
                >
                    Loading your favorite person...
                </p>
            </div>

            {/* ── Netflix-style bottom wordmark ── */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <span
                    className="text-[#E50914]/30 text-sm tracking-[0.5em] uppercase font-black"
                    style={{ fontFamily: "Bebas, sans-serif" }}
                >
                    NETFLIX
                </span>
            </div>

            {/* ── Keyframe animations injected via style tag ── */}
            <style>{`
                @keyframes netflixBar {
                    0%   { width: 0%; margin-left: 0; }
                    50%  { width: 70%; margin-left: 0; }
                    80%  { width: 30%; margin-left: 70%; }
                    100% { width: 0%; margin-left: 100%; }
                }

                @keyframes wordmarkPulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.75; }
                }

                @keyframes textFade {
                    0%, 100% { opacity: 0.5; }
                    50%       { opacity: 1; }
                }
            `}</style>
        </div>
    );
}

export default LoadingScreen;
