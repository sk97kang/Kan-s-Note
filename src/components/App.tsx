import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import List from "./List";
import Note from "./Note";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
`;

interface INote {
  id: number;
  title: string;
  contents: string;
}

interface IState {
  notes: INote[];
  activeId: number;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    notes: [
      {
        id: 1,
        title: "제목",
        contents: "내용",
      },
    ],
    activeId: 1,
  };

  handleListItemClick = (id: number): void => {
    this.setState({ activeId: id });
  };

  handleEditNote = (
    type: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const notes = this.state.notes;

    const note = notes.filter((note) => note.id === this.state.activeId)[0];

    if (type === "title") {
      note.title = e.target.value;
    } else if (type === "contents") {
      note.contents = e.target.value;
    }

    this.setState({
      notes,
    });
  };

  handleAddNote = (): void => {
    const id: number = new Date().getTime();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: "제목",
          contents: "내용",
        },
      ],
      activeId: id,
    });
  };

  handleDeleteNote = (): void => {
    const notes: INote[] = this.state.notes.filter(
      (note) => note.id !== this.state.activeId
    );
    this.setState({
      notes,
      activeId: notes.length === 0 ? -1 : notes[0].id,
    });
  };

  loadLS = (): void => {
    const notes = localStorage.getItem("notes");
    if (notes === null) {
      return;
    }
    const parsedNotes = JSON.parse(notes);
    this.setState({ notes: parsedNotes, activeId: parsedNotes[0].id });
  };

  saveLS = (): void => {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  componentDidUpdate = () => {
    this.saveLS();
  };

  componentDidMount = () => {
    this.loadLS();
  };

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((note) => note.id === activeId)[0];
    return (
      <>
        <Header
          onAddNote={this.handleAddNote}
          onDeleteNote={this.handleDeleteNote}
        />
        <Container>
          <List
            notes={notes}
            activeId={activeId}
            onListItemClick={this.handleListItemClick}
          />
          {notes.length !== 0 && (
            <Note note={activeNote} onEditNote={this.handleEditNote} />
          )}
        </Container>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
