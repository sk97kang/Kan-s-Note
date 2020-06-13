import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  z-index: 10;
`;

const Title = styled.div`
  font-size: 24px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
`;

const Btn = styled.button`
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(235, 235, 235, 0.7);
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(189, 189, 189, 0.3);
  }
`;

const TITLE_TXT: string = "Kan's Note";
const ADD_BTN_TXT: string = "Add";
const DEL_BTN_TXT: string = "Del";

interface IProps {
  onAddNote: () => void;
  onDeleteNote: () => void;
}

class Header extends React.Component<IProps> {
  render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
      <Container>
        <Title>{TITLE_TXT}</Title>
        <BtnContainer>
          <Btn onClick={() => onAddNote()}>{ADD_BTN_TXT}</Btn>
          <Btn onClick={() => onDeleteNote()}>{DEL_BTN_TXT}</Btn>
        </BtnContainer>
      </Container>
    );
  }
}

export default Header;
