<script lang="ts">
	import TopAppBar from '../../lib/components/TopAppBar.svelte';
	import FloatingActionButton from '../../lib/components/FloatingActionButton.svelte';
	import { theme } from '$lib/stores';

	import { onMount } from 'svelte';
	import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';

	onMount(() => {
		document
			.querySelector('input[type="date"]')
			?.setAttribute('value', new Date().toISOString().split('T')[0]);

		const textFields = document.querySelectorAll('.mdc-text-field');
		textFields.forEach((textField) => {
			MDCTextField.attachTo(textField);
		});

		const textFieldIcons = document.querySelectorAll('.mdc-text-field-icon');
		textFieldIcons.forEach((textFieldIcon) => {
			MDCTextFieldIcon.attachTo(textFieldIcon);
		});
	});
</script>

<svelte:head>
	<title>Add Purchase</title>
	<meta name="description" content="Add Purchase Page" />
	<meta name="color-scheme" content={$theme} />
	<link rel="stylesheet" href={`/theme/theme.${$theme}.css`} />
</svelte:head>

<TopAppBar title="Add Purchase" withBackButton justifyStart>
	<div class="input-field-group">
		<label class="mdc-text-field mdc-text-field--outlined">
			<span class="mdc-notched-outline">
				<span class="mdc-notched-outline__leading" />
				<span class="mdc-notched-outline__notch">
					<span class="mdc-floating-label" id="my-label-id">Name</span>
				</span>
				<span class="mdc-notched-outline__trailing" />
			</span>
			<input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id" />
		</label>
	</div>
	<div class="input-field-group">
		<label class="mdc-text-field mdc-text-field--outlined">
			<span class="mdc-notched-outline">
				<span class="mdc-notched-outline__leading" />
				<span class="mdc-notched-outline__notch">
					<span class="mdc-floating-label" id="my-label-id">Amount</span>
				</span>
				<span class="mdc-notched-outline__trailing" />
			</span>
			<input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id" />
		</label>
	</div>
	<div class="input-field-group">
		<label class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
			<span class="mdc-notched-outline">
				<span class="mdc-notched-outline__leading" />
				<span class="mdc-notched-outline__notch">
					<span class="mdc-floating-label" id="my-label-id">Date</span>
				</span>
				<span class="mdc-notched-outline__trailing" />
			</span>
			<i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading" role="button"
				>event</i
			>
			<input type="date" class="mdc-text-field__input" aria-labelledby="my-label-id" />
		</label>
	</div>
</TopAppBar>

<FloatingActionButton extended href="/" />

<style global lang="scss">
	@use '@material/floating-label/mdc-floating-label';
	@use '@material/line-ripple/mdc-line-ripple';
	@use '@material/notched-outline/mdc-notched-outline';
	@use '@material/textfield';
	@use '@material/textfield/icon';

	@include icon.icon-core-styles;
	@include textfield.core-styles;

	body {
		margin: 0;
	}

	.input-field-group {
		padding: 44px 36px 0 36px;
	}

	.mdc-text-field {
		@include textfield.focused-outline-color(var(--md-sys-color-primary));
		width: 100%;
	}

	.mdc-text-field--focused {
		@include textfield.label-color(var(--md-sys-color-primary));
	}
</style>
