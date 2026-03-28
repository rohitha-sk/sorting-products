  const options = [
    { value: "",              label: "Default order"       },
    { value: "name_asc",      label: "Name: A → Z"         },
    { value: "name_desc",     label: "Name: Z → A"         },
    { value: "price_asc",     label: "Price: Low → High"   },
    { value: "price_desc",    label: "Price: High → Low"   },
    { value: "rating_desc",   label: "Rating: Best first"  },
    { value: "rating_asc",    label: "Rating: Worst first" },
    { value: "stock_asc",     label: "Stock: Low → High"   },
    { value: "stock_desc",    label: "Stock: High → Low"   },
    { value: "test_asc",      label: "Test: Asc"            },
  ];

function SortSelect({ value, handleSortChange }) {

  return (
    <select
      value={value}
      onChange={(e) => handleSortChange(e.target.value)}
      className="text-sm text-slate-700 bg-white border border-slate-200 rounded-lg
                 px-3 py-2 pr-8 appearance-none cursor-pointer outline-none
                 hover:border-slate-400 focus:border-slate-500 transition-colors"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
export default SortSelect;