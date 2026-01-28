import { Product } from "@/types/product";

export default function ProductTable({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg border">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-left text-sm text-gray-600">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-10 w-10 object-contain"
                />
              </td>

              <td className="p-3 font-medium">
                {product.title}
              </td>

              <td className="p-3 capitalize text-gray-600">
                {product.category}
              </td>

              <td className="p-3 font-semibold">
                ₹ {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
