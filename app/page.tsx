"use client";

import { useState } from "react";
import ProductsPage from "./products";
import AddProductModal from "@/components/AddProductModal";
import { Product } from "@/types/product";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Product Listing Dashboard</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Add Product
        </button>
      </div>
      <ProductsPage />
      {showModal && (
        <AddProductModal
          onAdd={(product) => setNewProduct(product)}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
