import { useState } from "react";
import { Hero } from "@/components/Hero";
import { WishlistCard, type WishlistItem } from "@/components/WishlistCard";
import { Snowflakes } from "@/components/Snowflakes";
import { Gift } from "lucide-react";

// todo: remove mock functionality
const initialItems: WishlistItem[] = [
  {
    id: "1",
    name: "AirPods Pro",
    description: "Premium wireless earbuds with active noise cancellation",
    price: 249.99,
    store: "Apple",
    storeUrl: "https://apple.com",
    purchased: false,
  },
  {
    id: "2",
    name: "Cozy Knit Sweater",
    description: "Warm wool blend sweater in blush pink",
    price: 89.00,
    store: "Nordstrom",
    storeUrl: "https://nordstrom.com",
    purchased: true,
  },
  {
    id: "3",
    name: "LEGO Star Wars Set",
    description: "Millennium Falcon Ultimate Collector Series",
    price: 799.99,
    store: "Target",
    storeUrl: "https://target.com",
    purchased: false,
  },
  {
    id: "4",
    name: "Kindle Paperwhite",
    description: "Waterproof e-reader with adjustable warm light",
    price: 139.99,
    store: "Amazon",
    storeUrl: "https://amazon.com",
    purchased: false,
  },
  {
    id: "5",
    name: "Scented Candle Set",
    description: "Winter collection with rose, vanilla, and peony",
    price: 45.00,
    store: "Bath & Body Works",
    storeUrl: "https://bathandbodyworks.com",
    purchased: true,
  },
];

export default function Home() {
  const [items, setItems] = useState<WishlistItem[]>(initialItems);
  const [heroImage, setHeroImage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleImageChange = (id: string, imageUrl: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, imageUrl } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Snowflakes />
      
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            <span className="font-display font-semibold text-lg hidden sm:inline">
              Christmas Wishlist
            </span>
          </div>
        </div>
      </header>

      <main className="pt-14">
        <Hero 
          itemCount={items.length} 
          heroImage={heroImage}
        />

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-semibold">
                Your Wishlist
              </h2>
              <p className="text-muted-foreground mt-1">
                {items.length} items
              </p>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <Gift className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-muted-foreground">
                  No items in your wishlist yet
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <WishlistCard
                    key={item.id}
                    item={item}
                    onDelete={handleDelete}
                    onImageChange={handleImageChange}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <footer className="border-t py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              Made with love for the holiday season
            </p>
          </div>
        </footer>
      </main>

    </div>
  );
}
