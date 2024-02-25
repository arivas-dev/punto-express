import { Product } from "./types";

import { Providers } from "./context";
import { Layout } from "./components/Layout";

import productsData from "../../products.json";

const products: Product[] = productsData

import Image from "next/image";

import PageTitle from "./components/PageTitle";
import Home from "./Home";


export default function App() {


  return (
    <Providers>
      <Home />
    </Providers>
  );
}
