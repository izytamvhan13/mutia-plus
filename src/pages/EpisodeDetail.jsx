import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import { episodes } from "../constants/episodes"
import { FaArrowLeft, FaPlay } from "react-icons/fa"
import EpisodeIntro from "../components/EpisodeIntro"

function EpisodeDetail() {
    const navigate = useNavigate()

    const { id } = useParams()

    const episode = episodes.find((item) => item.id === Number(id))
    const [showIntro, setShowIntro] = useState(true)
    const [showNext, setShowNext] = useState(false)
    const [countdown, setCountdown] = useState(3)

    useEffect(() => {
        if (episode) {
            localStorage.setItem("lastWatchedEpisode", episode.id)
        }
    }, [episode])

    useEffect(() => {
        if (!showNext) return

        if (countdown === 0) {
            navigate(`/episode/${episode.id + 1}`)
            return
        }

        const timer = setTimeout(() => {
            setCountdown((prev) => prev - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [showNext, countdown, navigate, episode])

    if (!episode) {
        return <h1>Episode tidak ditemukan.</h1>
    }

    return (
        <>
            {showIntro && (
                <EpisodeIntro
                    episode={episode.id}
                    title={episode.title}
                    year={episode.year}
                    onFinish={() => setShowIntro(false)}
                />
            )}

            <PageWrapper>
                <div className="min-h-screen bg-black text-white">
                    <img
                        src={episode.image}
                        alt={episode.title}
                        className="
                    w-full
                    h-[55vh]
                    object-cover
                    "
                    />

                    <div className="max-w-5xl mx-auto px-6 py-12">
                        <button
                            onClick={() => navigate("/episodes")}
                            className="
                        flex
                        items-center
                        gap-3
                        text-gray-400
                        hover:text-white
                        "
                        >
                            <FaArrowLeft />
                            Kembali
                        </button>

                        <p className="text-red-500 mt-8">
                            Episode {episode.id}
                        </p>

                        <h1 className="text-5xl font-bold mt-2">
                            {episode.title}
                        </h1>

                        <p className="text-gray-400 mt-3">{episode.duration}</p>

                        <p className="text-gray-300 mt-8 leading-8">
                            {episode.description}
                        </p>

                        {/* Tentang Episode */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-semibold">
                                Tentang Episode
                            </h2>

                            <p className="mt-5 text-gray-300 leading-8">
                                {episode.synopsis}
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-semibold mb-8">
                                Perjalanan Kita
                            </h2>

                            <div className="space-y-5">
                                {episode.timeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                border-l-2
                border-red-600
                pl-5
                "
                                    >
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-semibold mb-8">
                                Galeri Episode
                            </h2>

                            <div className="flex gap-5 flex-wrap">
                                {episode.gallery.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo}
                                        alt={`Gallery ${index + 1}`}
                                        className="
                w-40
                h-56
                object-cover
                rounded-xl
                hover:scale-105
                duration-300
                cursor-pointer
                "
                                    />
                                ))}
                            </div>
                        </div>

                        {episode.id < 6 && (
                            <button
                                onClick={() => {
                                    const completed =
                                        JSON.parse(
                                            localStorage.getItem(
                                                "completedEpisodes",
                                            ),
                                        ) || []

                                    if (!completed.includes(episode.id)) {
                                        completed.push(episode.id)
                                    }

                                    localStorage.setItem(
                                        "completedEpisodes",
                                        JSON.stringify(completed),
                                    )

                                    localStorage.setItem(
                                        "currentEpisode",
                                        episode.id + 1,
                                    )

                                    setShowNext(true)
                                }}
                                className="
        mt-12
        bg-red-600
        px-8
        py-4
        rounded-lg
        hover:bg-red-700
        duration-300
        "
                            >
                                Selesai Membaca
                            </button>
                        )}

                        {episode.id === 6 && (
                            <button
                                onClick={() => navigate("/highlight")}
                                className="
        mt-12
        bg-red-600
        px-8
        py-4
        rounded-lg
        flex
        items-center
        gap-3
        hover:bg-red-700
        duration-300
        "
                            >
                                <FaPlay />
                                Selamat Ulang Tahun
                            </button>
                        )}
                    </div>
                </div>
                {showNext && (
                    <div
                        className="
        fixed
        inset-0
        bg-black/90
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        "
                    >
                        <p className="text-gray-400 text-xl">
                            Memuat Episode Selanjutnya...
                        </p>

                        <h1 className="text-8xl font-bold text-red-600 mt-5">
                            {countdown}
                        </h1>

                        <p className="mt-5 text-gray-500">
                            Episode {episode.id + 1} akan segera dimulai.
                        </p>
                    </div>
                )}
            </PageWrapper>
        </>
    )
}

export default EpisodeDetail
