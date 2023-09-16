import styled from "styled-components"
import Image from 'next/image'
import { formatMoney } from "@/utils/formatMoney"


interface ProductCardProps {
  image: string,
  title: string,
  price: number
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 4px 4px;
  background: rgba(255, 255, 255, 0.40);
  backdrop-filter: blur(10px);
  padding-bottom: 8px;

  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  > h3 {
    color: var(--text-dark-2);
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    margin-top: 8px;
    padding: 0 12px;
  }

  > div {
    height: 1px;
    margin: 8px 12px;
    background-color: var(--shapes-2);
  }

  > p {
    color: var(--shapes-dark);
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    padding: 0 12px;
  }
`

export function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <Image src={props.image} width={256} height={300} alt="Foto do produto"/>
      <h3>{props.title}</h3>
      <div></div>
      <p>{formatMoney(props.price)}</p>
    </Card>
  )
}