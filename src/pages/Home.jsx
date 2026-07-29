import mutia from "../assets/images/mutia.jpg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PageWrapper from "../components/PageWrapper"
import { quotes } from "../constants/quotes"
import Reveal from "../components/Reveal"
import LoadingScreen from "../components/LoadingScreen"
import { FaPlay, FaInfoCircle } from "react-icons/fa"
import { FaHome, FaHeart } from "react-icons/fa"
import { FaPlayCircle } from "react-icons/fa"
import { FaTv } from "react-icons/fa"

import p1 from "../assets/posters/1.jpg"
import p2 from "../assets/posters/2.jpg"
import p3 from "../assets/posters/3.jpg"
import p4 from "../assets/posters/4.jpg"
import p5 from "../assets/posters/5.jpg"
import tudum from "../assets/music/tudum.mp3"

function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        const profile = localStorage.getItem("profile")
    }, [])

    const [showPopup, setShowPopup] = useState(false)
    const [loading, setLoading] = useState(true)
    const [visits, setVisits] = useState(0)
    const [showHome, setShowHome] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const secretUnlocked = localStorage.getItem("foundSecret")
    const readLetter = localStorage.getItem("readLetter")
    const hour = new Date().getHours()

    const greeting =
        hour < 12
            ? "Good Morning, Sayangkuu."
            : hour < 18
              ? "Good Afternoon, Sayangkuu."
              : "Good Evening, Sayangkuu."

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    const firstMeet = new Date("2018-08-15")
    const today = new Date()
    const daysTogether = Math.floor((today - firstMeet) / (1000 * 60 * 60 * 24))

    const currentEpisode = Number(localStorage.getItem("currentEpisode")) || 0
    const lastPage = localStorage.getItem("lastPage")
    if (lastPage) {
        navigate(`/${lastPage.toLowerCase()}`)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
    const timer = setTimeout(() => {
        const audio = new Audio(tudum)

        audio.volume = 0.4
        audio.play()

        setShowHome(true)
    }, 400)

    return () => clearTimeout(timer)
}, [])

    useEffect(() => {
        const totalVisits = Number(localStorage.getItem("visits")) || 0
        localStorage.setItem("visits", totalVisits + 1)
        localStorage.setItem("lastPage", "Home")
        setVisits(totalVisits + 1)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true)
        }, 60000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    const totalEpisodes = 7
    const watchedPercent = Math.round((currentEpisode / totalEpisodes) * 100)

    const progress = (currentEpisode / totalEpisodes) * 100
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
    ]

    if (loading) {
        return <LoadingScreen />
    }

    return (
        <PageWrapper>
            <Reveal>
                <div
                className={`
                    min-h-screen
                    transition-all
                    duration-[1500ms]
                    ${
                        showHome
                            ? "opacity-100"
                            : "opacity-0"
                    }
                `}
            >
                    {/* Navbar */}
                    <nav
                        style={{ fontFamily: "InterBold" }}
                        className={`
                            fixed
                            top-0
                            left-0
                            right-0
                            z-50
                            flex
                            justify-between
                            items-center
                            px-4
                            md:px-12
                            py-4
                            transition-colors
                            duration-500
                            ${scrolled ? "bg-[#141414]/95 shadow-lg backdrop-blur-sm" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"}
                        `}
                    >
                        <div className="flex items-center gap-8">
                            <h1
                                style={{ fontFamily: "Bebas" }}
                                className="text-3xl md:text-5xl font-bold text-[#E50914] tracking-wider cursor-pointer drop-shadow-md"
                            >
                                NETFLIX
                            </h1>

                            <div className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
                                <div className="flex gap-2 items-center cursor-pointer text-white transition hover:text-gray-200">
                                    <FaHome className="text-base" />
                                    <p>Home</p>
                                </div>

                                <div
                                    onClick={() => navigate("/episodes")}
                                    className="flex gap-2 items-center cursor-pointer hover:text-white transition duration-200"
                                >
                                    <FaTv className="text-base" />
                                    <p>Episodes</p>
                                </div>

                                <div
                                    onClick={() => navigate("/my-list")}
                                    className="flex gap-2 items-center cursor-pointer hover:text-white transition duration-200"
                                >
                                    <FaHeart className="text-base" />
                                    <p>My List</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <img
                                src={mutia}
                                alt="profile"
                                className="w-8 h-8 md:w-9 md:h-9 rounded object-cover border border-white/20 shadow"
                            />
                        </div>
                    </nav>

                    {/* Hero */}
                    <div
                        className="
                            relative
                            min-h-[90vh]
                            md:min-h-[95vh]
                            bg-cover
                            bg-center
                            flex
                            flex-col
                            justify-end
                            pb-12
                        "
                        style={{ backgroundImage: `url(${mutia})` }}
                    >
                        {/* Netflix Gradients (Bottom Vignette & Left Vignette) */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[#141414]
                                via-[#141414]/40
                                to-black/60
                            "
                        />
                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-r
                                from-[#141414]/90
                                via-black/30
                                to-transparent
                                max-w-3xl
                            "
                        />

                        <div className="relative z-10 px-4 md:px-12 lg:px-16 pt-32 max-w-4xl">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-[#E50914] text-white font-extrabold text-xs px-1.5 py-0.5 rounded tracking-widest font-sans">
                                    N
                                </span>
                                <p
                                    style={{ fontFamily: "InterBold" }}
                                    className="text-gray-300 text-xs md:text-sm tracking-[4px] uppercase"
                                >
                                    SERIES
                                </p>
                            </div>

                            <h1
                                className="
                                    text-4xl md:text-6xl lg:text-7xl
                                    tracking-wide
                                    leading-[1.05]
                                    font-extrabold
                                    text-white
                                    drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]
                                    uppercase
                                "
                            >
                                MUTIA RAHMAH
                            </h1>

                            <div className="flex items-center gap-3 mt-4 text-xs md:text-sm text-gray-300 font-semibold">
                                <span className="text-[#46d369] font-bold">
                                    99% Match
                                </span>
                                <span className="border border-gray-400/60 px-1.5 py-0.5 text-[11px] bg-black/40">
                                    17+
                                </span>
                                <span>{new Date().getFullYear()}</span>
                                <span className="border border-gray-400/60 px-1 py-0.5 text-[10px] tracking-widest rounded bg-black/40 font-mono">
                                    ULTRA HD
                                </span>
                            </div>

                            <p
                                style={{ fontFamily: "Inter" }}
                                className="mt-4 text-base md:text-xl text-white font-medium drop-shadow"
                            >
                                Happy Birthday, {localStorage.getItem("profile")}
                            </p>

                            <p
                                style={{ fontFamily: "Inter" }}
                                className="mt-1 text-sm md:text-base text-gray-300"
                            >
                                {greeting}
                            </p>

                            <p className="mt-3 text-gray-400 tracking-widest text-[11px] md:text-xs font-semibold">
                                ROMANCE • COMEDY • COMFORT PERSON
                            </p>

                            <p
                                style={{ fontFamily: "CormorantItalic" }}
                                className="mt-4 text-xl md:text-2xl text-gray-100 max-w-xl italic leading-relaxed drop-shadow"
                            >
                                "{randomQuote}"
                            </p>

                            <p
                                style={{ fontFamily: "Inter" }}
                                className="mt-3 max-w-xl text-sm md:text-base text-gray-300 leading-relaxed"
                            >
                                Di antara jutaan manusia di bumi, semesta memilih
                                mempertemukan seorang perempuan bernama Mutia Rahmah
                                dengan seseorang yang selalu menemukan rumah di
                                dalam senyumnya.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs md:text-sm">
                                <span className="text-[#E50914] font-bold bg-[#E50914]/10 border border-[#E50914]/30 px-3 py-1 rounded-full">
                                    ✨ {daysTogether} hari yang telah kita lalui bersama.
                                </span>
                                <span className="text-gray-400">
                                    You've visited MUTIA+ {visits} times.
                                </span>
                                <span className="text-gray-400">
                                    Last Visited: {lastPage || "Home"}
                                </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 mt-6">
                                <button
                                    onClick={() => navigate("/episodes")}
                                    className="
                                        bg-white
                                        text-black
                                        px-6 md:px-8
                                        py-2.5 md:py-3
                                        rounded
                                        flex
                                        items-center
                                        justify-center
                                        gap-2.5
                                        font-bold
                                        text-sm md:text-base
                                        hover:bg-white/85
                                        transition
                                        shadow-lg
                                    "
                                >
                                    <FaPlay className="text-black text-xs md:text-sm" />
                                    Play
                                </button>

                                <button
                                    className="
                                        bg-gray-600/70
                                        text-white
                                        backdrop-blur-md
                                        px-6 md:px-8
                                        py-2.5 md:py-3
                                        rounded
                                        flex
                                        items-center
                                        justify-center
                                        gap-2.5
                                        font-bold
                                        text-sm md:text-base
                                        hover:bg-gray-600/50
                                        transition
                                        border border-white/10
                                    "
                                >
                                    <FaInfoCircle className="text-base" />
                                    More Info
                                </button>
                            </div>

                            {/* Progress & Badge Card inside Hero */}
                            <div className="mt-8 max-w-md bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10 shadow-xl">
                                <div className="flex justify-between text-xs text-gray-300 font-medium">
                                    <p>Watching Birthday Personal</p>
                                    <p className="text-gray-400">
                                        Episode{" "}
                                        {currentEpisode === 0 ? 1 : currentEpisode} / 7
                                    </p>
                                </div>

                                <div className="w-full h-1.5 bg-gray-700/80 rounded-full overflow-hidden mt-2">
                                    <div
                                        className="h-full bg-[#E50914] rounded-full transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-gray-400 text-[11px]">
                                        {Math.round(progress)}% completed
                                    </p>
                                    <div className="flex gap-4 text-[11px] text-gray-400">
                                        <span>7 Episodes</span>
                                        <span>•</span>
                                        <span>1 Ending Rahasia</span>
                                        <span>•</span>
                                        <span>∞ Memories</span>
                                    </div>
                                </div>

                                <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-3 text-xs text-amber-400 font-medium">
                                    <span className="bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">🏆 First Visit</span>
                                    {readLetter && <span className="bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">🏆 Read The Letter</span>}
                                    {secretUnlocked && <span className="bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">🏆 Found The Secret</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Continue Watching Row */}
                    <div className="relative px-4 md:px-12 lg:px-16 py-8">
                        <h2
                            style={{ fontFamily: "InterBold" }}
                            className="text-lg md:text-2xl font-bold mb-4 text-gray-100 hover:text-white transition cursor-pointer flex items-center gap-2 group"
                        >
                            Continue Watching for {localStorage.getItem("profile") || "You"}
                            <span className="text-xs text-[#E50914] opacity-0 group-hover:opacity-100 transition">Explore &gt;</span>
                        </h2>

                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            <div
                                onClick={() => navigate("/episodes")}
                                className="
                                    min-w-[260px]
                                    md:min-w-[300px]
                                    rounded
                                    overflow-hidden
                                    bg-[#1f1f1f]
                                    cursor-pointer
                                    hover:scale-105
                                    transition-transform
                                    duration-300
                                    group
                                    border border-white/5
                                    shadow-lg
                                "
                            >
                                <div
                                    className="h-36 md:h-40 bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(${mutia})` }}
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                                    <FaPlayCircle className="absolute inset-0 m-auto text-4xl text-white/90 drop-shadow-md group-hover:scale-110 transition-transform" />
                                </div>

                                <div className="w-full h-1 bg-zinc-700">
                                    <div
                                        className="h-full bg-[#E50914]"
                                        style={{ width: `${watchedPercent}%` }}
                                    />
                                </div>

                                <div className="p-3.5">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-sm text-gray-200">
                                            Episode {currentEpisode === 0 ? 1 : currentEpisode}
                                        </h3>
                                        <span className="text-[11px] text-gray-400 font-mono">
                                            {watchedPercent}%
                                        </span>
                                    </div>
                                    <p className="mt-1 text-gray-400 text-xs">
                                        Special Birthday Exclusive
                                    </p>
                                    <p className="mt-2 text-[#E50914] text-xs font-semibold">
                                        Lanjutkan perjalananmu &rarr;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trending in My Heart Row */}
                    <div className="relative px-4 md:px-12 lg:px-16 pb-16">
                        <h2
                            style={{ fontFamily: "InterBold" }}
                            className="text-lg md:text-2xl font-bold mb-4 text-gray-100 hover:text-white transition cursor-pointer flex items-center gap-2 group"
                        >
                            Top 5 in My Heart Today
                            <span className="text-xs text-[#E50914] opacity-0 group-hover:opacity-100 transition">Explore &gt;</span>
                        </h2>

                        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide items-center pt-2">
                            {trending.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-end min-w-[210px] md:min-w-[240px] hover:scale-105 transition-transform duration-300 cursor-pointer group"
                                >
                                    <span
                                        style={{ fontFamily: "Bebas" }}
                                        className="
                                            text-[6rem]
                                            md:text-[8rem]
                                            leading-none
                                            font-bold
                                            text-black
                                            -mr-5
                                            md:-mr-6
                                            select-none
                                            z-10
                                            drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                                        "
                                        style={{
                                            fontFamily: "Bebas",
                                            WebkitTextStroke: "2px rgba(255, 255, 255, 0.4)",
                                        }}
                                    >
                                        {index + 1}
                                    </span>

                                    <div className="relative z-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[140px] h-[210px] md:w-[160px] md:h-[240px] object-cover rounded shadow-md group-hover:brightness-110 transition"
                                        />
                                        <p className="mt-2 text-center text-xs md:text-sm font-medium text-gray-300 group-hover:text-white">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="relative text-center text-gray-500 text-xs md:text-sm py-12 border-t border-white/10 bg-[#111111]">
                        <p
                            className="cursor-pointer hover:text-gray-300 transition font-medium mb-1"
                            onClick={() => navigate("/secret")}
                        >
                            Built with love by Prizy Aditia Fitra.
                        </p>
                        <p className="text-gray-400">Happy Birthday, Mutia Rahmah.</p>
                    </footer>
                </div>

                {/* Are you still watching popup */}
                {showPopup && (
                    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 animate-fade-in">
                        <div className="bg-[#181818] border border-white/10 rounded-md p-6 md:p-8 max-w-md w-full text-center shadow-2xl">
                            <p
                                style={{ fontFamily: "InterBold" }}
                                className="text-xl md:text-2xl font-bold mb-6 text-white"
                            >
                                Are you still watching?
                            </p>

                            <button
                                onClick={() => setShowPopup(false)}
                                className="
                                    bg-[#E50914]
                                    text-white
                                    px-6
                                    py-3
                                    rounded
                                    font-bold
                                    w-full
                                    hover:bg-[#f6121d]
                                    transition
                                    shadow-lg
                                    text-sm md:text-base
                                "
                            >
                                Yes, always.
                            </button>
                        </div>
                    </div>
                )}
            </Reveal>
        </PageWrapper>
    )
}

export default Home