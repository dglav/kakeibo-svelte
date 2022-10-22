<script lang="ts">
	import { onMount } from 'svelte';
	import { MDCRipple } from '@material/ripple';

	onMount(() => {
		const fabButtons = document.querySelectorAll('.mdc-fab');
		if (fabButtons.length) {
			fabButtons.forEach((fabButton) => {
				MDCRipple.attachTo(fabButton);
			});
		}
	});

	export let extended: boolean = false;
	export let href: string = '';
</script>

<a
	{href}
	class={`mdc-fab ${extended ? 'mdc-fab--extended' : ''}`}
	aria-label="Add"
	data-sveltekit-prefetch
>
	<div class="mdc-fab__ripple" />
	<span class="material-icons mdc-fab__icon">add</span>
	{#if extended}
		<span class="mdc-fab__label">Add</span>
	{/if}
</a>

<!-- Todo: Figure out why global needs to be set here for the ripple effect to work -->
<style global lang="scss">
	@use '@material/fab';
	@use '@material/ripple';

	@include fab.core-styles;

	.mdc-fab {
		@include fab.container-color(var(--md-sys-color-primary-container));
		@include fab.ink-color(var(--md-sys-color-on-primary-container));
		@include fab.shape-radius(25%);
		@include fab.extended-shape-radius(25%);

		position: fixed;
		bottom: 32px;
		right: 32px;
		height: 56px;
	}
</style>
