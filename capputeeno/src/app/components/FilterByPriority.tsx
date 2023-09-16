import {useState} from "react";
import styled from "styled-components"
import { ArrowIcon } from "./icons/ArrowIcon"
import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/PriorityType";

const FilterContainer = styled.div`
  position: relative;
  display: flex;

  > button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textos-dark-textos-apoio, #737380);
    text-align: center;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
    margin-right: 8px;
  }
`

const PriorityList = styled.ul`
  display: grid;
  gap: 4px;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  padding: 12px 16px;
  border-radius: 4px;
  background: var(--shapes-1);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
  list-style: none;
  width: max-content;
  z-index: 999;

  > li {
    color: var(--text-dark);
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }
`

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false);
  }

  return (
    <FilterContainer>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        Organizar por

        <ArrowIcon />
      </button>

      {isOpen &&
      <PriorityList>
        <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>Novidades</li>
        <li onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}>Preço: Maior - menor</li>
        <li onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>Preço: Menor - maior</li>
        <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>
      </PriorityList>
      }
    </FilterContainer>
  )
}
