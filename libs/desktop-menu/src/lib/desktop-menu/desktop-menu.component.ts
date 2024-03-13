/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { IAtomicLink, LinkComponent } from '@rfs-atomic/link'
import { IDesktopMenuItem } from './IDesktopMenuItem'

@Component({
	selector: 'rfs-atomic-desktop-menu',
	standalone: true,
	imports: [CommonModule, RouterModule, LinkComponent],
	templateUrl: './desktop-menu.component.html',
	styleUrl: './desktop-menu.component.scss',
})
export class DesktopMenuComponent {
	@Input() menuItems: IDesktopMenuItem[] = []

	links: IAtomicLink[] = []

	constructor(private route: ActivatedRoute) {
		this.links = this.menuItems.map((item): IAtomicLink => {
			return {
				label: item.label as string,
				path: item.path as string,
				size: 'medium' as IAtomicLink['size'],
				paletteColor: 'primary' as IAtomicLink['paletteColor'],
			}
		})
	}
}
