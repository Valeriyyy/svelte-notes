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
    /* justify-content: center; */
    border-bottom: solid var(--container-b-color);
    padding: 20px;
  }

  #notes-list-container {
    width: 170rem;
    height: 750px;
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
