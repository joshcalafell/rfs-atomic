import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from '@rfs-atomic/icon'

@Component({
	selector: 'rfs-atomic-product-ratings-star',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './product-ratings-star.component.html',
	styleUrl: './product-ratings-star.component.scss',
})
export class ProductRatingsStarComponent {
	@Input() icon!: { icon: string; size: string; color?: string | undefined }
}
