<script lang="ts">
    import { onMount } from "svelte";
    import NotesService from "../services/service.notes";
    import type { Note } from "../models/Note";
    import { Router, Link, Route, navigate } from "svelte-routing";

    const service = new NotesService();
    export let noteId: number = null;
    export let noteFromList: Note = null;
    //$: note = get(notes)[noteId];
    $: note =
        noteId == null
            ? { id: null, header: null, body: null, isDeleted: false }
            : service.GetNoteById(noteId);
    function save(e: Event) {
        e.preventDefault();
        console.log("saving note with data", note);
        service.InsertNewNote(note);

        console.log("created new note", note);
        navigate("/");
    }

    function cancel(e: Event) {
        e.preventDefault();
        //note.body = "Note editing has been canceled";
    }

    onMount(async () => {
        //note = await service.GetNoteByIdAsync(noteId);
    });
</script>

{#if note == null}
    <div>
        <div id="noteHeader">
            <input
                type="text"
                id="noteTitle"
                maxlength="50"
                placeholder="Enter notes title"
                bind:value={note.body}
            />
        </div>
        <div id="noteBody">
            <textarea
                class="note-edit"
                rows="15"
                cols="35"
                placeholder="Enter notes contents"
                bind:value={note.header}
            ></textarea>
        </div>
        <div id="note-footer">
            <div class="button-group">
                <button on:click={(e) => cancel(e)}> Cancel </button>
                <button on:click={(e) => save(e)}> Save </button>
            </div>
        </div>
    </div>
{:else}
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
{/if}

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
