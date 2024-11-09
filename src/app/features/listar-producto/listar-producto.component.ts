import { Component, OnInit } from '@angular/core';
import { ListarProductoService } from '../../core/service/listar-producto.service';
import { Product } from '../../core/index-model';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent implements OnInit{

  listaProducto : Product[] = [];
constructor(private productosService : ListarProductoService){

}

ngOnInit(): void {
  this.productosService.listarProducto().subscribe(productos => {this.listaProducto = productos});
}

public listarProductos(){

}

}
