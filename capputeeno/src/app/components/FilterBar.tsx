"use client";

import styled from "styled-components";
import { FilterByType } from "./FilterByType";

interface FilterBarProps {

}

const FilterContainer = styled.div`
  margin-top: 34px;
`

export function FilterBar(props: FilterBarProps) {
  return(
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  )
}