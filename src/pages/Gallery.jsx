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

function Gallery() {

    const navigate = useNavigate();

    const photos = [
        { title: "Her Smile", image: p1 },
        { title: "Sunshine Girl", image: p2 },
        { title: "Mirror Pic", image: p3 },
        { title: "Coffee Date", image: p4 },
        { title: "Candid Moment", image: p5 },
        { title: "Favorite Outfit", image: p6 },
        { title: "Beautiful Eyes", image: p7 },
        { title: "Random Day", image: p8 },
        { title: "Birthday Girl", image: p9 },
        { title: "The Next Chapter", image: p10 },
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