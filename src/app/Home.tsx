import { CartSideModal } from "./components/CartModal";
import { Layout } from "./components/Layout";
import PageTitle from "./components/PageTitle";
import { ProductModal } from "./components/ProductModal";
import { ProductList } from "./components/ProductsList";
import { useCartModal } from "./hooks/useCartModal";

export default function Home() {

    return (
        <Layout>
            <PageTitle>
                <PageTitle.Title>Products</PageTitle.Title>
                <PageTitle.Description>We have the products that you need</PageTitle.Description>
            </PageTitle>

            <ProductList/>

            <CartSideModal/>

        </Layout>
    )
} 