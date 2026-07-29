import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import tudum from "../assets/music/tudum.mp3"
import creditsMusic from "../assets/music/credits.mp3"

function Credits() {
    const navigate = useNavigate()

    const [startCredits, setStartCredits] = useState(false)
    const pianoRef = useRef(null)

    useEffect(() => {
    const tudumAudio = new Audio(tudum)

    tudumAudio.volume = 0.4

    tudumAudio.play().catch(() => {
        console.log("Tudum blocked")
    })

    const timer = setTimeout(() => {
    setStartCredits(true)

    pianoRef.current = new Audio(creditsMusic)

    pianoRef.current.volume = 0.1
    pianoRef.current.loop = true

    pianoRef.current.play().catch(() => {
        console.log("Piano blocked")
    })
}, 2500)

    return () => {
    clearTimeout(timer)

    if (pianoRef.current) {
        pianoRef.current.pause()
        pianoRef.current.currentTime = 0
    }
}
}, [])

    return (
        <div
            onClick={() => navigate("/profiles")}
            className="
            overflow-hidden
            bg-black
            text-white
            relative
            cursor-pointer
            "
        >
            <div
    className={`
        relative
        w-full
        flex
        flex-col
        items-center
        text-center
        px-6
        pt-[20vh]
        ${
            startCredits
                ? "animate-[credits_130s_linear_forwards]"
                : "opacity-0"
        }
    `}
>
                <div className="h-screen" />

                <p className="text-gray-400 text-xl">
                    Terima kasih telah bertahan sampai akhir.
                </p>

                <p className="mt-10 text-gray-300 max-w-2xl leading-9">
                    Website ini mungkin memiliki akhir.
                    <br />
                    Tetapi beberapa hal memang tidak dibuat untuk selesai.
                </p>

                <div className="mt-24 text-gray-500 leading-8">
                    <p>Dibuat dengan:</p>

                    <p>beberapa malam yang panjang,</p>

                    <p>banyaknya begadang,</p>

                    <p>beberapa cangkir kopi,</p>

                    <p>dan banyak hal yang tidak pernah masuk ke dalam kode.</p>
                </div>

                <div className="mt-24">
                    <p className="text-gray-500">Untuk:</p>

                    <h1
                        style={{
                            fontFamily: "Bebas",
                        }}
                        className="
                        text-6xl
                        text-red-600
                        mt-3
                        tracking-[5px]
                        "
                    >
                        Mutia Rahmah
                    </h1>
                </div>

                <div className="mt-32 text-gray-400 leading-9">
                    <p>Enam episode telah selesai.</p>

                    <p>Satu episode lagi sengaja dibiarkan kosong.</p>

                    <p>
                        Karena beberapa cerita tidak seharusnya memiliki akhir.
                    </p>
                </div>

                <div className="mt-40 border-t border-white/10 pt-16">
                    <h2
                        style={{
                            fontFamily: "Bebas",
                        }}
                        className="
                        text-7xl
                        md:text-9xl
                        tracking-[15px]
                        text-red-600
                        drop-shadow-[0_0_25px_rgba(229,9,20,0.3)]
                        "
                    >
                        EPISODE 7
                    </h2>

                    <p
                        style={{
                            fontFamily: "CormorantItalic",
                        }}
                        className="
                        mt-5
                        text-4xl
                        text-gray-300
                        "
                    >
                        Belum ditulis.
                    </p>

                    <p className="mt-16 text-gray-500 text-xl">
                        Atau mungkin...
                    </p>

                    <p
                        style={{
                            fontFamily: "CormorantItalic",
                        }}
                        className="
                        mt-4
                        text-4xl
                        text-gray-300
                        "
                    >
                        Kita hanya belum sampai di sana.
                    </p>
                </div>

                <div className="mt-40 mb-40">
                    <p className="text-gray-500 text-lg">
                        Cerita ini telah selesai.
                    </p>

                    <p className="mt-4 text-gray-600">
                        Dan seperti biasa,
                        <br />
                        setiap cerita yang indah selalu layak untuk diulang.
                    </p>

                    <p className="mt-10 text-gray-700 text-sm animate-pulse">
                        Klik di mana saja jika suatu hari ingin melihatnya lagi.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Credits