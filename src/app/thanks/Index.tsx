import { CartModal } from "../components/CartModal";
import { Layout } from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { Thanks } from "../components/Thanks";

export default function Index() {
  return (
    <Layout>
      <PageTitle>
        <PageTitle.Title>Checkout</PageTitle.Title>
        <PageTitle.Description>
          Ready to get the best products?
        </PageTitle.Description>
      </PageTitle>

      <Thanks />

      <CartModal />
    </Layout>
  );
}
