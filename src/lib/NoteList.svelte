<script lang="ts">
  import NoteItem from "./NoteItem.svelte";
  import { type Note } from "../models/Note";
  let notesStore: Note[] = [];

  for (let i = 0; i <= 10; i++) {
    let note: Note = {
      id: i,
      header: "header that is more than 34 characters long " + i,
      body: "this is the notes body and it has quite a lot of text in it " + i,
      isDeleted: false,
      createdDate: new Date(),
      lastModifiedDate: null,
      deletedDate: null,
    };
    notesStore.push(note);
  }
  console.log(notesStore);
</script>

<section>
  {#each notesStore as note, i}
    <NoteItem {note}/>
  {/each}
</section>

<style>
</style>
