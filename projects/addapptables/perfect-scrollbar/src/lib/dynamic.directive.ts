import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[addapptablesDynamic]'
})
export class DynamicDirective {

    @Input()
    name: string;

    constructor(public viewContainerRef: ViewContainerRef) { }

}
