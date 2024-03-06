import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { mockDesktopMenuItems } from './IDesktopMenuItem.mock.ts'
import { IDesktopMenuItem } from './IDesktopMenuItem'

@Component({
	selector: 'rfs-atomic-desktop-menu',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './desktop-menu.component.html',
	styleUrl: './desktop-menu.component.scss',
})
export class DesktopMenuComponent {
	@Input() menuItems: IDesktopMenuItem[] = mockDesktopMenuItems

	isOpen = true

	public onMenuItemClick(menuItemPath: string): void {
		console.log(menuItemPath)
	}
}
