import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tudum() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/splash");
        }, 3500);

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
            "
        >
            <div className="text-center tudum-animation">

                <h1
                    className="
                    text-6xl
                    md:text-9xl
                    font-black
                    text-red-600
                    tracking-[25px]
                    "
                >
                    TUDUM
                </h1>

                <div className="mt-8 space-y-4">

    <p
        className="
        text-gray-500
        text-sm
        md:text-lg
        tracking-[8px]
        "
    >
        NETFLIX PRESENTS
    </p>

    <p
        className="
        text-gray-400
        italic
        text-sm
        md:text-base
        "
    >
        Starring Mutia Rahmah
    </p>

    <p
    className="
    text-gray-600
    text-xs
    mt-8
    "
>
    A story about two people, one birthday, and countless memories.
</p>

</div>

            </div>
        </div>
    );
}

export default Tudum;