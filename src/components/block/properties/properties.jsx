import React from "react";
import {List, ListItem} from "../../element/index";
import {product} from "../../../mocks/mocks";

export default function Properties() {
  return (
    <List>
      <ListItem>{product.energy}</ListItem>
      <ListItem>{product.nutritional}</ListItem>
    </List>
  )
}

