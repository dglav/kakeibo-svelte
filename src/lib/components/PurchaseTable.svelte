<script>
	import { onMount } from 'svelte';
	import { MDCDataTable } from '@material/data-table';

	onMount(() => {
		const dataTable = document.querySelector('.mdc-data-table');
		if (dataTable) {
			new MDCDataTable(dataTable);
		}
	});
</script>

<div class="mdc-data-table mdc-data-table--sticky-header">
	<div class="mdc-data-table__table-container">
		<table class="mdc-data-table__table" aria-label="Dessert calories">
			<thead>
				<tr class="mdc-data-table__header-row">
					<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Date</th>
					<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Name</th>
					<th
						class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
						role="columnheader"
						scope="col">Amount (yen)</th
					>
				</tr>
			</thead>
			<tbody class="mdc-data-table__content">
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
				<tr class="mdc-data-table__row">
					<th class="mdc-data-table__cell" scope="row">2022-01-01</th>
					<td class="mdc-data-table__cell ">San Marc</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">740</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style lang="scss">
	@use '@material/data-table/data-table';

	@include data-table.core-styles;
	@include data-table.theme-baseline;

	.mdc-data-table {
		width: 100%;

		.mdc-data-table__header-cell:last-child,
		.mdc-data-table__header-cell:first-child {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
	}

	.mdc-data-table__table-container {
		overflow-x: clip !important;
	}

	.mdc-data-table__header-row,
	.mdc-data-table__row {
		height: 40px;
	}

	.mdc-data-table__header-cell {
		color: var(--md-sys-color-on-surface-variant);
	}

	.mdc-data-table__cell {
		color: var(--md-sys-color-on-background);
	}

	.mdc-data-table--sticky-header {
		.mdc-data-table__header-cell {
			top: 56px;
		}
	}

	.mdc-data-table__cell,
	.mdc-data-table__header-cell {
		border-bottom-color: var(--md-ref-palette-neutral80);
	}

	.mdc-data-table__header-cell {
		border-bottom-width: 2px;
	}
</style>
