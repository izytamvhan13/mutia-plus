import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Highlight() {
    const navigate = useNavigate()

    const [showMessage, setShowMessage] = useState(false)

    return (
        <div
            className="
            min-h-screen
            bg-black
            flex
            items-center
            justify-center
            "
        >
            <video
                controls
                autoPlay
                onEnded={() => {
                    const completed =
                        JSON.parse(localStorage.getItem("completedEpisodes")) ||
                        []

                    if (!completed.includes(6)) {
                        completed.push(6)
                    }

                    localStorage.setItem(
                        "completedEpisodes",
                        JSON.stringify(completed),
                    )

                    localStorage.setItem("currentEpisode", 7)

                    setShowMessage(true)

                    setTimeout(() => {
                        navigate("/credits")
                    }, 5000)
                }}
                className="
    w-full
    h-screen
    object-cover
    "
            >
                <source src="/videos/highlight.mp4" type="video/mp4" />
            </video>

            {showMessage && (
                <div
                    className="
    min-h-screen
    bg-black
    relative
    flex
    items-center
    justify-center
    "
                >
                    Terima kasih sudah menjadi bagian dari cerita ini.
                </div>
            )}
        </div>
    )
}

export default Highlight
