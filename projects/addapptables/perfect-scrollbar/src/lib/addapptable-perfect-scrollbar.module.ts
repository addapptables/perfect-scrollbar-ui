import { NgModule } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';

@NgModule({
    declarations: [
        PerfectScrollbarDirective,
        DynamicDirective
    ],
    exports: [
        PerfectScrollbarDirective,
        DynamicDirective
    ]
})
export class AddapptablePerfectScrollbarModule { }
