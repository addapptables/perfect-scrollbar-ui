import { NgModule } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';

@NgModule({
    declarations: [
        PerfectScrollbarDirective
    ],
    exports: [
        PerfectScrollbarDirective
    ]
})
export class AddapptablePerfectScrollbarModule { }
