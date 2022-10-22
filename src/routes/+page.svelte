<script lang="ts">
	import TopAppBar from '../lib/components/TopAppBar.svelte';
	import PurchaseTable from '../lib/components/PurchaseTable.svelte';
	import FloatingActionButton from '../lib/components/FloatingActionButton.svelte';
	import { theme } from '$lib/stores';
	import { prefetchRoutes } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		prefetchRoutes();
	});
</script>

<svelte:head>
	<title>Top</title>
	<meta name="description" content="Top page" />
	<meta name="color-scheme" content={$theme} />
	<link rel="stylesheet" href={`/theme/theme.${$theme}.css`} />
</svelte:head>

<TopAppBar title="Account Book">
	<PurchaseTable />
</TopAppBar>

<FloatingActionButton href="/add" />

<style global>
	body {
		margin: 0;
	}
</style>
