import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        CoreModule,
        SharedModule,
        FlexLayoutModule
    ],
    exports: [
        CoreModule,
        SharedModule,
        FlexLayoutModule
    ]
})
export class BcCommonModule { }
