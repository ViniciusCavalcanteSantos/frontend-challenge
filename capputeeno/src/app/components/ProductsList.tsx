"use client";

import { useProducts } from "@/hooks/useProducts"


export function ProductsList() {
  const data = useProducts();
  console.log(data)

  return(
    <div>
      Lista de produtos
    </div>
  )
}