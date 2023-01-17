import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState([
    {
      title: "",
      content: "",
    },
  ]);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    // const t = note;
    // console.log(t.title + " | " + t.content);
  }
  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);
  }
  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="title"
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="content"
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;