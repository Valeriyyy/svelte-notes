<script lang="ts">
  import NoteList from "./lib/NoteList.svelte";
  import NoteEdit from "./lib/NoteEdit.svelte";
</script>

<main>
  <div class="container">
    <div id="notes-header">
      <h1>Svelte Notes</h1>
      <div class="button-group">
        <button>New Note</button>
      </div>
    </div>
    <div class="main-container">
      <div id="notes-list-container">
        <NoteList />
      </div>
      <div id="notes-body">
        <NoteEdit />
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    border-style: solid;
    border-radius: 10px;
    border-color: var(--container-b-color);
  }

  #notes-header {
    display: flex;
    justify-content: center;
    border-bottom: solid var(--container-b-color);
    padding: 20px;
  }

  #notes-list-container {
    width: 100rem;
    border-right: solid var(--container-b-color);
  }

  #notes-body {
    width: 120cm;
  }

  .button-group {
    float: right;
  }

  .main-container {
    display: flex;
  }
</style>
