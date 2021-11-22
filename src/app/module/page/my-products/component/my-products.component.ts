import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/module/models/my-products.models';
import { MyProdoctsService } from 'src/app/module/service/my-products.service';
import { ConfirmationModalComponent } from 'src/app/module/shared/component/confirmation-modal/confirmation-modal.component';
import { ModalComponent } from 'src/app/module/shared/component/modal/component/modal.component';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss'],
})
export class MyProductsComponent implements OnInit {
  public products!: Product[];

  constructor(private dialog: MatDialog, private route: Router, private productService : MyProdoctsService) {}

  deleteProduct(id: any) {
    this.openDialogConfirmation(id);
  }

  adicionarProduto() {
    this.openDialog('');
  }

  editProduct(id: any) {
    this.openDialog(this.products[id - 1]);
  }

  //função do modal
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: data,
    });
  }

  getAllProducts(){
    this.products = this.productService.getAll();
    
  }
    
  

  openDialogConfirmation(data: any) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: data,
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.route.navigate(['/login']);
    } else {
      this.getAllProducts();
    }
  }
}
