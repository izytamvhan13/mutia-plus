import { useNavigate } from "react-router-dom";

function Splash() {

  const navigate = useNavigate();
    return (
        <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
            <h2 className="text-sm tracking-[12px] text-gray-400 mb-8">
    NETFLIX PRESENTS
</h2>

<h1 className="text-7xl font-bold text-red-600">
    MUTIA RAHMAH
</h1>

<p className="text-gray-500 mt-3 tracking-[6px]">
    THE STORY OF
</p>

<p className="mt-10 text-gray-400 italic">
    The Story Begins...
</p>

            <button
    onClick={() => navigate("/profiles")}
    className="
    mt-10
    px-8
    py-3
    bg-red-600
    rounded
    hover:bg-red-700
    transition
    duration-300
    hover:scale-105
    "
>
    ENTER
</button>
        </div>
    );
}

export default Splash;