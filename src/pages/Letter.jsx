import { useNavigate } from "react-router-dom";

function Letter() {

    const navigate = useNavigate();

    return (
        <div
            className="
            min-h-screen
            bg-black
            text-white
            px-5
            md:px-20
            py-20
            "
        >

            <h1
                className="
                text-4xl
                md:text-6xl
                font-bold
                mb-10
                "
            >
                A Letter To Mutia Rahmah
            </h1>

            <div
                className="
                max-w-4xl
                text-gray-300
                leading-9
                text-lg
                space-y-8
                "
            >

                <p>
                    Hai, Sayang.
                </p>

                <p>
                    Kalau kamu sedang membaca halaman ini, berarti kamu sudah
                    melewati semua chapter yang sudah aku siapkan. Dari Home,
                    My List, Timeline, sampai Gallery.
                </p>

                <p>
                    Aku tidak pernah benar-benar tahu bagaimana semesta bekerja.
                    Tapi di antara miliaran orang di dunia ini, rasanya lucu
                    juga kalau akhirnya aku dipertemukan dengan seorang
                    perempuan bernama Mutia Rahmah.
                </p>

                <p>
                    Terima kasih sudah hadir di banyak hari yang biasa dan
                    membuatnya menjadi sedikit lebih berwarna.
                </p>

                <p>
                    Terima kasih untuk setiap tawa, cerita, dan hal-hal kecil
                    yang mungkin tidak pernah kamu sadari, tetapi berhasil
                    tinggal cukup lama di kepalaku.
                </p>

                <p>
                    Hari ini usiamu bertambah satu tahun. Semoga semua doa yang
                    diam-diam kamu simpan bisa menemukan jalannya masing-masing.
                </p>

                <p>
                    Dan kalau suatu hari nanti kamu bertanya apa harapanku,
                    jawabannya sederhana:
                </p>

                <p className="italic text-red-500">
                    "Semoga ini bukan menjadi chapter terakhir yang kita tulis
                    bersama."
                </p>

                <p>
                    Selamat ulang tahun, Mutia Rahmah.
                </p>

                <p>
                    Dengan banyak rasa syukur,
                </p>

                <p className="font-bold text-xl">
                    Prizy Aditia Fitra
                </p>

            </div>

            <button
                onClick={() => navigate("/ending")}
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
                Continue to Ending →
            </button>

        </div>
    );
}

export default Letter;