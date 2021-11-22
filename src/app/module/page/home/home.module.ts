import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgxMaskModule.forRoot(maskConfig),
        SharedModule
    ], 
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],

})
export class HomeModule { }


