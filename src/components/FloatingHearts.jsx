function FloatingHearts() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">

            {[...Array(12)].map((_, index) => (
                <span
                    key={index}
                    className="
                    absolute
                    text-red-500/20
                    animate-pulse
                    text-xl
                    "
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                >
                    ♥
                </span>
            ))}

        </div>
    );
}

export default FloatingHearts;