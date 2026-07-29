import { useNavigate } from "react-router-dom";
import { useState } from "react";

import mutia from "../assets/profiles/mutia-profile.jpg";
import guest from "../assets/profiles/guest-profile.jpg";
import transition from "../assets/music/transition.mp3";

function Profiles() {
    const navigate = useNavigate();
    const [selectedProfile, setSelectedProfile] = useState(null);

    const chooseProfile = (profileName) => {
        const audio = new Audio(transition);
        audio.volume = 0.5;
        audio.play();

        setSelectedProfile(profileName);
        localStorage.setItem("profile", profileName);

        setTimeout(() => {
            navigate("/home");
        }, 800);
    };

    return (
        <div
            className="
                min-h-screen
                bg-[#141414]
                text-white
                flex
                flex-col
                items-center
                justify-center
                p-4
                relative
                overflow-hidden
                select-none
            "
        >
            {/* Netflix Logo persis di pojok kiri atas */}
            <div className="absolute top-6 left-6 md:left-12 z-20">
                <span
                    style={{ fontFamily: "Bebas, sans-serif" }}
                    className="
                        text-[#E50914]
                        text-3xl
                        md:text-5xl
                        tracking-wider
                        font-black
                    "
                >
                    NETFLIX
                </span>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
                <h1
                    className="
                        text-3xl
                        md:text-5xl
                        font-normal
                        mb-8
                        text-[#e5e5e5]
                    "
                    style={{ fontFamily: "NetflixSans, Helvetica, Arial, sans-serif" }}
                >
                    Who&apos;s watching?
                </h1>

                <div
                    className="
                        flex
                        gap-5
                        md:gap-7
                        flex-wrap
                        justify-center
                        items-center
                    "
                >
                    {/* Profil Mutia */}
                    <div
                        onClick={() => chooseProfile("Mutia")}
                        className={`
                            group
                            cursor-pointer
                            text-center
                            transition-all
                            duration-200
                            ${selectedProfile === "Mutia" ? "scale-105 opacity-100" : selectedProfile ? "opacity-30 scale-95" : "hover:scale-105"}
                        `}
                    >
                        <div
                            className={`
                                w-24
                                h-24
                                md:w-36
                                md:h-36
                                rounded-[4px]
                                overflow-hidden
                                border-[3px]
                                transition-all
                                duration-200
                                ${selectedProfile === "Mutia" ? "border-white" : "border-transparent group-hover:border-white"}
                            `}
                        >
                            <img
                                src={mutia}
                                alt="Mutia"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p
                            className="
                                mt-2.5
                                text-[#808080]
                                group-hover:text-[#e5e5e5]
                                text-sm
                                md:text-base
                                font-normal
                                transition-colors
                                duration-200
                            "
                            style={{ fontFamily: "NetflixSans, Helvetica, Arial, sans-serif" }}
                        >
                            Mutia Rahmah
                        </p>
                    </div>

                    {/* Profil Guest */}
                    <div
                        onClick={() => chooseProfile("Guest")}
                        className={`
                            group
                            cursor-pointer
                            text-center
                            transition-all
                            duration-200
                            ${selectedProfile === "Guest" ? "scale-105 opacity-100" : selectedProfile ? "opacity-30 scale-95" : "hover:scale-105"}
                        `}
                    >
                        <div
                            className={`
                                w-24
                                h-24
                                md:w-36
                                md:h-36
                                rounded-[4px]
                                overflow-hidden
                                border-[3px]
                                transition-all
                                duration-200
                                ${selectedProfile === "Guest" ? "border-white" : "border-transparent group-hover:border-white"}
                            `}
                        >
                            <img
                                src={guest}
                                alt="Guest"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p
                            className="
                                mt-2.5
                                text-[#808080]
                                group-hover:text-[#e5e5e5]
                                text-sm
                                md:text-base
                                font-normal
                                transition-colors
                                duration-200
                            "
                            style={{ fontFamily: "NetflixSans, Helvetica, Arial, sans-serif" }}
                        >
                            Guest
                        </p>
                    </div>
                </div>

                {/* Tombol Manage Profiles persis gaya Netflix asli */}
                <div className="mt-14">
                    <button
                        onClick={() => chooseProfile("Mutia")}
                        className="
                            border
                            border-[#808080]
                            text-[#808080]
                            hover:text-white
                            hover:border-white
                            tracking-[2px]
                            px-5
                            py-1.5
                            text-xs
                            md:text-sm
                            transition-colors
                            duration-200
                            bg-transparent
                            font-normal
                            cursor-pointer
                        "
                        style={{ fontFamily: "NetflixSans, Helvetica, Arial, sans-serif" }}
                    >
                        Manage Profiles
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profiles;