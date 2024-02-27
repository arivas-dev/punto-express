import { CartModal } from "../components/CartModal"
import { Layout } from "../components/Layout"
import PageTitle from "../components/PageTitle"
import { ProductModal } from "../components/ProductModal"
import { Checkout } from "../components/Checkout"
import { useCartModal } from "../hooks/useCartModal"

export default function Index() {
  return (
    <Layout>
      <PageTitle>
        <PageTitle.Title>Checkout</PageTitle.Title>
        <PageTitle.Description>
          Ready to get the best products?
        </PageTitle.Description>
      </PageTitle>

      <Checkout />

      <CartModal />
    </Layout>
  )
}
