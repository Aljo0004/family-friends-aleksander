import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Header from "./components/Header";
import PetListSection from "./components/PetList";
import PetList from "./components/PetList";
import Categories from "./components/Categories";
import { CiHome } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Suspense } from "react";


export default function Home({ searchParams }) {
  return (
    
    <div>
      <Header />
      <div className="flex overflow-x-auto gap-2 px-4">
      <Categories />
      </div>
      <section className="grid grid-cols-2 place-items-center justify-items-stretch gap-4 overflow-y-scroll p-5">
       <Suspense>
        <ProductListContainer searchParams={searchParams} />
       </Suspense>
      </section>
      <Nav />
    </div>
  );
}

async function ProductListContainer({ searchParams }) {
const { category } = await searchParams;
console.log(category);
return <PetList category={category}/>;
}