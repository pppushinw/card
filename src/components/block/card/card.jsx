import React from "react";
import {Image, List, ListItem, Button, Title} from "../../element"
import styled from "styled-components";
// import {product} from "../../../mocks/mocks";
import Tabs from "../tab/tab";
import Description from "../description/description";
import Characteristic from "../characteristic/characteristic";
import Properties from "../properties/properties";


const CardWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  width: 727px;
  height: 288px;
  background-color: rgba(223, 223, 223, 0.61);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const ImageWrapper = styled.div`
  margin-right: 20px;
  padding: 0;
  box-sizing: border-box;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`


export default function Card({product}) {
  const tabsContent = [
    {
      title: "Описание",
      content: <Description />
    },
    {
      title: "Характеристики",
      content: <Characteristic />
    },
    {
      title: "Свойства",
      content: <Properties />
    },
  ]

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={product.image} width="248" height="248" alt={product.title}/>
      </ImageWrapper>
      <InfoWrapper>
        <Title>{product.title}</Title>
        <Tabs tabs={tabsContent} tabIndex={2} />
      </InfoWrapper>
    </CardWrapper>
  )
}
