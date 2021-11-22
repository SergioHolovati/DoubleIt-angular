import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MyProductsComponent } from './component/my-products.component';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    declarations: [
        MyProductsComponent,
    ],
    imports: [
        CommonModule,
        NgxMaskModule.forRoot(maskConfig),
        MatCardModule,
        MatMenuModule
    ], 
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],

})
export class MyProductsModule { }


