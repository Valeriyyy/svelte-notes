<script lang="ts">
    import { Router } from "svelte-routing";
    import NoteApp from "./lib/NoteApp.svelte";
</script>

<main>
    <Router>
        <NoteApp />
    </Router>
</main>
