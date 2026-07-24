import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function Secret() {
    const messages = [
    "You found the secret.",
    "Achievement Unlocked.",
    "There are still many stories left.",
    "You're my favorite easter egg.",
];

const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkPassword = () => {

        if (password === "160818") {
            navigate("/ending");
        } else {
            alert("Tanggal yg paling km ingat weeeee.");
        }
    };

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
            p-5
            "
        >
            <h1>
    {randomMessage}
</h1>

            <p className="text-gray-400 mb-10 text-center">
                This page is only for Mutia Rahmah.
            </p>

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                bg-gray-900
                px-5
                py-4
                rounded
                w-full
                max-w-md
                outline-none
                "
            />

            <button
                onClick={checkPassword}
                className="
                mt-5
                bg-red-600
                px-6
                py-3
                rounded
                hover:scale-110
hover:-translate-y-2
duration-300
                transition
                "
            >
                Unlock
            </button>

        </div>
        </PageWrapper>
    );
}

export default Secret;