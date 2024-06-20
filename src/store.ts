import { readable, writable } from 'svelte/store';
import type { Note } from './models/Note';

let notesStore: Note[] = [];

for (let i = 0; i <= 10; i++) {
  let note = {
    id: i,
    header: "header that is more than 34 characters long " + i,
    body: "this is the notes body and it has quite a lot of text in it " + i,
    isDeleted: false,
    createdDate: new Date(),
  };
  notesStore.push(note);
}
export const notes = writable(notesStore);
