import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-atomic-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.css',
})
export class IconComponent {
	@Input() icon!: { icon: string; size: string; color?: string | undefined }
}
