import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product-create/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = { "id": 0, "name": "null", 'price': 0 }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "-1";
    this.productService.readById(id).subscribe(product => {
      this.product = product

    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso')
      this.router.navigate(["/products"]), 1500
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])

  }

}
