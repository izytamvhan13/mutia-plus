import p1 from "../assets/gallery/01-her-smile.jpg";
import p2 from "../assets/gallery/02-sunshine-girl.jpg";
import p3 from "../assets/gallery/03-mirror-pic.jpg";
import p4 from "../assets/gallery/04-coffee-date.jpg";
import p5 from "../assets/gallery/05-candid-moment.jpg";
import p6 from "../assets/gallery/06-favorite-outfit.jpg";
import p7 from "../assets/gallery/07-beautiful-eyes.jpg";
import p8 from "../assets/gallery/08-random-day.jpg";
import p9 from "../assets/gallery/09-birthday-girl.jpg";
import p10 from "../assets/gallery/10-the-next-chapter.jpg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Gallery() {
    const navigate = useNavigate();
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const photos = [
        {
            title: "Her Smile",
            image: p1,
            description:
                "Senyum yang selalu berhasil membuat hariku sedikit lebih baik.",
        },
        {
            title: "Sunshine Girl",
            image: p2,
            description:
                "Ada orang yang datang seperti matahari, dan bagiku itu adalah Mutia.",
        },
        {
            title: "Mirror Pic",
            image: p3,
            description:
                "Foto sederhana yang entah kenapa selalu ingin kulihat lagi.",
        },
        {
            title: "Coffee Date",
            image: p4,
            description:
                "Karena beberapa percakapan terbaik dimulai dengan secangkir kopi.",
        },
        {
            title: "Candid Moment",
            image: p5,
            description:
                "Momen yang tidak direncanakan sering kali menjadi favorit.",
        },
        {
            title: "Favorite Outfit",
            image: p6,
            description:
                "Aku masih belum memutuskan, apakah yang lebih menarik itu outfit-nya atau orangnya.",
        },
        {
            title: "Beautiful Eyes",
            image: p7,
            description:
                "Ada banyak cerita yang bisa ditemukan di balik sepasang mata.",
        },
        {
            title: "Random Day",
            image: p8,
            description:
                "Hari yang biasa, tetapi menjadi tidak biasa karena diisi olehmu.",
        },
        {
            title: "Birthday Girl",
            image: p9,
            description:
                "Selamat bertambah usia, Sayang.",
        },
        {
            title: "The Next Chapter",
            image: p10,
            description:
                "Semoga ini bukan halaman terakhir yang kita tulis bersama.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-5 md:p-10">

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Meet Mutia Rahmah
            </h1>

            <p className="text-gray-400 mb-12">
                Every picture tells a story.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

                {photos.map((photo, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedPhoto(photo)}
                        className="
                        group
                        hover:scale-105
                        transition
                        cursor-pointer
                        "
                    >
                        <img
                            src={photo.image}
                            alt={photo.title}
                            className="
                            w-full
                            h-72
                            object-cover
                            rounded-xl
                            "
                        />

                        <h2 className="mt-4 font-semibold">
                            {photo.title}
                        </h2>
                    </div>
                ))}

            </div>

            {selectedPhoto && (
                <div
                    className="
                    fixed
                    inset-0
                    bg-black/90
                    z-50
                    flex
                    items-center
                    justify-center
                    p-5
                    "
                >
                    <div
                        className="
                        max-w-5xl
                        w-full
                        bg-gray-950
                        rounded-2xl
                        overflow-hidden
                        "
                    >
                        <img
                            src={selectedPhoto.image}
                            alt={selectedPhoto.title}
                            className="
                            w-full
                            max-h-[70vh]
                            object-cover
                            "
                        />

                        <div className="p-8">

                            <h1 className="text-3xl md:text-4xl font-bold">
                                {selectedPhoto.title}
                            </h1>

                            <p className="mt-5 text-gray-400">
                                {selectedPhoto.description}
                            </p>

                            <button
                                onClick={() => setSelectedPhoto(null)}
                                className="
                                mt-8
                                bg-red-600
                                px-6
                                py-3
                                rounded
                                hover:scale-105
                                transition
                                "
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={() => navigate("/letter")}
                className="
                mt-16
                bg-red-600
                px-6
                py-3
                rounded
                hover:scale-105
                transition
                "
            >
                Continue to Letter →
            </button>

        </div>
    );
}

export default Gallery;