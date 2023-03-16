import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 0;
  box-sizing: border-box;
  list-style: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export default ListItem;