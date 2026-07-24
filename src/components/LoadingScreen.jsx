function LoadingScreen() {
    return (
        <div
            className="
            fixed
            inset-0
            bg-black
            flex
            items-center
            justify-center
            z-50
            "
        >
            <div className="text-center">

                <h1
                    className="
                    text-6xl
                    md:text-8xl
                    font-bold
                    text-red-600
                    animate-pulse
                    "
                >
                    TIAAA+
                </h1>

                <p className="mt-5 text-gray-400">
                    Loading your favorite person...
                </p>

            </div>
        </div>
    );
}

export default LoadingScreen;