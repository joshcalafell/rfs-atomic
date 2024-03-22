import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLinkActive, RouterModule } from '@angular/router'

type IAtomicLinkPaletteColor =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'success'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'

type IAtomicLinkSize = 'small' | 'medium' | 'large'

export interface IAtomicLink {
	label?: string
	path?: string
	disabled?: boolean
	size?: IAtomicLinkSize
	paletteColor?: IAtomicLinkPaletteColor
	target?: string
	href?: string
	download?: string
	isActive?: boolean
	color?: string
	rel?: string
	onClick?: () => void
}

@Component({
	selector: 'rfs-atomic-link',
	standalone: true,
	imports: [CommonModule, RouterModule, RouterLinkActive],
	templateUrl: './link.component.html',
	styleUrl: './link.component.scss',
})
export class LinkComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() link!: any

	onClick() {
		// this.link.onClick()
	}
}
