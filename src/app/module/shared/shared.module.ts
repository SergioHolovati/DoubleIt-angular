import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HeaderComponent } from './component/header/header.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ModalComponent } from './component/modal/component/modal.component';
import { MatDialogContainer } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './component/confirmation-modal/confirmation-modal.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [TabsComponent, HeaderComponent, ModalComponent, ConfirmationModalComponent],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxMaskModule.forRoot(maskConfig),
    MatTabsModule,
    MatDialogContainer,
    ModalComponent
  ],
  exports: [HeaderComponent,ModalComponent],
  entryComponents: [TabsComponent, HeaderComponent, ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
