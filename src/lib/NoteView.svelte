<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { type Note } from "../models/Note";

  export let note: Note =  {
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

<!-- <h1>
  This is where the notes body for the new note or the selected note will go
</h1>
<p class="pix">
  {note.body}
</p> -->
<div>
  <textarea class="pix" rows="15" cols="35">{note.body}</textarea>
  <div class="buttons-area">
    <div class="button-group">
      <button style="padding-right: 5px;" on:click={(e) => cancel(e)}>
        Cancel
      </button>
      <button on:click={(e) => save(e)}>
        Save
      </button>
    </div>
  </div>
</div>


<style>
  .pix {
    font-size: 3em;
    background-color: transparent;
    border: none;
  }

  .buttons-area {
    height: 65px;
  }

  .button-group {
    display: flex;
    justify-content: right;
    padding: 10px;
  }
</style>
