import Image from "next/image";
import { Product } from "./types";
import productsData from "../../products.json";
import { CiShoppingCart } from "react-icons/ci";



const products: Product[] = productsData

export default function Home() {
  return (
    <div className="p-40 pt-10">

      {/* top navbar centered  */}
      <div className="flex justify-center w-100">
        <div className="flex justify-between w-full">
          {/* Brand */}
          <div className="flex items-center flex-col">
            <h1 className="text-3xl font-bold">Naty Shop</h1>
          </div>
          <div className="flex items-center gap-20 ">
            <p className="text-sm font-light">Categories</p>
            <p className="text-sm font-light">News</p>
            <p className="text-sm font-light">Contact</p>
            <p className="text-sm font-light">About</p>
          </div>

          {/* Search */}
          <div className="flex items-center gap-4 w-0">
            <input type="text" placeholder="Search" className="p-2 text-sm font-light" />
            <button className="bg-black text-white p-2">Search</button>
          </div>

          {/* Cart with flotant quantity */}
          <div className="flex items-center relative ">
            <CiShoppingCart size={30} />
            <span className="bg-black text-white p-2 rounded-full cart-float-quantity">0</span>
          </div>
        </div>
      </div>


      {/* Header */}
      <div className="header-container mt-20">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm font-light">We have the products that you need</p>
      </div>


      <div className="products-container gap-4 ">
        {products.map((product) => (
          <div className="product-container mt-10 ">
            <div key={product.id} className="product-card">
              <Image src={product.image} alt={product.title} width={200} height={200} />
            </div>
            <span className="mt-4 product-container-title text-sm font-semibold tracking-normal">
              <h3 className="line-clamp-1">{product.title}</h3>
              <h3>${product.price}</h3>
            </span>
            <p className="text-sm font-light">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
