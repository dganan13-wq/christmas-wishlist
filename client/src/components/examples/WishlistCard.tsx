import { WishlistCard, type WishlistItem } from "../WishlistCard";
import { useState } from "react";

export default function WishlistCardExample() {
  const [item, setItem] = useState<WishlistItem>({
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones for music lovers",
    price: 199.99,
    store: "Amazon",
    storeUrl: "https://amazon.com",
    purchased: false,
  });

  return (
    <div className="max-w-sm">
      <WishlistCard 
        item={item}
        onTogglePurchased={() => setItem(prev => ({ ...prev, purchased: !prev.purchased }))}
        onDelete={() => console.log("Delete clicked")}
        onImageChange={(id, imageUrl) => setItem(prev => ({ ...prev, imageUrl }))}
      />
    </div>
  );
}
