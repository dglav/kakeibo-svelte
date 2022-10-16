<script lang="ts">
	import TopAppBar from '../lib/components/TopAppBar.svelte';
	import PurchaseTable from '../lib/components/PurchaseTable.svelte';
	import FloatingActionButton from '../lib/components/FloatingActionButton.svelte';
	import { theme } from '$lib/stores';
</script>

<svelte:head>
	<title>Top</title>
	<meta name="description" content="Top page" />
	<meta name="color-scheme" content={$theme} />
	<link rel="stylesheet" href={`/theme/theme.${$theme}.css`} />
</svelte:head>

<TopAppBar>
	<PurchaseTable />
</TopAppBar>

<FloatingActionButton />

<style global>
	body {
		margin: 0;
	}
</style>
