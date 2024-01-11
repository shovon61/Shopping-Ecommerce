import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Producti } from '../interface/producti';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  name="John Smith";
  addToCart:number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'


  // pro:Producti[]=[];

  // constructor (private pservice:ProductService){}
  //   ngOninit(){
  //     this.pservice.getproducts().subscribe((response)=>{
  //       this.pro=response;
  //       // console.log(this.pro)
  //     });
  //     // console.log(this.pro);
  //   }

  // }
  }
  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any){
    //this.name = event.target.value;
    //console.log(event.target.value);
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
    
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
    
  }
}
