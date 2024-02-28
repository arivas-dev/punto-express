"use client";

import { CartModal } from "./components/CartModal";
import { Layout } from "./components/Layout";
import PageTitle from "./components/PageTitle";
import ProductList from "./components/ProductsList";

export default function Home() {
  return (
    <Layout>
      <PageTitle>
        <PageTitle.Title>Products</PageTitle.Title>
        <PageTitle.Description>
          We have the products that you need
        </PageTitle.Description>
      </PageTitle>

      <ProductList />

      <CartModal />
    </Layout>
  );
}
