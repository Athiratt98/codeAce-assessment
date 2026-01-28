"use client";

import { useForm } from "react-hook-form";
import { Product } from "@/types/product";

interface Props {
  onAdd: (product: Product) => void;
  onClose: () => void;
}

export default function AddProductModal({ onAdd, onClose }: Props) {
  const { register, handleSubmit, reset } = useForm<Product>();

  const onSubmit = (data: Product) => {
    onAdd({
      ...data,
      id: Date.now(),
    });
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Add Product</h2>

          <button
            onClick={onClose}
            className="text-red-500 text-lg font-bold hover:opacity-70"
          >
            ✕
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-4"
        >
          <input
            {...register("title", { required: true })}
            placeholder="Product Name"
            className="modal-input"
          />

          <input
            {...register("category", { required: true })}
            placeholder="Category"
            className="modal-input"
          />

          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="modal-input"
          />

          <input
            {...register("image", { required: true })}
            placeholder="Image URL"
            className="modal-input col-span-2"
          />

          <textarea
            {...register("description", { required: true })}
            placeholder="Description"
            className="modal-input col-span-3 h-24 resize-none"
          />

          <div className="col-span-3 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2 rounded-lg border text-gray-700 hover:bg-gray-50"
            >
              Clear
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
