import { useRef, useState } from "react";
import music from "../assets/music/01-background-theme.mp3";

function MusicPlayer() {

    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

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

            <button
                onClick={toggleMusic}
                className="
                fixed
                bottom-5
                right-5
                z-50
                bg-red-600
                px-5
                py-3
                rounded-full
                hover:scale-105
                transition
                "
            >
                {playing ? "Pause Music" : "Play Music"}
            </button>
        </>
    );
}

export default MusicPlayer;