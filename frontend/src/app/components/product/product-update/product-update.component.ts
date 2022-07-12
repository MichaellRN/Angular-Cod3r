import { Product } from './../product-create/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {"id": 0, "name":"null", 'price':0}

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id') || "-1";
    this.productService.readById(id).subscribe(product => this.product = product);
   }

  ngOnInit(): void {
    
    }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {
    this.productService.showMessage('Produto atualizado com sucesso!');
    setTimeout(() => {
      this.router.navigate(['/products']);
    },1500)
    });
}

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
