<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import NoteList from "./NoteList.svelte";
  import NoteView from "./NoteView.svelte";
  import { type Note } from "../models/Note";

  let url: string = "";

  function newNote(e: Event) {
    alert("this is where the logic to create a new note would go");
  }
</script>

<div class="container">
  <div id="notes-header">
      <Link
        to="/"
        style="text-decoration:none; color: rgba(255, 255, 255, 0.87) !important;"
      >
      <h1>Svelte Notes</h1>
    </Link>
      <div class="button-group">
        <button on:click={(e) => newNote(e)}>New Note</button>
      </div>
    </div>
    <div class="main-container">
      <div id="notes-list-container">
        <NoteList />
      </div>
      <div id="notes-body">
          <Route path="/:noteId" let:params>
            <NoteView noteId={parseInt(params.noteId)} />
          </Route>
      </div>
    </div>
  </div>

<style>
  .container {
    border-style: solid;
    border-radius: 10px;
    border-color: var(--container-b-color);
  }

  #notes-header {
    display: flex;
    border-bottom: solid var(--container-b-color);
    padding: 20px;
    position: relative;
  }

  #notes-list-container {
    width: 170rem;
    height: 790px;
    overflow: auto;
    border-right: solid var(--container-b-color);
  }

  #notes-body {
    width: 120cm;
  }

  .button-group {
    position: absolute;
    top: 0;
    right: 0;
    padding: 40px 20px;
  }

  .main-container {
    display: flex;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    border: 0.5px solid var(--container-b-color);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--container-b-color);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--container-b-color);
  }
</style>
