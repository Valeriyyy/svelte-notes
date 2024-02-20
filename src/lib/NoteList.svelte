<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import NoteItem from "./NoteItem.svelte";
  import NoteView from "./NoteView.svelte";
  import { notes } from "../store";
  let url: string = "";
</script>

<section style="height: 100%;">
  {#each $notes as note, i}
    <NoteItem {note} />
  {/each}
</section>

<style>
</style>
