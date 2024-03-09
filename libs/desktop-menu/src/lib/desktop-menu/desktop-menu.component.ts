/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { IAtomicLink, LinkComponent } from '@rfs-atomic/link'

@Component({
	selector: 'rfs-atomic-desktop-menu',
	standalone: true,
	imports: [CommonModule, RouterModule, LinkComponent],
	templateUrl: './desktop-menu.component.html',
	styleUrl: './desktop-menu.component.scss',
})
export class DesktopMenuComponent {
	@Input() menuItems: IAtomicLink[] = [] as IAtomicLink[]
}
