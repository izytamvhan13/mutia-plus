import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import enter from "../assets/music/enter.mp3"

function Splash() {
    const navigate = useNavigate()

    const [showText, setShowText] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setShowText(true)
        }, 500)

        const buttonTimer = setTimeout(() => {
            setShowButton(true)
        }, 3500)

        return () => {
            clearTimeout(titleTimer)
            clearTimeout(buttonTimer)
        }
    }, [])

    const handleEnter = () => {
        const click = new Audio(enter)

        click.volume = 0.5
        click.play()

        setFadeOut(true)

        setTimeout(() => {
            navigate("/profiles")
        }, 700)
    }

    return (
        <div
            className={`
                min-h-screen
                bg-black
                flex
                items-center
                justify-center
                text-white
                overflow-hidden
                px-5
                transition-opacity
                duration-700
                relative
                ${fadeOut ? "opacity-0" : "opacity-100"}
            `}
        >
            {/* Vignette & Red Ambient Light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black pointer-events-none" />

            <div
                className={`
                    text-center
                    relative
                    z-10
                    transition-all
                    duration-[2500ms]
                    ${
                        showText
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }
                `}
            >
                <p
                    className="
                        text-xs
                        tracking-[12px]
                        text-red-500
                        font-extrabold
                        uppercase
                        mb-8
                        drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]
                    "
                >
                    NETFLIX PRESENTS
                </p>

                <h1
                    style={{
                        fontFamily: "Bebas",
                    }}
                    className="
                        text-6xl
                        md:text-[8rem]
                        leading-[0.85]
                        text-[#E50914]
                        uppercase
                        drop-shadow-[0_0_40px_rgba(229,9,20,0.6)]
                    "
                >
                    MUTIA
                    <br />
                    RAHMAH
                </h1>

                <p
                    style={{
                        fontFamily: "Inter",
                    }}
                    className="
                        mt-10
                        text-gray-200
                        text-base
                        md:text-xl
                        leading-relaxed
                        font-light
                        tracking-wide
                    "
                >
                    Plot twist paling gila di hidupku bukan tentang takdir yang kebetulan,
                    <br />
                    melainkan bagaimana semesta dengan sengaja menyerahkan kendali atas duniaku padamu.
                </p>

                <p
                    style={{
                        fontFamily: "CormorantItalic",
                    }}
                    className="
                        mt-8
                        text-gray-400
                        italic
                        text-lg
                        leading-relaxed
                    "
                >
                    Dan malam ini, di hadapan layar yang penuh memori ini,
                    <br />
                    aku hanya ingin kembali terjebak dalam senyummu—selamanya.
                </p>

                <div
                    className={`
                        transition-all
                        duration-[1500ms]
                        ${
                            showButton
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                        }
                    `}
                >
                    <button
                        onClick={handleEnter}
                        style={{
                            fontFamily: "PlayfairBold",
                        }}
                        className="
                            mt-14
                            text-gray-200
                            tracking-[15px]
                            hover:text-white
                            duration-500
                            group
                            text-sm
                            md:text-base
                            font-bold
                        "
                    >
                        ENTER
                        <div
                            className="
                                h-[2px]
                                w-0
                                bg-[#E50914]
                                mx-auto
                                mt-2
                                group-hover:w-full
                                duration-500
                                shadow-[0_0_10px_#E50914]
                            "
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Splash