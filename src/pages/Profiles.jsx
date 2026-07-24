import { useNavigate } from "react-router-dom";

import mutia from "../assets/profiles/mutia-profile.jpg";
import guest from "../assets/profiles/guest-profile.jpg";

function Profiles() {

    const navigate = useNavigate();

    const chooseProfile = (name) => {

        localStorage.setItem(
            "profile",
            name
        );

        navigate("/home");
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
                mb-16
                "
            >
                Who's Watching?
            </h1>

            <div
                className="
                flex
                gap-10
                flex-wrap
                justify-center
                "
            >
                <div
                    onClick={() => chooseProfile("Mutia")}
                    className="
                    cursor-pointer
                    hover:scale-110
                    duration-300
                    text-center
                    "
                >
                    <img
                        src={mutia}
                        alt="Mutia"
                        className="
                        w-40
                        h-40
                        rounded-xl
                        object-cover
                        "
                    />

                    <p className="mt-5">
                        Mutia Rahmah
                    </p>
                </div>

                <div
                    onClick={() => chooseProfile("Guest")}
                    className="
                    cursor-pointer
                    hover:scale-110
                    duration-300
                    text-center
                    "
                >
                    <img
                        src={guest}
                        alt="Guest"
                        className="
                        w-40
                        h-40
                        rounded-xl
                        object-cover
                        "
                    />

                    <p className="mt-5">
                        Guest
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Profiles;