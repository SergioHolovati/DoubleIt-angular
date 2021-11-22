import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccessRoutingModule } from './access-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        AccessRoutingModule,
        NgxMaskModule.forRoot(maskConfig),
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule
       
    ], 
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],

})
export class AccessModule { }


