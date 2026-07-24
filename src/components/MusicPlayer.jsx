import { useRef, useState, useEffect } from "react";
import music from "../assets/music/01-background-theme.mp3";

function MusicPlayer() {

    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {

    if (audioRef.current) {
        audioRef.current.volume = volume / 100;
    }

}, [volume]);
    const toggleMusic = () => {

    console.log("BUTTON CLICKED");

    if (playing) {
    audioRef.current.pause();
} else {

    audioRef.current.play()
        .then(() => {
            console.log("MUSIC PLAYING");
        })
        .catch((err) => {
            console.log(err);
        });
}

setPlaying(!playing);
};

    return (
        <>
            <audio
                ref={audioRef}
                src={music}
                loop
            />

            <div
    className="
    fixed
    bottom-5
    right-5
    z-50
    flex
    items-center
    gap-3
    "
>

    {showControls && (

        <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) =>
                setVolume(e.target.value)
            }
            className="w-24"
        />

    )}

    <button
        onClick={() => {

            toggleMusic();

            setShowControls(true);

            setTimeout(() => {
                setShowControls(false);
            }, 3000);

        }}
        className="
        w-12
        h-12
        rounded-full
        bg-red-600
        flex
        items-center
        justify-center
        text-xl
        hover:scale-110
hover:-translate-y-2
duration-300
        transition
        "
    >
        {playing ? "🔊" : "▶"}
    </button>

</div>
        </>
    );
}

export default MusicPlayer;