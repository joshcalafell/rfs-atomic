import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

type DisplayColumns =
	| 'id'
	| 'order_number'
	| 'customer_name'
	| 'order_date'
	| 'order_status'
	| 'order_total'
	| 'action'

export interface Column {
	title: string
	column_key: DisplayColumns
	sortable: boolean
	sortDirections: string[]
	sortFn: () => void
}

export class Order {
	constructor(
		public id: number,
		public sku: string,
		public customer_name: string,
		public order_date: Date,
		public order_status: string,
		public order_total: number
	) {
		this.id = id
		this.sku = sku
		this.customer_name = customer_name
		this.order_date = order_date
		this.order_status = order_status
		this.order_total = order_total
	}
}

@Component({
	selector: 'rfs-atomic-sort-table',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './sort-table.component.html',
	styleUrl: './sort-table.component.scss',
})
export class SortTableComponent {
	@Input() displayedColumns: Column[] = []
	@Input() columns: unknown[] = []

	sorted = false
	sort = ''
	direction = ''
	sortedOrders = []
	lastSortedBy = ''
}
