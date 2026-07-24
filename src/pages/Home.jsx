import mutia from "../assets/images/mutia.jpg";
import { useNavigate } from "react-router-dom";

import p1 from "../assets/posters/1.jpg";
import p2 from "../assets/posters/2.jpg";
import p3 from "../assets/posters/3.jpg";
import p4 from "../assets/posters/4.jpg";
import p5 from "../assets/posters/5.jpg";

function Home() {
    const navigate = useNavigate();
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

    return (
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

                <div className="hidden md:flex gap-8 text-gray-300">
                    <p>Home</p>
                    <p>Series</p>
                    <p
    className="cursor-pointer"
    onClick={() => navigate("/my-list")}
>
    My List
</p>
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

                <p className="mt-5 text-gray-300 max-w-xl">
                    Romance • Comedy • Comfort Person
                </p>

                <p className="mt-5 max-w-2xl text-gray-400">
                    Di antara jutaan manusia di bumi, semesta memilih
                    mempertemukan seorang perempuan bernama Mutia Rahmah
                    dengan seseorang yang selalu menemukan rumah di dalam
                    senyumnya.
                </p>

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
                        rounded
                        hover:scale-105
                        transition
                        "
                    >
                        ▶ Play
                    </button>

                    <button
                        className="
                        bg-gray-700
                        px-8
                        py-3
                        rounded
                        hover:bg-gray-600
                        transition
                        "
                    >
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
                    <div className="w-full md:w-72 h-40 bg-gray-900 rounded-lg p-5 hover:scale-105 transition">
                        <h3 className="font-semibold">Episode 1</h3>

                        <p className="mt-3 text-gray-400">
                            Pertama Kali Bertemu
                        </p>
                    </div>

                    <div className="w-full md:w-72 h-40 bg-gray-900 rounded-lg p-5 hover:scale-105 transition">
                        <h3 className="font-semibold">Episode 2</h3>

                        <p className="mt-3 text-gray-400">
                            Hari Kita Banyak Tertawa
                        </p>
                    </div>

                    <div className="w-full md:w-72 h-40 bg-gray-900 rounded-lg p-5 hover:scale-105 transition">
                        <h3 className="font-semibold">Episode 3</h3>

                        <p className="mt-3 text-gray-400">
                            Happy Birthday, Sayang
                        </p>
                    </div>

                    <div className="w-full md:w-72 h-40 bg-gray-900 rounded-lg p-5 hover:scale-105 transition">
                        <h3 className="font-semibold">Episode 4</h3>

                        <p className="mt-3 text-gray-400">
                            The Next Episode
                        </p>
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
                <p>Built with love by Prizy Aditia.</p>

                <p className="mt-2">
                    Happy Birthday, Mutia Rahmah.
                </p>
            </footer>
        </div>
    );
}

export default Home;