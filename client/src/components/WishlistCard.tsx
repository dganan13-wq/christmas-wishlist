import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, ShoppingBag, ImagePlus } from "lucide-react";

export interface WishlistItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  store: string;
  storeUrl?: string;
  purchased: boolean;
  imageUrl?: string;
}

interface WishlistCardProps {
  item: WishlistItem;
  onDelete: (id: string) => void;
  onImageChange: (id: string, imageUrl: string) => void;
}

export function WishlistCard({ item, onDelete, onImageChange }: WishlistCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(item.id, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card 
      className="transition-all duration-300"
      data-testid={`card-wishlist-item-${item.id}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div 
            className="flex-shrink-0 w-20 h-20 rounded-xl bg-muted flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={handleImageClick}
            data-testid={`button-change-image-${item.id}`}
          >
            {item.imageUrl ? (
              <>
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImagePlus className="h-6 w-6 text-white" />
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-1 text-muted-foreground">
                <ImagePlus className="h-6 w-6" />
                <span className="text-xs">Add Photo</span>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 
              className="font-semibold text-lg leading-tight"
              data-testid={`text-item-name-${item.id}`}
            >
              {item.name}
            </h3>
            
            {item.description && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {item.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span 
                className="font-bold text-lg"
                data-testid={`text-price-${item.id}`}
              >
                ${item.price.toFixed(2)}
              </span>
              <Badge variant="secondary" className="gap-1">
                <ShoppingBag className="h-3 w-3" />
                {item.store}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-end mt-4 pt-4 border-t">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(item.id)}
            data-testid={`button-delete-${item.id}`}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
