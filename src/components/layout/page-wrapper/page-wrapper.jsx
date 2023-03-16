import React from "react";
import styled from "styled-components";
import {product} from "../../../mocks/mocks";
import Card from "../../block/card/card";

const StyledPageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default function PageWrapper() {
  return (
    <StyledPageWrapper>
      <Card product={product} />
    </StyledPageWrapper>
  )
}