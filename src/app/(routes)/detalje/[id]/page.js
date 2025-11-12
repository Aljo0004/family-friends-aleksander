import Link from "next/link";
import Header from "../../../components/Header";
import Image from "next/image";
import { Suspense } from "react";

export default function detalje({ params }) {
  return (
    <div>
      <Header />
      <Suspense fallback={<div className="p-4">Loading product...</div>}>
        <ProductDetailsWrapper params={params} />
      </Suspense>
    </div>
  );
}

async function ProductDetailsWrapper({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "force-cache",
  });
  const product = await response.json();

  return <ProductDetails product={product} />;
}

function ProductDetails({ product }) {
  return (
    <div>
      <Image
        src={product.images[0]}
        loading="eager"
        alt={product.title}
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
          <p className="mt-4 text-3xl text-black">{product.price} $</p>
          <div className="w-32 border-t border-solid text-black"></div>
        </div>
      </div>
      <div>
        <button className="m-4 h-16 w-100 rounded-4xl bg-red-400 p-2 text-white shadow-md">
          Buy Now
        </button>
      </div>
    </div>
  );
}

const MapTags = ({ tags }) => {
  return tags.map((tag) => (
    <div
      key={tag}
      className="ml-10 flex h-8 w-max rounded-4xl bg-pink-200 p-2 text-center shadow-md"
    >
      <p className="leading-4 capitalize">{tag}</p>
    </div>
  ));
};
