import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 136%;
  color: #333333;
  padding: 8px 12px;
  background: #F7F7F7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition-timing-function: ease-out;
  transition-duration: 0.1s;
  
  &:hover {
    background-color: #88AA4D;
  }
`

export default Button;