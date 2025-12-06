import { FilterBar } from "../FilterBar";
import { useState } from "react";

export default function FilterBarExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [storeFilter, setStoreFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const stores = ["Amazon", "Target", "Best Buy", "Walmart"];
  const hasActiveFilters = searchQuery !== "" || storeFilter !== "all" || statusFilter !== "all";

  return (
    <FilterBar
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      storeFilter={storeFilter}
      onStoreFilterChange={setStoreFilter}
      statusFilter={statusFilter}
      onStatusFilterChange={setStatusFilter}
      stores={stores}
      onClearFilters={() => {
        setSearchQuery("");
        setStoreFilter("all");
        setStatusFilter("all");
      }}
      hasActiveFilters={hasActiveFilters}
    />
  );
}
