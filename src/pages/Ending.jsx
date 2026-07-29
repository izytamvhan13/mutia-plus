import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Ending() {
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        localStorage.setItem("lastPage", "Ending")

        setTimeout(() => {
            setShow(true)
        }, 500)

        setTimeout(() => {
            setShowButton(true)
        }, 15000)
    }, [])

    return (
        <div
            className={`
    min-h-screen
    bg-black
    text-white
    flex
    flex-col
    items-center
    justify-center
    text-center
    px-8
    py-10
    duration-1000

    ${show ? "opacity-100" : "opacity-0"}
    `}
        >
            <div className="max-w-3xl space-y-10">
                <p
                    className="
                    text-xl
                    md:text-3xl
                    leading-relaxed
                    "
                >
                    Kalau suatu hari nanti kamu lupa seberapa berharganya
                    dirimu, ingatlah bahwa pernah ada seseorang yang membuat
                    semua ini hanya untukmu.
                </p>

                <div
                    className="
                    text-gray-400
                    space-y-2
                    text-lg
                    "
                >
                    <p>7 Episode.</p>
                    <p>1 Video.</p>
                </div>

                <p
                    className="
                    text-gray-400
                    text-lg
                    md:text-xl
                    leading-relaxed
                    "
                >
                    Dan semua ini bahkan belum cukup untuk menceritakan
                    semuanya.
                </p>

                <div className="space-y-4">
                    <h2
                        className="
                        text-2xl
                        md:text-4xl
                        font-semibold
                        "
                    >
                        Selamat ulang tahun, Sayang.
                    </h2>

                    <p className="text-gray-500">— Prizy Aditia Fitra</p>
                </div>

                {showButton && (
                    <button
                        onClick={() => {
                            localStorage.clear()

                            navigate("/home")
                        }}
                        className="
        mt-8
        bg-red-600
        px-8
        py-4
        rounded-lg
        hover:bg-red-700
        hover:scale-105
        duration-300
        animate-pulse
        "
                    >
                        Mulai Perjalanan Ini Lagi
                    </button>
                )}
            </div>
        </div>
    )
}

export default Ending
