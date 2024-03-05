import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rfs-atomic-hashes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hashes.component.html',
  styleUrl: './hashes.component.scss',
})
export class HashesComponent {
  @Input() hashes: string[] = [];
  @Input() paletteColor!: string;
}
