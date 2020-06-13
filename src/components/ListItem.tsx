import React from "react";
import styled from "styled-components";

const Container = styled.div<{ actived: boolean }>`
  padding: 15px 25px;
  cursor: pointer;

  &:hover {
    background-color: rgba(235, 235, 235, 0.1);
  }

  background-color: ${(props) =>
    props.actived ? "rgba(235, 235, 235, 0.3)" : "transparent"};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Contents = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  height: 20px;
`;

const TITLE_TXT: string = "제목";
const CONTENTS_TXT: string = "내용";

interface IProps {
  title: string;
  contents: string;
  actived: boolean;
  onClick: () => void;
}

class ListItem extends React.Component<IProps> {
  render() {
    const { title, contents, actived, onClick } = this.props;
    return (
      <Container actived={actived} onClick={onClick}>
        <Title>{title ? title : TITLE_TXT}</Title>
        <Contents>{contents ? contents : CONTENTS_TXT}</Contents>
      </Container>
    );
  }
}

export default ListItem;
