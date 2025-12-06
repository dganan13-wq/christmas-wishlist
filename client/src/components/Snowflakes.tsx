export function Snowflakes() {
  const snowflakes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    size: 4 + Math.random() * 8,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white/80"
          style={{
            left: `${flake.left}%`,
            top: "-20px",
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
          }}
        >
          *
        </div>
      ))}
    </div>
  );
}
