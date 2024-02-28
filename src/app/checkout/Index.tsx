import { CartModal } from "../components/CartModal";
import { Checkout } from "../components/Checkout";
import { Layout } from "../components/Layout";
import PageTitle from "../components/PageTitle";

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
  );
}
