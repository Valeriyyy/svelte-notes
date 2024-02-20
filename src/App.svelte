<script lang="ts">
  import NoteList from "./lib/NoteList.svelte";
  import NoteView from "./lib/NoteView.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import { type Note } from "./models/Note";
  import NoteApp from "./lib/NoteApp.svelte";
  import { notes } from "./store";
  
  let url: string = "/notes";

</script>

<main>
  <Router>
    <NoteApp />
  </Router>
  <!-- <Router {url}>
    <Route component={NoteApp}>
    </Route>
  </Router> -->
</main>

