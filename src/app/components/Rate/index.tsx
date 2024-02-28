import { Product } from "@/app/interfaces";

export function Rate({ product }: { product: Product }) {
  return (
    <span className="flex justify-between mt-4">
      <strong className="text-sm font-semibold">Rating</strong>
      <div className="flex items-center">
        {/* dynamic rate */}
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              {/* <input type="radio" name="rating" value={ratingValue} />s */}
              <svg
                className={`w-4 h-4 ${
                  product?.rating?.rate >= ratingValue
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
              </svg>
            </label>
          );
        })}
        <span className="text-sm font-light ml-2">{product?.rating?.rate}</span>
      </div>
    </span>
  );
}
