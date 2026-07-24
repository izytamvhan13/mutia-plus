import { useNavigate } from "react-router-dom";
import { useEffect } from "react";  
import PageWrapper from "../components/PageWrapper";

function Ending() {
    useEffect(() => {

    localStorage.setItem(
        "lastPage",
        "Ending"
    );

}, []);

    const navigate = useNavigate();

    return (
        <PageWrapper>
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
                <h1
                    className="
                    text-4xl
                    md:text-7xl
                    font-bold
                    text-red-600
                    "
                >
                    THANK YOU
                </h1>

                <h2 className="mt-5 text-2xl md:text-4xl">
                    FOR WATCHING
                </h2>

                <p className="mt-10 text-gray-500">
                    MUTIA+
                </p>

                <p className="text-gray-500">
                    An Original Netflix Series
                </p>

                <div className="mt-10 text-3xl">
                    ★★★★★
                </div>

                <p className="mt-10 max-w-xl text-gray-400">
                    Every story eventually reaches its final scene.
                    But I hope ours is only getting started.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="
                    mt-10
                    bg-red-600
                    px-6
                    py-3
                    rounded
                    hover:scale-110
                    transition
                    "
                >
                    Watch Again
                </button>
            </div>
        </PageWrapper>
    );
}

export default Ending;