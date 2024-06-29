<script lang="ts">
    import { Link, Route } from "svelte-routing";
    import NoteView from "./NoteView.svelte";
    import NoteItem from "./NoteItem.svelte";
    import { notes } from "../store";

    $: noteState = "";

    function toggleNewNote(e: Event) {
        // alert("this is where the logic to create a new note would go");
        console.log("toggling new note or whatever");
        noteState = noteState == "new" ? "no" : "new";
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
            <button on:click={(e) => toggleNewNote(e)}>New Note</button>
            <!-- <a href="/new"> New Note </a> -->
        </div>
    </div>
    <div class="main-container">
        <div id="notes-list-container">
            {#each $notes as note, i}
                <NoteItem {note} />
            {/each}
        </div>
        <div id="notes-body">
            {#if noteState == "new"}
                <NoteView />
            {:else}
                <Route path="/note/:noteId" let:params>
                    <NoteView noteId={parseInt(params.noteId)} />
                </Route>
            {/if}
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
