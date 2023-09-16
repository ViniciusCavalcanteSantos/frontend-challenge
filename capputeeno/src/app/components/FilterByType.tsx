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
  return(
    <FilterList>
      <FilterItem selected={true}>TODOS OS PRODUTOS</FilterItem>
      <FilterItem selected={false}>CAMISETAS</FilterItem>
      <FilterItem selected={false}>CANECAS</FilterItem>
    </FilterList>
  )
}