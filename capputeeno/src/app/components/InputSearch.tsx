import styled from "styled-components"
import { SearchIcon } from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";

export const InputPrimary = styled.input`
  width: 352px;
  background: #F3F5F6;
  border-radius: 8px;
  color: var(--text-dark);
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 9px 16px;
  outline: none;
  border: none;
`;

const InputContainer = styled.div`
  width: 352px;
  position: relative;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputPrimaryWSearchIcon = (props: InputProps) => {
  return(
    <InputContainer>
      <InputPrimary {...props}/>

      <SearchIcon />
    </InputContainer>
  )
}