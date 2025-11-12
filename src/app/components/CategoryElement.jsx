"use client";
import {useRouter} from 'next/navigation';

import React from "react";
const CategoryElement = ({ category }) => {
    const router = useRouter ();
    return (
      <div
        onClick={() => router.push(`?category=${category}`)}
        className="mt-4 mb-4 ml-4 flex h-16 w-full items-center justify-center rounded-4xl bg-red-200 p-6 shadow-lg"
      >
        <p className="text-s">{category}</p>{" "}
      </div>
    );
}
 
export default CategoryElement;


