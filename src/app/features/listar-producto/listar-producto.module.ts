import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarProductoRoutingModule } from './listar-producto-routing.module';
import { ListarProductoComponent } from './listar-producto.component';
import { CardComponent } from '../../shared/components/card/card.component';


@NgModule({
  declarations: [
    ListarProductoComponent
  ],
  imports: [
    CommonModule,
    ListarProductoRoutingModule,
    CardComponent
  ]
})
export class ListarProductoModule { }
