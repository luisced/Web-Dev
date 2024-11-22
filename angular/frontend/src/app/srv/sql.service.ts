import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  constructor() { }

  getProductos() {
    return $.ajax({
      url: 'https://6ae1dd70-eafa-4333-bac3-9ea37805048b.mock.pstmn.io/productos',
      method: 'GET',
      dataType: 'json'
    }).then((response: any) => {
      console.log('AJAX response:', response);
      return response;
    }).catch((error: any) => {
      console.error('AJAX error:', error);
      throw error; 
    });
  }

  createProducto(producto: any) {
    return $.ajax({
      url: 'https://6ae1dd70-eafa-4333-bac3-9ea37805048b.mock.pstmn.io/productos',
      method: 'POST',
      data: producto
    });
  }
}
