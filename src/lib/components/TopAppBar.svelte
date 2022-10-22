<script lang="ts">
	import { onMount } from 'svelte';
	import { MDCTopAppBar } from '@material/top-app-bar';
	import { MDCRipple } from '@material/ripple';

	onMount(() => {
		const topAppBarElement = document.querySelector('.mdc-top-app-bar');
		if (topAppBarElement) {
			new MDCTopAppBar(topAppBarElement);
		}

		const iconElements = document.querySelectorAll('.mdc-icon-button');
		iconElements.forEach((iconElement) => {
			const iconButtonRipple = new MDCRipple(iconElement);
			iconButtonRipple.unbounded = true;
		});
	});

	export let title: string;
	export let withBackButton: boolean = false;
	export let justifyStart: boolean = false;
</script>

<header class="mdc-top-app-bar mdc-top-app-bar--fixed">
	<div class="mdc-top-app-bar__row">
		<section class={`mdc-top-app-bar__section ${justifyStart ? 'align-start' : 'align-center'}`}>
			{#if withBackButton}
				<button
					class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
					aria-label="Go back"
					on:click={() => {
						window.history.back();
					}}
					><div class="mdc-icon-button__ripple" />
					arrow_back</button
				>
			{/if}
			<span class="mdc-top-app-bar__title">{title}</span>
		</section>
	</div>
</header>

<main class="mdc-top-app-bar--fixed-adjust"><slot /></main>

<style global lang="scss">
	@use '@material/top-app-bar/mdc-top-app-bar';
	@use '@material/icon-button';
	@use '@material/icon-button/styles';

	.mdc-top-app-bar {
		background-color: var(--md-sys-color-primary);
		color: var(--md-sys-color-on-primary);
	}

	.mdc-top-app-bar .mdc-top-app-bar__action-item,
	.mdc-top-app-bar .mdc-top-app-bar__navigation-icon {
		color: var(--md-sys-color-on-primary);
	}

	.align-center {
		justify-content: center;
		.mdc-top-app-bar__title {
			padding: 0;
		}
	}

	.align-start {
		justify-content: start;
	}
</style>
