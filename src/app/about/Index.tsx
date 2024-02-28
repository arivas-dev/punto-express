import { CartModal } from "../components/CartModal";
import { Layout } from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default function Index() {
  return (
    <Layout>
      <PageTitle>
        <PageTitle.Title>About us</PageTitle.Title>
        <PageTitle.Description>We are the best store in the world</PageTitle.Description>
      </PageTitle>

      

      <CartModal />
    </Layout>
  );
}
