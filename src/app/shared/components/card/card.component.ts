import { Component, Input } from '@angular/core';
import { Product } from '../../../core/index-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
   imports: []
})
export class CardComponent {

  @Input({required : true}) producto! : Product;
}
