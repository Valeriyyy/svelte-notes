import type { Note } from "../models/Note";
import { get } from "svelte/store";
import { notes } from "../store";

export default class NotesService {
  GetNoteById(noteId: number): Note {
    console.log("getting note syncoo");
    return get(notes)[noteId];
    // let aa = null;
    // notes.subscribe((value) => {
    //   aa = value;
    // });
    // console.log('this is aa', aa);
    // return aa;
  }

  async GetNoteByIdAsync(noteId: number): Promise<Note> {
    console.log("getting note async");
    return get(notes)[noteId];
  }

  GetNewNoteId(): number {
    return get(notes).length;
  }

  InsertNewNote(noteToInsert: Note): Note {
    noteToInsert.id = this.GetNewNoteId();
    noteToInsert.createdDate = new Date('December 17, 1995 03:24:00');
    notes.update(e => ([...e, noteToInsert]));

    return noteToInsert;
  }
}
