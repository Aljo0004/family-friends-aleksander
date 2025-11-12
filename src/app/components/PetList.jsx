import {Suspense} from "react";
import Link from "next/link";
import Image from "next/image";

const PetList =  ({ category } ) => {
return (
  <Suspense fallback={<p>Loading products...</p>}>
    <FetchProducts category={category} />
  </Suspense>
);
};

const FetchProducts = async ( { category } ) => {
    "use server";
    const url = category 
    ? `https://dummyjson.com/products/category/${category}` 
    : "https://dummyjson.com/products";
  const response = await fetch(url);
  const {products} = await response.json();
  return products.map((product) => (
    <Link href={`/detalje/${product.id}`} key={product.id}>
      <div className="rounded-2xl bg-white shadow-lg">
        <Image
          src={product.thumbnail}
          loading="eager"
          alt="skyd mig"
          width={300}
          height={200}
          className="w-full rounded-2xl"
        />
        <div className="flex flex-col p-2">
          <div className="flex justify-between">
            <h2 className="text-s mr-2 mb-4">{product.title}</h2>
            <p className="text-s">{product.price} $</p>
          </div>
          <div>
            <p className="text-xs text-gray-200">
              {product.brand ? product.brand : "Unknown Brand"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));
};
 
export default PetList;
