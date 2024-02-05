<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { type Note } from "../models/Note";
  export let note: Note;
  let noteHeaderLimit = 34;
  let noteBodyLimit = 70;
  let url: string = "";

  function clickedNote() {
    console.log(`Note item ${note.id} has been clicked`);
  }
</script>

<Router {url}>
  <Link
    to={`/note/${note.id}`}
    style="text-decoration: none; color: rgba(255, 255, 255, 0.87) !important;"
  >
    <article>
      <div class="note-card">
        {#if note.header.length > noteHeaderLimit}
          <h2 style="margin-top: 0">
            {note.header.substring(0, noteHeaderLimit)}...
          </h2>
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
  </Link>
</Router>

<style>
  article:hover {
    color: #a3a3a3;
    transition: 0.3s;
  }

  .note-card {
    border-bottom: solid var(--container-b-color);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .date-times {
    font-size: 0.8rem;
  }
</style>
