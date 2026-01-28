"use client";

import { useEffect, useMemo, useState } from "react";
import ProductTable from "@/components/ProductTable";
import SearchBar from "@/components/SearchBar";
import FilterSelect from "@/components/FilterSelect";
import Pagination from "@/components/Pagination";
import EmptyState from "@/components/EmptyState";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["all", ...unique];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, category, search]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="w-56">
            <FilterSelect
              value={category}
              options={categories}
              onChange={setCategory}
            />
          </div>

          {totalPages > 1 && (
            <div className="ml-auto flex items-center h-[42px]">
              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Loading products...
        </div>
      ) : paginatedProducts.length === 0 ? (
        <EmptyState message="No products found" />
      ) : (
        <ProductTable products={paginatedProducts} />
      )}
    </div>
  );
}
