import React from "react";
import styled from "styled-components";
import {List, ListItem} from "../../element/index";
import {product} from "../../../mocks/mocks";


export default function Characteristic() {
  return (
    <List>
      <ListItem>{product.weight}</ListItem>
      <ListItem>{product.date}</ListItem>
      <ListItem>{product.breed}</ListItem>
      <ListItem>{product.date}</ListItem>
      <ListItem>{product.place}</ListItem>
    </List>
  )
}