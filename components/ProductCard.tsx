import { Product } from "@/types/product";


export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-3 hover:shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />

      <h3 className="font-semibold line-clamp-2">{product.title}</h3>

      <p className="text-sm text-gray-500 capitalize">
        {product.category}
      </p>

      <p className="font-bold">₹ {product.price}</p>

      <p className="text-sm text-gray-600 line-clamp-3">
        {product.description}
      </p>
    </div>
  )
}
