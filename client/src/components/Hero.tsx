import { Gift } from "lucide-react";
import defaultHeroImage from "@assets/generated_images/pink_christmas_ornaments_scene.png";

interface HeroProps {
  itemCount: number;
  heroImage: string | null;
}

export function Hero({ itemCount, heroImage }: HeroProps) {

  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage || defaultHeroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-pink-800/40 to-pink-700/20" />
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-3 mb-4">
          <Gift className="h-10 w-10 md:h-12 md:w-12 text-white" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Christmas Wishlist
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
          Track your holiday gifts and where to find them
        </p>
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <span className="font-medium" data-testid="text-item-count">{itemCount}</span>
          <span>items on your list</span>
        </div>
      </div>
    </section>
  );
}
