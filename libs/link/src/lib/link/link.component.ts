import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationEnd, Router, RouterModule } from '@angular/router'

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
	imports: [CommonModule, RouterModule],
	templateUrl: './link.component.html',
	styleUrl: './link.component.scss',
})
export class LinkComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() link!: any

	private _isActive = false

	public get isActive() {
		return this._isActive
	}

	public set isActive(value) {
		this._isActive = value
	}

	constructor(private router: Router) {
		this.router.events.subscribe((event) => {
			console.log(event, this.link.path)
			if (event instanceof NavigationEnd) {
				console.log(event.url, this.link.path)
				this.isActive = event.url === this.link.path
			}
		})
	}

	ngOnInit() {
		this.isActive = this.router.url === this.link.path
	}

	onClick() {
		// this.link.onClick()
	}
}
