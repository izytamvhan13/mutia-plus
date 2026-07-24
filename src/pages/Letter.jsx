import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function Letter() {
  const fullText = `
Happy Birthday, Sayang.

Terima kasih karena sudah hadir di hidupku.
Terima kasih untuk semua tawa, cerita, dan hal-hal kecil
yang tanpa sadar menjadi bagian favorit dari hariku.

Aku tidak tahu akan seperti apa masa depan nanti.
Tetapi aku tahu satu hal.

Jika semesta mengizinkan, aku ingin tetap menemukanmu
di banyak hari yang akan datang.

- Izyy
`;

  const navigate = useNavigate();
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index));

      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
        <div
            className="
            min-h-screen
            bg-black
            text-white
            flex
            items-center
            justify-center
            p-5
            "
        >
            <div
                className="
                max-w-4xl
                w-full
                bg-gray-950
                rounded-3xl
                p-6
                md:p-12
                border
                border-red-900/30
                shadow-2xl
                "
            >
                <h1
                    className="
                    text-3xl
                    md:text-6xl
                    font-bold
                    mb-10
                    "
                >
                    A Letter To Mutia Rahmah
                </h1>

                <pre
                    className="
                    whitespace-pre-wrap
                    text-gray-300
                    leading-8
                    text-sm
                    md:text-lg
                    "
                >
                    {text}
                </pre>

                <h2
                    className="
                    mt-10
                    text-2xl
                    md:text-4xl
                    text-red-500
                    animate-pulse
                    "
                >
                    — Prizy Aditia Fitra
                </h2>

                <p className="mt-8 italic text-gray-500">
                    "Every great story deserves a beautiful ending."
                </p>

                <button
    onClick={() => navigate("/ending")}
    className="
    mt-10
    bg-red-600
    px-6
    py-3
    rounded
    hover:scale-105
    transition
    "
>
    Continue →
</button>
            </div>
        </div>
    </PageWrapper>
);
}

export default Letter;
