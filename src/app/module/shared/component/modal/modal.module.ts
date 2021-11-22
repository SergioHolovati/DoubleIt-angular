import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogContainer } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './component/modal.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxMaskModule.forRoot(maskConfig),
    MatTabsModule,
    MatDialogContainer,
  ],
  declarations: [ModalComponent],
  exports: [ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalModule {}
