import { useEffect, useState } from "react"
import episodeIntro from "../assets/music/episode_intro.mp3"

function EpisodeIntro({ episode, title, year, onFinish }) {
    const [hide, setHide] = useState(false)
    const [step, setStep] = useState(0)

    useEffect(() => {
        const audio = new Audio(episodeIntro)

        audio.volume = 0.3

        audio.play().catch(() => {
            console.log("Audio blocked")
        })

        const timer = setTimeout(() => {
            setHide(true)

            setTimeout(() => {
                onFinish()
            }, 1500)
        }, 7000)

        return () => {
            audio.pause()
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        const t1 = setTimeout(() => setStep(1), 500)
        const t2 = setTimeout(() => setStep(2), 2000)
        const t3 = setTimeout(() => setStep(3), 3500)

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
        }
    }, [])

    return (
        <div
            className={`
                fixed inset-0 z-[999]
                bg-black
                flex flex-col
                items-center
                justify-center
                transition-all
                duration-1000
                ${hide ? "opacity-0" : "opacity-100"}
            `}
        >
            <p className={`
    text-gray-400
    text-lg
    tracking-[8px]
    transition-opacity
    duration-700
    ${step >= 1 ? "opacity-100" : "opacity-0"}
`}
>
    EPISODE
</p>

<h1 className={`
    text-gray-400
    text-lg
    tracking-[8px]
    transition-opacity
    duration-700
    ${step >= 1 ? "opacity-100" : "opacity-0"}
`}
>
    {episode}
</h1>

<h2 className={`
    text-gray-400
    text-lg
    tracking-[8px]
    transition-opacity
    duration-700
    ${step >= 2 ? "opacity-100" : "opacity-0"}
`}
>
    {title}
</h2>

<p className={`
    text-gray-400
    text-lg
    tracking-[8px]
    transition-opacity
    duration-700
    ${step >= 3 ? "opacity-100" : "opacity-0"}
`}
>
    {year}
</p>

            <button
                onClick={onFinish}
                className="
                absolute
                bottom-10
                right-10
                text-gray-500
                hover:text-white
                duration-300
            "
            >
                Lewati Intro →
            </button>
        </div>
    )
}

export default EpisodeIntro