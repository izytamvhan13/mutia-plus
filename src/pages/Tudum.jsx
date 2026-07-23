import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tudum() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/splash");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="
            min-h-screen
            bg-black
            flex
            flex-col
            items-center
            justify-center
            "
        >
            <h1
                className="
                text-5xl
                md:text-8xl
                font-bold
                text-red-600
                animate-pulse
                tracking-[20px]
drop-shadow-2xl
                "
            >
                TUDUM
            </h1>

            <p className="text-gray-500 mt-6">
                Netflix Opening Experience
            </p>
        </div>
    );
}

export default Tudum;