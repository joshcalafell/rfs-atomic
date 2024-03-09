import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-atomic-products',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent {}
