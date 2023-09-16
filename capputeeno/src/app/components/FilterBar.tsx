"use client";

import styled from "styled-components";
import { FilterByType } from "./FilterByType";
import { FilterByPriority } from "./FilterByPriority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`

export function FilterBar(props: FilterBarProps) {
  return(
    <FilterContainer>
      <FilterByType />

      <FilterByPriority />
    </FilterContainer>
  )
}