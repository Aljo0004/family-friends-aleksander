import Image from "next/image";
import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const Categoriesimgs = () => {

  return (
    <Suspense>
      <FetchCategories />
    </Suspense>
  );

}


const FetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const  categories  = await response.json();
  console.log(categories);
  return categories.map((category, index) => <CategoryElement key={index} category={category} />
  );
};

export default Categoriesimgs;