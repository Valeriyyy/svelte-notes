<script lang="ts">
  import { type Note } from "../models/Note";
  export let note: Note;
  let noteHeaderLimit = 23;
  let noteBodyLimit = 40;
</script>

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

<style>
  .note-card {
    border-bottom: solid var(--container-b-color);
    padding: 10px;
  }

  .date-times {
    font-size: 12px;
  }
</style>
