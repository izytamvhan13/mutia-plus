import { useNavigate } from "react-router-dom"
import PageWrapper from "../components/PageWrapper"
import { episodes } from "../constants/episodes"

import p1 from "../assets/posters/1.jpg"
import p2 from "../assets/posters/2.jpg"
import p3 from "../assets/posters/3.jpg"
import p4 from "../assets/posters/4.jpg"
import p5 from "../assets/posters/5.jpg"

function Episodes() {
    const navigate = useNavigate()

    const currentEpisode = Number(localStorage.getItem("currentEpisode")) || 1

    const lastWatchedEpisode = Number(
        localStorage.getItem("lastWatchedEpisode"),
    )

    const completedEpisodes =
        JSON.parse(localStorage.getItem("completedEpisodes")) || []

    const openEpisode = (episode) => {
        if (episode.id > currentEpisode) {
            alert("Complete the previous episode first ❤️")

            return
        }

        navigate(`/episode/${episode.id}`)
    }
    return (
        <PageWrapper>
            <div className="min-h-screen bg-black text-white px-6 md:px-16 py-10">
                <h1 className="text-5xl font-bold mb-3">Episodes</h1>

                <p className="text-gray-400 mb-12">Season 1 - 7 Episodes</p>

                <div className="space-y-8">
                    {episodes.map((episode) => (
                        <div
                            key={episode.id}
                            onClick={() => openEpisode(episode)}
                            className={`
    relative
    cursor-pointer
    flex
    flex-col
    md:flex-row
    gap-6
    rounded-2xl
    overflow-hidden
    duration-300
    hover:scale-[1.02]

    ${
        episode.id > currentEpisode
            ? "bg-zinc-950 opacity-60"
            : "bg-zinc-900 hover:bg-zinc-800"
    }
    `}
                        >
                            <img
                                src={episode.image}
                                alt={episode.title}
                                className="
                                w-full
                                md:w-72
                                h-52
                                object-cover
                                "
                            />
                            {episode.id > currentEpisode && (
                                <div
                                    className="
        absolute
        top-4
        right-4
        bg-black/80
        px-3
        py-2
        rounded-full
        text-sm
        "
                                >
                                    🔒 Locked
                                </div>
                            )}

                            <div className="p-6 flex-1">
                                <div className="flex items-center gap-3">
                                    <p className="text-red-500">
                                        Episode {episode.id}
                                    </p>

                                    {completedEpisodes.includes(episode.id) && (
                                        <span
                                            className="
        text-xs
        bg-green-600
        px-3
        py-1
        rounded-full
        "
                                        >
                                            Completed
                                        </span>
                                    )}

                                    {lastWatchedEpisode > 0 &&
                                        episode.id === lastWatchedEpisode &&
                                        !completedEpisodes.includes(
                                            episode.id,
                                        ) && (
                                            <span className="text-xs bg-red-600 px-3 py-1 rounded-full">
                                                Continue Watching
                                            </span>
                                        )}
                                </div>

                                <h2 className="text-3xl font-semibold mt-2">
                                    {episode.title}
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    {episode.duration}
                                </p>

                                <p className="text-gray-300 mt-5">
                                    {episode.description}
                                </p>
                                <div className="mt-5">
                                    <div className="w-full h-1 bg-zinc-700 rounded">
                                        <div
                                            className="h-1 bg-red-600 rounded"
                                            style={{
                                                width: completedEpisodes.includes(
                                                    episode.id,
                                                )
                                                    ? "100%"
                                                    : lastWatchedEpisode > 0 &&
                                                        episode.id ===
                                                            lastWatchedEpisode
                                                      ? "30%"
                                                      : "0%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    )
}

export default Episodes
