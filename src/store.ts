import { writable } from 'svelte/store';

/* const count = writable(0);

count.subscribe((value) => {
    console.log(value);
});

count.set(1);

count.update((n) => n + 1); */

export let message = writable("Hello");