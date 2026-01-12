import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/products/ProductPrice/ProductPrice";
import ProductImages from "@/components/products/ProductImages/ProductImages";
import AddToCart from "@/components/products/Cart/AddToCart";
import { getMyCart } from "@/lib/actions/cart.actions";
import ReviewList from "./ReviewList";
import { auth } from "@/lib/auth/auth";
import Rating from "@/components/products/Rating/Rating";

type ProductDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const ProductDetailsPage = async (props: ProductDetailsPageProps) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const session = await auth();
  const userId = session?.user?.id;

  const cart = await getMyCart();

  const item = {
    productId: product.id,
    name: product.name,
    slug: product.slug,
    price: Number(product.price),
    qty: 1,
    image: product.images![0],
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 justify-items-center md:justify-items-start">
          {/* Images Column */}
          <div className="xl:col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* Details Column */}
          <div className="xl:col-span-2 py-5 md:p-5">
            <div className="flex flex-col gap-6 md:items-center  xl:items-start">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold md:text-center xl:text-start">
                {product.name}
              </h1>
              <Rating value={Number(product.rating)} />
              <p>{product.numReviews} reviews</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold md:text-center xl:text-start">
                Description:
              </p>
              <p className="md:text-center xl:text-start mt-2">
                {product.description}
              </p>
            </div>
          </div>
          {/* Action Column */}
          <div>
            <Card className="mt-10 xl:mt-0 w-70 ">
              <CardContent className="px-4">
                <div className="flex justify-between mb-2">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className=" flex justify-between mb-2">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out Of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="flex-center">
                    <AddToCart cart={cart} item={item} />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="h2-bold mb-5 w-fit mx-auto md:mx-0">Customer Reviews</h2>
        <ReviewList
          userId={userId || ""}
          productId={product.id}
          productSlug={product.slug}
        />
      </section>
    </>
  );
};

export default ProductDetailsPage;
