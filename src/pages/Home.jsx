import mutia from "../assets/images/mutia.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { quotes } from "../constants/quotes";
import Reveal from "../components/Reveal";
import LoadingScreen from "../components/LoadingScreen";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { FaHome, FaFilm, FaHeart } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaTv } from "react-icons/fa";

import p1 from "../assets/posters/1.jpg";
import p2 from "../assets/posters/2.jpg";
import p3 from "../assets/posters/3.jpg";
import p4 from "../assets/posters/4.jpg";
import p5 from "../assets/posters/5.jpg";

function Home() {

    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const secretUnlocked =
    localStorage.getItem("foundSecret");

const readLetter =
    localStorage.getItem("readLetter");
    const hour = new Date().getHours();

const greeting =
    hour < 12
        ? "Good Morning, Sayangkuu."
        : hour < 18
        ? "Good Afternoon, Sayangkuu."
        : "Good Evening, Sayangkuu.";

const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

const firstMeet = new Date("2018-08-16");

const today = new Date();

const daysTogether = Math.floor(
    (today - firstMeet) / (1000 * 60 * 60 * 24)
);
const [visits, setVisits] = useState(0);
const lastPage =
    localStorage.getItem("lastPage");

useEffect(() => {

    const totalVisits =
        Number(localStorage.getItem("visits")) || 0;

    localStorage.setItem(
        "visits",
        totalVisits + 1
    );

    localStorage.setItem(
        "lastPage",
        "Home"
    );

    setVisits(totalVisits + 1);

}, []);

useEffect(() => {

    const timer = setTimeout(() => {

        setShowPopup(true);

    }, 60000);

    return () => clearTimeout(timer);

}, []);

useEffect(() => {

    const timer = setTimeout(() => {

        setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

}, []);
const currentEpisode = 1;
const totalEpisodes = 7;

const progress =
    (currentEpisode / totalEpisodes) * 100;
    const trending = [
        {
            title: "Her Smile",
            image: p1,
        },
        {
            title: "Her Laugh",
            image: p2,
        },
        {
            title: "Her Eyes",
            image: p3,
        },
        {
            title: "Her Voice",
            image: p4,
        },
        {
            title: "Her Presence",
            image: p5,
        },
    ];

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        
        <PageWrapper>
        <Reveal>
        <div
            className="
            min-h-screen
            text-white
            bg-cover
            bg-center
            relative
            "
            style={{
                backgroundImage: `url(${mutia})`,
            }}
        >
            {/* Overlay */}
            <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/60
                to-black/80
                "
            />

            {/* Navbar */}
            <nav
                className="
                relative
                z-10
                flex
                justify-between
                items-center
                px-5
                md:px-10
                py-6
                "
            >
                <h1 className="text-3xl md:text-4xl font-bold text-red-600">
                    NETFLIX
                </h1>

                <div className="hidden md:flex gap-10">

    <div className="flex gap-2 items-center">
        <FaHome />
        <p>Home</p>
    </div>

    <div className="flex gap-2 items-center">
        <FaFilm />
        <p>Series</p>
    </div>

    <div
        onClick={() => navigate("/my-list")}
        className="
        flex
        gap-2
        items-center
        cursor-pointer
        "
    >
        <FaHeart />

        <p>My List</p>
    </div>

</div>
            </nav>

            {/* Hero */}
            <div
                className="
                relative
                z-10
                min-h-[70vh]
                flex
                flex-col
                justify-end
                px-5
                md:px-10
                lg:px-20
                pb-20
                "
            >
                <h1
                    className="
                    text-4xl
                    md:text-6xl
                    lg:text-8xl
                    font-bold
                    text-red-600
                    "
                >
                    MUTIA RAHMAH
                </h1>
                <p className="mt-4 text-gray-300">
    {greeting}
</p>

                <p className="mt-5 text-gray-300 max-w-xl">
                    Romance • Comedy • Comfort Person
                </p>
                <p className="mt-4 italic text-gray-400">
    "{randomQuote}"
</p>

                <p className="mt-5 max-w-2xl text-gray-400">
                    Di antara jutaan manusia di bumi, semesta memilih
                    mempertemukan seorang perempuan bernama Mutia Rahmah
                    dengan seseorang yang selalu menemukan rumah di dalam
                    senyumnya.
                </p>
                <p className="mt-5 text-red-500">
    {daysTogether} days of knowing each other.
</p>
<p className="mt-4 text-gray-400">
    Welcome back, Sayangkuu.
</p>

<p className="mt-2 text-gray-500">
    You've visited MUTIA+ {visits} times.
</p>
<p className="mt-10 text-red-500">
    Last Visited: {lastPage || "Home"}
</p>
<div className="mt-8 max-w-md">

    <p className="text-gray-400">
        Watching Birthday Personal
    </p>

    <p className="mt-2">
        Episode {currentEpisode} / {totalEpisodes}
    </p>

    <div className="w-full h-2 bg-gray-800 rounded mt-4">

        <div
            className="h-2 bg-red-600 rounded"
            style={{
                width: `${progress}%`,
            }}
        />

    </div>

    <p className="mt-2 text-gray-500">
    {Math.round(progress)}% completed
</p>
    <div className="mt-5 flex gap-6 text-sm text-gray-500 flex-wrap">

    <p>7 Episodes</p>

    <p>1 Ending Rahasia</p>

    <p>∞ Memories</p>

</div>
<div className="mt-8 space-y-2 text-sm">

    <p>
        🏆 First Visit
    </p>

    {readLetter && (
        <p>
            🏆 Read The Letter
        </p>
    )}

    {secretUnlocked && (
        <p>
            🏆 Found The Secret
        </p>
    )}

</div>

</div>

                <div
                    className="
                    flex
                    flex-col
                    md:flex-row
                    gap-5
                    mt-10
                    "
                >
                    <button
    className="
    bg-white
    text-black
    px-8
    py-3
    rounded-md
    flex
    items-center
    gap-3
    font-semibold
    hover:scale-105
    duration-300
    "
>
    <FaPlay />

    Play
</button>

                    <button
    className="
    bg-gray-700/80
    backdrop-blur-md
    px-8
    py-3
    rounded-md
    flex
    items-center
    gap-3
    font-semibold
    hover:bg-gray-600
    duration-300
    "
>
    <FaInfoCircle />

    More Info
</button>
                </div>
            </div>

            {/* Continue Watching */}
            <div
                className="
                relative
                z-10
                px-5
                md:px-10
                lg:px-20
                pb-20
                "
            >
                <h2 className="text-2xl md:text-3xl mb-8">
                    Continue Watching
                </h2>

                <div
                    className="
                    flex
                    gap-6
                    flex-col
                    md:flex-row
                    flex-wrap
                    "
                >
                    <div className="w-full md:w-72 h-40 bg-gray-900 rounded-lg p-5 hover:scale-110
hover:-translate-y-2
duration-300 transition">
                        <h3 className="font-semibold">Episode 1</h3>

                        <p className="mt-3 text-gray-400">
                            Pertama Kali Bertemu
                        </p>
                    </div>

                    <div className="w-full md:w-72 h-40 bg-gray-900 rounded-lg p-5 hover:scale-110
hover:-translate-y-2
duration-300 transition">
                        <h3 className="font-semibold">Episode 2</h3>

                        <p className="mt-3 text-gray-400">
                            Hari Kita Banyak Tertawa
                        </p>
                    </div>

                    <div className="w-full md:w-72 h-40 bg-gray-900 rounded-lg p-5 hover:scale-110
hover:-translate-y-2
duration-300 transition">
                        <h3 className="font-semibold">Episode 3</h3>

                        <p className="mt-3 text-gray-400">
                            Happy Birthday, Sayang
                        </p>
                    </div>

                    <div
    onClick={() => navigate("/letter")}
    className="
    cursor-pointer
    w-full
    md:w-72
    h-40
    bg-gray-900
    rounded-lg
    p-5
    hover:scale-110
    hover:-translate-y-2
    duration-300
    transition
    "
>
    <h3 className="font-semibold">
        Continue Watching
    </h3>

</div>
                </div>
            </div>

            {/* Trending in My Heart */}
            <div
                className="
                relative
                z-10
                px-5
                md:px-10
                lg:px-20
                pb-20
                "
            >
                <h2 className="text-2xl md:text-3xl mb-8">
                    Trending in My Heart
                </h2>

                <div className="flex gap-6 overflow-x-auto pb-4">
                    {trending.map((item, index) => (
                        <div
                            key={index}
                            className="
                            min-w-[220px]
                            hover:scale-110
                            transition
                            duration-300
                            "
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="
                                w-[220px]
                                h-[320px]
                                object-cover
                                rounded-xl
                                "
                            />

                            <p className="mt-4 text-center">
                                #{index + 1} · {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer
                className="
                relative
                z-10
                text-center
                text-gray-500
                py-10
                "
            >
                <p
    className="cursor-pointer"
    onClick={() => navigate("/secret")}
>
    Built with love by Prizy Aditia Fitra.
</p>

                <p className="mt-2">
                    Happy Birthday, Mutia Rahmah.
                </p>
            </footer>
        </div>
        {showPopup && (

    <div className="flex gap-3 items-center">
        
        <p>
            Are you still watching?
        </p>

        <button
            onClick={() => setShowPopup(false)}
            className="
            mt-3
            bg-red-600
            px-4
            py-2
            rounded
            "
        >
            Yes, always.
        </button>

    </div>

)}
        </Reveal>
        </PageWrapper>
    );
}

export default Home;