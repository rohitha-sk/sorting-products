import Stars from "./Stars";

const CATEGORY_COLOR = {
  Electronics: { bg: "bg-sky-50",    text: "text-sky-600",    dot: "bg-sky-400"    },
  Apparel:     { bg: "bg-rose-50",   text: "text-rose-600",   dot: "bg-rose-400"   },
  Kitchen:     { bg: "bg-amber-50",  text: "text-amber-600",  dot: "bg-amber-400"  },
};
 
function ProductCard({ product }) {
  const cat = CATEGORY_COLOR[product.category];
  const lowStock = product.stock <= 20;
 
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-5
                    hover:border-slate-300 hover:shadow-md transition-all duration-200">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-slate-800 font-semibold text-sm leading-snug">{product.name}</h3>
        <span className={`shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cat.bg} ${cat.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
          {product.category}
        </span>
      </div>
 
      {/* Rating */}
      <Stars rating={product.rating} />
 
      {/* Bottom row */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-bold text-slate-900">${product.price}</span>
        <span className={`text-xs font-medium px-2 py-1 rounded-lg ${
          lowStock
            ? "bg-red-50 text-red-500"
            : "bg-slate-50 text-slate-400"
        }`}>
          {lowStock ? `⚠ Only ${product.stock} left` : `${product.stock} in stock`}
        </span>
      </div>
    </div>
  );
}
export default ProductCard;