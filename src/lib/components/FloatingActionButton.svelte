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
</script>

<button class="mdc-fab" aria-label="Add">
	<div class="mdc-fab__ripple" />
	<span class="material-icons mdc-fab__icon">add</span>
</button>

<!-- Todo: Figure out why global needs to be set here for the ripple effect to work -->
<style global lang="scss">
	@use '@material/fab';
	@use '@material/ripple';

	@include fab.core-styles;

	.mdc-fab {
		@include fab.container-color(var(--md-sys-color-primary-container));
		@include fab.ink-color(var(--md-sys-color-on-primary-container));
		@include fab.shape-radius(25%);

		@include ripple.states-base-color(var(--md-sys-color-primary-container));
		@include ripple.states-opacities(
			(
				hover: 0.3,
				focus: 0.5,
				press: 0.8
			)
		);

		position: fixed;
		bottom: 32px;
		right: 32px;
	}
</style>
