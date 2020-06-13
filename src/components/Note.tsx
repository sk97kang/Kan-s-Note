import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.input`
  width: 100%;
  height: 5%;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  background-color: rgba(235, 235, 235, 0.02);
  border: none;
  border-radius: 5px;
`;

const Contents = styled.textarea`
  width: 100%;
  height: 95%;
  font-size: 18px;
  font-weight: 400;
  resize: none;
  background-color: rgba(235, 235, 235, 0.02);
  border: none;
  border-radius: 5px;
`;

interface INote {
  id: number;
  title: string;
  contents: string;
}

interface IProps {
  note: INote;
  onEditNote: (
    type: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

class Note extends React.Component<IProps> {
  render() {
    const { note, onEditNote } = this.props;
    const { title, contents } = note;
    return (
      <Container>
        <Title
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => onEditNote("title", e)}
        />
        <Contents
          placeholder="내용을 입력하세요"
          value={contents}
          onChange={(e) => onEditNote("contents", e)}
        />
      </Container>
    );
  }
}

export default Note;
