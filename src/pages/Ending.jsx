function Ending() {
    return (
        <div
            className="
            min-h-screen
            bg-black
            text-white
            flex
            flex-col
            items-center
            justify-center
            text-center
            p-5
            "
        >
            <p className="text-gray-500 mb-10">
                Thank you for watching.
            </p>

            <h1 className="text-4xl md:text-7xl font-bold mb-8">
                My Girlfriend's
            </h1>

            <div className="space-y-5 text-gray-300">

                <p>
                    Produced by
                </p>

                <h2 className="text-2xl">
                    Prizy Aditia Fitra
                </h2>

                <div className="pt-10">
                    <p>Starring</p>

                    <h2 className="text-2xl">
                        Mutia Rahmah
                    </h2>
                </div>

                <div className="pt-10">
                    <p>Special Thanks</p>

                    <p>Coffee</p>
                    <p>Spotify</p>
                    <p>Late Night Conversations</p>
                    <p>The Universe</p>
                </div>

            </div>

            <div className="mt-20">

                <p className="text-red-500 text-xl">
                    See you in the next chapter.
                </p>

                <p className="text-gray-600 mt-3">
                    Coming December 30th, 2026.
                </p>

            </div>
        </div>
    );
}

export default Ending;