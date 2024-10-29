import { Component, OnInit } from '@angular/core';
import { SqlService } from '../../srv/sql.service';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrl: './lista-prod.component.css'
})
export class ListaProdComponent implements OnInit {
  productos: any[] = [];

  constructor(private sqlService: SqlService) {}

  ngOnInit(): void {
    this.sqlService.getProductos().then((data: any[]) => {
      console.log('Fetched products:', data);
      this.productos = data;
    }).catch((error: any) => {
      console.error('Error fetching products:', error);
    });
  }
}
