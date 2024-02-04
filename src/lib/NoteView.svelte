<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { type Note } from "../models/Note";

  export let note: Note = {
    id: 99999,
    header: "This is the deafult empty note header",
    body: "This is the default empty note body",
    isDeleted: false,
    createdDate: new Date(),
    lastModifiedDate: null,
    deletedDate: null,
  };

  let url: string = "";

  function save(e: Event) {
    e.preventDefault();
    console.log("Saving changes to note");
    note.body = "Note contents have been changed";
  }

  function cancel(e: Event) {
    e.preventDefault();
    console.log("Canceling changes to note");
    note.body = "Note editing has been canceled";
  }
</script>

<div>
  <textarea class="note-edit" rows="15" cols="35">{note.body}</textarea>
  <div class="buttons-area">
    <div class="button-group">
      <button on:click={(e) => cancel(e)}> Cancel </button>
      <button on:click={(e) => save(e)}> Save </button>
    </div>
  </div>
</div>

<style>
  .note-edit {
    font-size: 3em;
    background-color: transparent;
    border: none;
    width: 100%;
  }

  .buttons-area {
    height: 65px;
  }

  .button-group {
    display: flex;
    justify-content: right;
    padding: 10px;
    gap: 0.625em;
  }
</style>
