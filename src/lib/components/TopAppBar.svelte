<script>
	import { onMount } from 'svelte';
	import { MDCTopAppBar } from '@material/top-app-bar';
	import { MDCRipple } from '@material/ripple';

	onMount(() => {
		const topAppBarElement = document.querySelector('.mdc-top-app-bar');
		if (topAppBarElement) {
			new MDCTopAppBar(topAppBarElement);
		}

		const iconElements = document.querySelectorAll('.mdc-icon-button');
		if (iconElements.length) {
			iconElements.forEach((iconElement) => {
				const iconButtonRipple = new MDCRipple(iconElement);
				iconButtonRipple.unbounded = true;
			});
		}
	});
</script>

<header class="mdc-top-app-bar mdc-top-app-bar--fixed">
	<div class="mdc-top-app-bar__row">
		<section class="mdc-top-app-bar__section">
			<span class="mdc-top-app-bar__title">Account Book</span>
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

	.mdc-top-app-bar__section {
		justify-content: center;
	}

	.mdc-top-app-bar__title {
		padding: 0;
	}
</style>
