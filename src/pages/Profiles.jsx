import { useNavigate } from "react-router-dom";

function Profiles() {

    const navigate = useNavigate();
    return (
        <div className="h-screen bg-black text-white flex flex-col justify-center items-center">

            <h1 className="text-5xl font-semibold mb-16">
                Who's Watching?
            </h1>

            <div className="flex gap-10 flex-wrap justify-center">

                <div
    onClick={() => navigate("/home")}
    className="
    text-center
    cursor-pointer
    hover:scale-110
    transition
    "
>
    <div className="w-36 h-36 bg-red-600 rounded-md"></div>

    <p className="mt-4">
        Mutia
    </p>
</div>

                <div className="text-center cursor-pointer hover:scale-110 transition">
                    <div className="w-36 h-36 bg-pink-500 rounded-md"></div>
                    <p className="mt-4">Sayang</p>
                </div>

                <div className="text-center cursor-pointer hover:scale-110 transition">
                    <div className="w-36 h-36 bg-yellow-500 rounded-md"></div>
                    <p className="mt-4">Birthday Girl</p>
                </div>

                <div className="text-center cursor-pointer hover:scale-110 transition">
                    <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
                    <p className="mt-4">???</p>
                </div>

            </div>

        </div>
    );
}

export default Profiles;