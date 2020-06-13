import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

const Container = styled.div`
  max-width: 300px;
  width: 25%;
  height: 100%;
  border-right: 1px solid rgba(235, 235, 235, 0.8);
  overflow-y: auto;
`;

interface INote {
  id: number;
  title: string;
  contents: string;
}

interface IProps {
  notes: INote[];
  activeId: number;
  onListItemClick: (id: number) => void;
}

class List extends React.Component<IProps> {
  render() {
    const { notes, activeId, onListItemClick } = this.props;
    return (
      <Container>
        {notes.map((note) => {
          const { id, title, contents } = note;
          return (
            <ListItem
              key={id}
              title={title}
              contents={contents}
              actived={activeId === id}
              onClick={() => onListItemClick(id)}
            />
          );
        })}
      </Container>
    );
  }
}

export default List;
