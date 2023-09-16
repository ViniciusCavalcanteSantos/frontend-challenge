import styled from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { ShoppingBagIcon } from "./icons/ShoppingBagIcon";

const Container = styled.div`
  position: relative;
  margin-left: 24px;

  > svg {
    display: block;
  }
`;

const CartCount = styled.span`
  position: absolute;
  display: inline-block;
  width: 17px;
  height: 17px;
  background: var(--delete-color);
  border-radius: 50%;
  text-align: center;
  line-height: 17px;
  color: #FFF;
  font-family: inherit;
  font-size: 10px;
  font-weight: 500;
  top: 100%;
  left: 100%;
  transform: translate(-50%, -50%);
`

export function CartControl() {
  const [ value ] = useLocalStorage("cart-items");
  

  return(
    <Container>
      <ShoppingBagIcon />

      {<CartCount>{value.length}</CartCount>}
    </Container>
  )
}