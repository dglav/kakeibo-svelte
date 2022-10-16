import { writable } from 'svelte/store';

const theme = writable<App.Theme>('light');

export { theme };
