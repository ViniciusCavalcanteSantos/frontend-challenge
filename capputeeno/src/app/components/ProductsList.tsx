"use client";

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const ProductCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 256px);
  justify-content: center;
  gap: 24px 32px;
  margin-top: 32px;
`

export function ProductsList() {
  const data = useProducts();

  return(
    <ProductCardList>
      {data?.map((product) => {
        return(
          <ProductCard key={product.id} image={product.image_url} title={product.name} price={product.price_in_cents}/>
        )
      })}
    </ProductCardList>
  )
}