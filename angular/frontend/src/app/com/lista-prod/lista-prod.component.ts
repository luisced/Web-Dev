import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SqlService } from '../../srv/sql.service';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.css']
})
export class ListaProdComponent implements OnInit {
  productos: any[] = [];

  constructor(private sqlService: SqlService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sqlService.getProductos().then((data: any[]) => {
      console.log('Fetched products:', data);
      this.productos = data;
      this.cdr.markForCheck(); // Trigger change detection
    }).catch((error: any) => {
      console.error('Error fetching products:', error);
    });
  }
}
