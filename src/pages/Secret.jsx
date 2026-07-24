import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SECRET_PASSWORD } from "../config/constants";

function Secret() {

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkPassword = () => {

        if (password === "SECRET_PASSWORD") {
            navigate("/ending");
        } else {
            alert("Tanggal yg paling km ingat weeeee.");
        }
    };

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
            p-5
            "
        >
            <h1
                className="
                text-4xl
                md:text-6xl
                font-bold
                mb-5
                "
            >
                Secret Chapter
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
                hover:scale-105
                transition
                "
            >
                Unlock
            </button>

        </div>
    );
}

export default Secret;