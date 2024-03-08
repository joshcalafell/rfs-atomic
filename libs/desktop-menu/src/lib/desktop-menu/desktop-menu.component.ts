/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { mockDesktopMenuItems } from './IDesktopMenuItem.mock.ts'
import { IDesktopMenuItem } from './IDesktopMenuItem'
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
