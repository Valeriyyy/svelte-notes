<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import { type Note } from "../models/Note";
    import { get } from "svelte/store";
    import { notes } from "../store";
    import { onMount } from "svelte";

    export let noteId: number = 0;

    $: womp = noteId;
    console.log("set note id ", noteId);
    $: note = get(notes)[noteId];
    function save(e: Event) {
        e.preventDefault();
        console.log("Saving changes to note");
    }

    function cancel(e: Event) {
        e.preventDefault();
        console.log("Canceling changes to note");
        note.body = "Note editing has been canceled";
    }

    onMount(() => {
        console.log("note view mounted");
        console.log("note id", noteId);
    });
</script>

<div>
    <div id="noteHeader">
        <input
            type="text"
            id="noteTitle"
            maxlength="50"
            placeholder="Enter notes title"
            bind:value={note.header}
        />
    </div>
    <div id="noteBody">
        <textarea
            class="note-edit"
            rows="15"
            cols="35"
            bind:value={note.body}
            placeholder="Enter notes contents"
        ></textarea>
    </div>
    <div id="note-footer">
        <div class="button-group">
            <button on:click={(e) => cancel(e)}> Cancel </button>
            <button on:click={(e) => save(e)}> Save </button>
        </div>
    </div>
</div>

<style>
    #noteHeader {
        width: 100%;
        border-bottom: 2px red;
    }

    #noteTitle {
        width: 100%;
        background-color: transparent;
        border: none;
        height: 40px;
        font-size: 30px;
    }

    #noteTitle:focus {
        outline: none;
    }

    #note-footer {
        height: 65px;
    }

    .note-edit {
        font-size: 3em;
        background-color: transparent;
        border: none;
        width: 100%;
    }

    textarea:focus {
        border-color: var(--element-border-hover, red);
        outline: none;
    }
</style>
