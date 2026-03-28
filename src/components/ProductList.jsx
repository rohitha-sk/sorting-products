import { useState } from "react";
import ProductCard from "./ProductCard";
import SortSelect from "./SortSelect";

  const INITIAL_PRODUCTS = [
  { id: 1,  name: "Wireless Headphones",   category: "Electronics", price: 129,  rating: 4.5, stock: 34  },
  { id: 2,  name: "Mechanical Keyboard",   category: "Electronics", price: 89,   rating: 4.7, stock: 12  },
  { id: 3,  name: "Cotton Linen Shirt",    category: "Apparel",     price: 45,   rating: 4.2, stock: 80  },
  { id: 4,  name: "Ceramic Coffee Mug",    category: "Kitchen",     price: 18,   rating: 4.8, stock: 200 },
  { id: 5,  name: "Running Sneakers",      category: "Apparel",     price: 112,  rating: 4.4, stock: 27  },
  { id: 6,  name: "Desk Lamp",             category: "Electronics", price: 54,   rating: 3.9, stock: 55  },
  { id: 7,  name: "Cast Iron Skillet",     category: "Kitchen",     price: 68,   rating: 4.9, stock: 19  },
  { id: 8,  name: "Leather Wallet",        category: "Apparel",     price: 39,   rating: 4.1, stock: 63  },
  { id: 9,  name: "Portable Charger",      category: "Electronics", price: 35,   rating: 4.3, stock: 91  },
  { id: 10, name: "Bamboo Cutting Board",  category: "Kitchen",     price: 24,   rating: 4.6, stock: 140 },
];
 

 

export default function ProductList() {
 const[initialProducts, setInitialProducts] = useState(INITIAL_PRODUCTS);
 const[sortKey, setSortKey] = useState("");

 
 //defined all options as a object properties instead of writing inside if else conditions
const sortConfig = {
  name_asc: (a, b) => a.name.localeCompare(b.name),
  name_desc: (a, b) => b.name.localeCompare(a.name),
  price_asc: (a, b) => a.price - b.price,
  price_desc: (a, b) => b.price - a.price,
  rating_asc: (a, b) => a.rating - b.rating,
  rating_desc: (a, b) => b.rating - b.rating,
  stock_asc: (a, b) => a.stock - b.stock,
  stock_desc: (a, b) => b.stock - b.stock,
};

const handleSortChange = (value) => {
  setSortKey(value);

  if (value === "") {
    setInitialProducts(INITIAL_PRODUCTS);   
    return;
  }

  const sorter = sortConfig[value];
  console.log(sorter);

  if (sorter) {
    setInitialProducts([...initialProducts].sort(sorter));
  }
};
 


  const products = initialProducts;
 
 
  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
 
      {/* ── Header ── */}
      <div className="bg-white border-b border-slate-100 px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">React Practice</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 leading-tight">Products</h1>
              <p className="text-slate-400 text-sm mt-1 font-sans">
                {products.length} items ·{" "}
                {sortKey
                  ? <span className="text-slate-600">sorted by <strong>{sortKey.replace("_", " ")}</strong></span>
                  : "default order"
                }
              </p>
            </div>
 
            {/* Sort dropdown */}
            <div className="flex items-center gap-2 font-sans">
              <span className="text-sm text-slate-400">Sort by</span>
              <SortSelect value={sortKey} handleSortChange={handleSortChange} />
            </div>
          </div>
        </div>
      </div>
 
      {/* ── Grid ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-sans">
          {initialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
 

    
    </div>
  );
}
 