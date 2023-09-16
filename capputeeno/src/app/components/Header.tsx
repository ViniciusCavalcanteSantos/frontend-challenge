"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'
import { InputPrimaryWSearchIcon } from "./InputPrimary";
import { CartControl } from "./CartControl";

const sairaStencioOne = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 80px;

  > div {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.h1`
  color: #5D5D6D;
  font-size: 40px;
  font-weight: 400;
`

export function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencioOne.className}>
        Capputeeno
      </Logo>
      <div>
        <InputPrimaryWSearchIcon placeholder="Procurando por algo específico?"/>
        <CartControl />
      </div>
    </TagHeader>
  )
}