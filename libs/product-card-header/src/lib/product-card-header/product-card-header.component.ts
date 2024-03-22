import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { ChipComponent } from '@rfs-atomic/chip'
import { SaleTagComponent } from '@rfs-atomic/sale-tag'
@Component({
	selector: 'rfs-atomic-product-card-header',
	standalone: true,
	imports: [CommonModule, ChipComponent, SaleTagComponent],
	templateUrl: './product-card-header.component.html',
	styleUrl: './product-card-header.component.scss',
})
export class ProductCardHeaderComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product: any
}
