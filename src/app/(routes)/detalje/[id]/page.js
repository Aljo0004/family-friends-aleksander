import Link from "next/link";
import Header from "../../../components/Header";
import Image from "next/image";
import { Suspense } from "react";


export default async function detalje({params}) {
  const { id } = await params;
const response = await fetch(`https://dummyjson.com/products/${id}`);
const product = await response.json();
console.log("id:", id);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Header />
          <Image
            src={product.images[0]}
            loading="eager"
            alt="cat"
            width={300}
            height={200}
            className="m-auto w-100 rounded-2xl"
          />
          <h1 className="m-4 text-2xl font-bold">{product.title}</h1>
          <div className="flex w-full flex-col">
            <div className="ml-4 flex flex-wrap items-center">
              <h3>Category:</h3>
              <div className="m-4 h-8 w-max rounded-4xl bg-blue-200 p-2 text-center shadow-md">
                <p className="mb-8 leading-4 capitalize">{product.category}</p>
              </div>
            </div>
            <div className="m-4 flex gap-2">
              <h3 className="">Tags:</h3>
              <div className="flex gap-2">
                <MapTags tags={product.tags} />
              </div>
            </div>
            <p className="text-l m-4 font-semibold">
              {product.availabilityStatus}, <br /> {product.stock} left.
            </p>

            <div className="m-4">
              <p>{product.description}</p>
              <p className="mt-4 text-3xl text-black ">{product.price} $</p>
              <div className="w-32 border-t text-black border-solid"></div>
            </div>
          </div>
          <div>
            <button className="m-4 h-16 w-100 rounded-4xl bg-red-400 p-2 text-white shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      </Suspense>
    );

}
const MapTags = ({tags}) => {
  return tags.map((tag) => (
    <div key={tag} className="ml-10 flex h-8 w-max rounded-4xl bg-pink-200 p-2 text-center shadow-md">
        <p className="capitalize leading-4">{tag}</p>    
    </div>
  ));
};
 