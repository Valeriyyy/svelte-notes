<script lang="ts">
  import { type Note } from "../models/Note";
  export let note: Note;
  let noteHeaderLimit = 44;
  let noteBodyLimit = 70;

  function clickedNote () {
    console.log(`Note item ${note.id} has been clicked`);
  }
</script>

<a style="text-decoration: none;" on:click={clickedNote}>
  <article>
    <div class="note-card">
      {#if note.header.length > noteHeaderLimit}
      <h2>{note.header.substring(0, noteHeaderLimit)}...</h2>
      {:else}
      <h2>{note.header}</h2>
      {/if}
      {#if note.body.length > noteBodyLimit}
      <h5>{note.body.substring(0, noteBodyLimit)}...</h5>
      {:else}
      <h5>{note.body}</h5>
      {/if}
      
      <div class="date-times">
        CreatedDate: {note.createdDate.getMonth()}-{note.createdDate.getDay()}-{note.createdDate.getFullYear()}
        {#if note.lastModifiedDate != null}
        LastModifiedDate: {note.lastModifiedDate.getMonth()}-{note.lastModifiedDate.getDay()}-{note.lastModifiedDate.getFullYear()}
        {/if}
      </div>
    </div>
  </article>
</a>
  

<style>
  .note-card {
    border-bottom: solid var(--container-b-color);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .date-times {
    font-size: .8em;
  }
</style>
