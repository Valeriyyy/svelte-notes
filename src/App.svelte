<script lang="ts">
  import NoteList from "./lib/NoteList.svelte";
  import NoteView from "./lib/NoteView.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import { type Note } from "./models/Note";
    import NoteApp from "./lib/NoteApp.svelte";

  let url: string = "/notes";
</script>

<main>
  <Router {url}>
    <Route component={NoteApp}>
    </Route>
    <!-- <Route path="/note/:id" let:params>
      <SomePage note={params.note} />
    </Route> -->
  </Router>
</main>
