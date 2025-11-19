import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
  return (
    <div>
      <Header />
      {notes.map(noteDetail => <Note key={noteDetail.key} title={noteDetail.title} content={noteDetail.content} />)};
      <Footer />
    </div>
  );
}

export default App;
