function Timeline() {
    const events = [
    {
        year: "Chapter 1",
        title: "Pertama Kali Bertemu",
        description:
            "Aku tidak tahu kalau hari itu akan menjadi awal dari banyak cerita yang nantinya akan selalu ingin aku ingat.",
    },
    {
        year: "Chapter 2",
        title: "Mulai Saling Mengenal",
        description:
            "Sedikit demi sedikit, seorang perempuan bernama Mutia Rahmah mulai mengisi hari-hariku.",
    },
    {
        year: "Chapter 3",
        title: "Hari-Hari yang Ramai",
        description:
            "Ada banyak tawa, obrolan kecil, dan hal-hal sederhana yang ternyata menjadi favoritku.",
    },
    {
        year: "Today",
        title: "Happy Birthday, Sayang",
        description:
            "Hari ini bukan hanya tentang bertambahnya usia, tetapi tentang betapa bersyukurnya aku karena semesta mempertemukan kita.",
    },
    {
        year: "Future",
        title: "To Be Continued...",
        description:
            "Karena aku berharap halaman ini tidak berhenti di sini. Masih banyak cerita yang belum sempat kita tulis bersama.",
    },
];

    return (
        <div className="min-h-screen bg-black text-white p-5 md:p-10">

            <h1 className="text-4xl md:text-6xl font-bold mb-16">
                Our Timeline
            </h1>

            <div className="space-y-10">

                {events.map((event, index) => (
                    <div
                        key={index}
                        className="
                        border-l-4
                        border-red-600
                        pl-6
                        py-4
                        "
                    >
                        <p className="text-red-500">
                            {event.year}
                        </p>

                        <h2 className="text-2xl mt-2">
                            {event.title}
                        </h2>
                        <p className="text-gray-400 mt-3 max-w-2xl">
    {event.description}
</p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Timeline;