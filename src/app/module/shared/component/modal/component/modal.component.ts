import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/module/models/my-products.models';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent {
 
  public inputText: string = 'Arraste uma imagem ou';
  public action: string = 'Novo Produto';
  fileInputLabel!: string;
  base64textString = [];
  public product!: Product;
  public categories!: string;
  addProduct!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModalComponent>,
    private formBuilder: FormBuilder
  ) {
    if (data != '') {
      for (var category of data.categories.category) {
        console.log(category);
        let name = `${category.name}`;
        if (this.categories) {
          this.categories = `${this.categories},${name}`;
        } else {
          this.categories = name;
        }
      }
      this.action = 'Editar Produto!';
      this.product = data;
    }
  }

  public signinForm!: FormGroup;

  signinUserForm() {
    this.signinForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    if (this.product) {
       this.addProduct = this.formBuilder.group({
        name: this.product.title,
        description: this.product.description,
        price: this.product.price,
        date: this.product.data,
        category: this.categories,
        image: [''],
      });
    } else {
      this.adicionarProduto();
    }
  }

  //post Upload de planilha
  handleFileInput(event: any) {
    let me = this;
    let file = event.files[0];
    if (file) {
      this.inputText = `Arquivo ${file.name} selecionado!`;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  adicionarProduto() {
      this.addProduct = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
      date: [''],
      category: [''],
      image: [''],
    });
  }

  close() {
    this.adicionarProduto();
    this.dialogRef.close();
  }

  cancelar() {
    this.adicionarProduto();
    this.dialogRef.close();
  }

  salvar() {
    /* console.log(this.addProduct.value); */
  }
}
