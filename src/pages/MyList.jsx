import { useNavigate } from "react-router-dom";

function MyList() {
    const navigate = useNavigate();
    const memories = [
        "First Chat",
        "First Photo",
        "First Call",
        "First Gift",
        "First Date",
        "Our Future",
    ];

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-5xl font-bold mb-10">
                My List
            </h1>
            <button
    onClick={() => navigate("/timeline")}
    className="
    bg-red-600
    px-6
    py-3
    rounded
    mb-10
    hover:scale-105
    transition
    "
>
    Continue to Timeline
</button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {memories.map((item, index) => (
                    <div
                        key={index}
                        className="
                        h-80
                        bg-gray-900
                        rounded-xl
                        p-6
                        hover:scale-105
                        transition
                        "
                    >
                        <h1 className="text-6xl text-red-600">
                            {index + 1}
                        </h1>

                        <p className="mt-10 text-2xl">
                            {item}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default MyList;