import React, { useState, useEffect } from "react";
// Firebase Imports
import "../firebase.config";
import db from "../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
// Styling
import styled from "styled-components";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});
  const notesCollectionRef = collection(db, "notes");

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    //getNotes();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <NoteContainer>
      {!notes.length ? (
        <>
          <h2>Hier sind noch keine Notizen zu finden...</h2>
          <p>
            Fange direkt an Notizen zu schreiben. Klicke einfach auf Create.
          </p>
        </>
      ) : (
        notes.map((note) => {
          return (
            <form onSubmit={handleSubmitForm}>
              <div>
                <h2>{note.title}</h2>
                <textarea
                  name="noteText"
                  id="noteText"
                  value={note.text}
                ></textarea>
              </div>
            </form>
          );
        })
      )}
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  margin-top: 5%;
  width: 100vw;
  height: 100%;
  background-color: lightcoral;
`;
