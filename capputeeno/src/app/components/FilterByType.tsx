import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/FilterType"
import styled from "styled-components"

interface FilterItemProps {
  selected: boolean
}

const FilterList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
  color: var(--text-dark);
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  text-transform: uppercase;
  padding-bottom: 4px;
  border-bottom: ${props => props.selected ? "4px solid var(--orange-low)" : ""};
  font-weight: ${props => props.selected ? "600" : "400"};
`

export function FilterByType() {
  const {type, setType} = useFilter();

  return(
    <FilterList>
      <FilterItem selected={type === FilterType.ALL} onClick={() => setType(FilterType.ALL)}>TODOS OS PRODUTOS</FilterItem>
      <FilterItem selected={type === FilterType.SHIRT} onClick={() => setType(FilterType.SHIRT)}>CAMISETAS</FilterItem>
      <FilterItem selected={type === FilterType.MUG} onClick={() => setType(FilterType.MUG)}>CANECAS</FilterItem>
    </FilterList>
  )
}