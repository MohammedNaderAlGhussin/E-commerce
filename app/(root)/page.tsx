import ProductList from "@/components/products/ProductList/ProductList";
import sampleData from "@/db/sample-data";

export default async function Home() {
  return (
    <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
  );
}
