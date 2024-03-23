import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { HashesComponent } from '@rfs-atomic/hashes'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { Observable } from 'rxjs'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { ActivatedRoute, Router } from '@angular/router'
import { IAtomicUiButton } from '@rfs-atomic/button'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductsService } from '@rfs-atomic/products'

@Component({
	selector: 'rfs-atomic-product-detail',
	standalone: true,
	imports: [
		CommonModule,
		HashesComponent,
		ButtonRowComponent,
		DetailGroupComponent,
		ProductRatingsComponent,
	],
	templateUrl: './product-detail.component.html',
	styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	product$: Observable<any> = new Observable<any>()

	backButton: IAtomicUiButton

	constructor(
		private router: Router,
		private ps: ProductsService,
		private activatedRoute: ActivatedRoute
	) {
		console.log('ProductDetailComponent')
		this.backButton = {
			label: '<- Back ',
			paletteColor: 'primary',
			size: 'medium',
			disabled: false,
		}

		this.activatedRoute.params.subscribe((params) => {
			console.log('params', params)
			this.product$ = this.ps.mockProductService.getProductById(params['id'])
		})

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addToCart(product: any) {
		console.log('product', product)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup1(product: any) {
		return [
			{
				label: 'Fragrance',
				value: product.scent,
			},
			{
				label: 'Availability',
				value: product.stock ? 'In Stock' : 'Out of Stock',
			},
		]
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup2(product: any) {
		return [
			{
				label: 'Size',
				value: product.size,
			},
			{
				label: 'Burn Time',
				value: product.burnTime,
			},
			{
				label: 'Price',
				value: product.price,
				type: 'currency',
			},
		]
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup3(product: any) {
		return [
			{
				label: 'Wick',
				value: product.wick,
			},
			{
				label: 'Material',
				value: product.material,
			},
			{
				label: 'Color',
				value: product.color,
			},
		]
	}

	goBack() {
		this.router.navigate(['/products'])
	}
}
