import React from "react";
import styled from "styled-components";
import {List, Button, ListItem} from "../../element/index";


const Content = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
const StyledList = styled(List)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const StyledButton = styled(Button)`
  margin-right: 8px;
`

const TabTitleText = styled.span`
  color: ${(props) => (props.active ? "#333 " : "#888")};
`

export default function Tabs({ tabs, activeTab = 0 }) {
  return (
    <div>
      <StyledList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <StyledButton active key={item.title}>
                  <TabTitleText active>{item.title}</TabTitleText>
                </StyledButton>
              );
            }
            return (
              <StyledButton>
                <TabTitleText>{item.title}</TabTitleText>
              </StyledButton>
            );
          })}
      </StyledList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  )
}