import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

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
	label: string
	path?: string
	disabled?: boolean
	size?: IAtomicLinkSize
	palleteColor?: IAtomicLinkPaletteColor
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
	imports: [CommonModule, RouterModule],
	templateUrl: './link.component.html',
	styleUrl: './link.component.scss',
})
export class LinkComponent {
	@Input() link: IAtomicLink = {} as IAtomicLink

	private _isActive = false

	public get isActive() {
		return this._isActive
	}

	public set isActive(value) {
		this._isActive = value
	}

	onClick() {
		// this.link.onClick()
	}
}
