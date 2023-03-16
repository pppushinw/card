import React from "react";
import "./style.css"
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import {product} from "../../mocks/mocks";

export default function App() {
  return (
    <PageWrapper product={product}/>
  )
}