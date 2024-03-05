import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent, IAtomicUiButton } from '@rfs-atomic/button';
import { ChipComponent, IChip } from '@rfs-atomic/chip';
import {
  DescriptionListComponent,
  IDescriptionListItem,
} from '@rfs-atomic/description-list';
import { HashesComponent } from '@rfs-atomic/hashes';

@Component({
  selector: 'rfs-atomic-ui',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HashesComponent,
    DescriptionListComponent,
    ChipComponent,
  ],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
})
export class UiComponent implements OnInit {
  button: IAtomicUiButton = {
    label: 'Click me',
    palleteColor: 'primary',
    disabled: false,
    size: 'medium',
    type: 'animated-arrow',
  };

  hashes: string[] = [
    'rock',
    'pop',
    'jazz',
    'blues',
    'country',
    'folk',
    'classical',
    'hip-hop',
    'rap',
    'reggae',
    'rhythm-and-blues',
    'soul',
    'electronic',
    'dance',
    'house',
    'techno',
    'trance',
    'breakbeat',
    'trip-hop',
    'drum-and-bass',
    'dubstep',
    'hardstyle',
    'ambient',
    'chillout',
    'downtempo',
    'new-age',
    'alternative',
    'indie',
    'punk',
    'metal',
    'psychedelic',
    'grunge',
    'hard-rock',
    'progressive-rock',
    'heavy-metal',
    'death-metal',
    'black-metal',
    'doom-metal',
    'thrash-metal',
    'power-metal',
    'folk-metal',
    'viking-metal',
    'symphonic-metal',
    'gothic-metal',
    'industrial-metal',
    'nu-metal',
    'metalcore',
    'deathcore',
    'grindcore',
    'post-metal',
    'post-hardcore',
    'emo',
    'screamo',
    'hardcore',
    'hardcore-punk',
    'post-punk',
    'gothic-rock',
    'new-wave',
    'synth-pop',
    'industrial',
    'ebm',
    'noise',
    'experimental',
    'ambient',
    'dark-ambient',
    'industrial-ambient',
    'noise-ambient',
    'drone',
    'power-noise',
    'power-electronics',
    'industrial-noise',
    'goth',
    'darkwave',
    'ethereal',
    'neoclassical',
    'neofolk',
    'martial-industrial',
    'military-pop',
    'military-techno',
  ];

  listItems: IDescriptionListItem[] = [
    { label: 'Name', value: 'John Doe', valueType: 'text' },
    { label: 'Email', value: 'johndoe@email.com', valueType: 'email' },
    { label: 'Phone', value: '+1 (303) 674-8856', valueType: 'phone' },
    { label: 'Country', value: 'United States', valueType: 'location' },
    { label: 'Date of Birth', value: '01/01/1970', valueType: 'date' },
    { label: 'Dimensions', value: '3x4x6', valueType: 'dimensions' },
    { label: 'SKU', value: '#2330009738763', valueType: 'dimensions' },
    { label: 'Weight', value: '3.5 lbs', valueType: 'weight' },
  ];

  chips: IChip[] = [];

  buttons: IAtomicUiButton[] = [];

  onButtonClick(event: unknown) {
    console.log('Button clicked', event);
  }

  ngOnInit(): void {
    const colors = [
      'primary',
      'secondary',
      'tertiary',
      'danger',
      'warning',
      'success',
      'info',
      'light',
      'dark',
      'link',
    ];
    const sizes = ['small', 'medium', 'large'];
    const types = ['button', 'animated-arrow'];

    for (const color of colors) {
      for (const size of sizes) {
        for (const type of types) {
          this.buttons.push({
            label: `${color} ${size} ${type}`,
            palleteColor: color.toString() as
              | 'primary'
              | 'secondary'
              | 'tertiary'
              | 'danger'
              | 'warning'
              | 'success'
              | 'info'
              | 'light'
              | 'dark'
              | 'link',
            disabled: false,
            size: size.toString() as 'small' | 'medium' | 'large',
            type: type.toString() as 'button' | 'animated-arrow',
          });
        }
      }
    }

    for (const color of colors) {
      for (const size of sizes) {
        this.chips.push({
          label: `${color} ${size}`,
          color: color.toString() as
            | 'primary'
            | 'secondary'
            | 'tertiary'
            | 'danger'
            | 'warning'
            | 'success'
            | 'info'
            | 'light'
            | 'dark',
          size: size.toString() as 'small' | 'medium' | 'large',
        });
      }
    }
  }
}
