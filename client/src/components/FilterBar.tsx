import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  storeFilter: string;
  onStoreFilterChange: (store: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  stores: string[];
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export function FilterBar({
  searchQuery,
  onSearchChange,
  storeFilter,
  onStoreFilterChange,
  statusFilter,
  onStatusFilterChange,
  stores,
  onClearFilters,
  hasActiveFilters,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search your wishlist..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground hidden sm:block" />
            
            <Select value={storeFilter} onValueChange={onStoreFilterChange}>
              <SelectTrigger className="w-[140px]" data-testid="select-store-filter">
                <SelectValue placeholder="All Stores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stores</SelectItem>
                {stores.map((store) => (
                  <SelectItem key={store} value={store}>
                    {store}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={onStatusFilterChange}>
              <SelectTrigger className="w-[140px]" data-testid="select-status-filter">
                <SelectValue placeholder="All Items" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="unpurchased">Not Purchased</SelectItem>
                <SelectItem value="purchased">Purchased</SelectItem>
              </SelectContent>
            </Select>
            
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClearFilters}
                data-testid="button-clear-filters"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
