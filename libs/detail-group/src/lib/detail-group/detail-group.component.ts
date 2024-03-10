import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DescriptionListComponent } from '@rfs-atomic/description-list'
@Component({
	selector: 'rfs-atomic-detail-group',
	standalone: true,
	imports: [CommonModule, DescriptionListComponent],
	templateUrl: './detail-group.component.html',
	styleUrl: './detail-group.component.scss',
})
export class DetailGroupComponent {
	@Input() items: { label: string; value: string | number }[] = []
}
