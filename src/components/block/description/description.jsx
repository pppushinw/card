import React from "react";
import styled from "styled-components";
import {P, Span} from "../../element/index"
import {product} from "../../../mocks/mocks";

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export default function Description() {
  return (
    <DescriptionWrapper>
      <P>{product.description}</P>
      <Span>{product.price}</Span>
    </DescriptionWrapper>
  )
}