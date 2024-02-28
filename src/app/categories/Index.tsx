import { CartModal } from "../components/CartModal";
import { Layout } from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default function Index() {
  return (
    <Layout>
      <PageTitle>
        <PageTitle.Title>Categories</PageTitle.Title>
        <PageTitle.Description>Categories of products</PageTitle.Description>
      </PageTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Electronics</h2>
          <p>Find the best electronics in the market</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Clothes</h2>
          <p>Find the best clothes in the market</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Furniture</h2>
          <p>Find the best furniture in the market</p>
        </div>
      </div>

      <CartModal />
    </Layout>
  );
}
