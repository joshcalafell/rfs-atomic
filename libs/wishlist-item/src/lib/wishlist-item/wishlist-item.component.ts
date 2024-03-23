import { Component, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EventEmitter } from '@angular/core'
import { ButtonRowComponent } from '@rfs-atomic/button-row'

@Component({
	selector: 'rfs-atomic-wishlist-item',
	standalone: true,
	imports: [CommonModule, ButtonRowComponent],
	templateUrl: './wishlist-item.component.html',
	styleUrl: './wishlist-item.component.scss',
})
export class WishlistItemComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() item: any = {}
	@Input() index = 0
	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()

	removeButton = {
		label: 'Remove',
		variant: 'secondary',
		icon: 'trash',
	}

	cartButton = {
		label: 'Cart',
		variant: 'primary',
		icon: 'shopping-cart',
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	removeItemHandler(item: unknown): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic

		this.removeItemEmitter.emit(item)
	}

	wishlistItemHandler(item: unknown): void {
		this.wishlistItemEmitter.emit(item)
	}
}
