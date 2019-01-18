import { Directive, ElementRef, HostListener, OnDestroy, Input, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Router, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { filter, delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[addapptablesPerfectScrollbar]'
})
export class PerfectScrollbarDirective implements AfterViewInit, OnDestroy {

    ps: PerfectScrollbar;

    options: any;

    allSub = new Array<Subscription>();

    constructor(private _elementRef: ElementRef, readonly _router: Router) {
        this.options = {};
    }

    @Input()
    set perfectScrollOptions(value) {
        this.options = value;
    }

    @HostListener('window:resize')
    onResize() {
        this.ps && this.ps.update();
    }

    ngAfterViewInit(): void {
        this.initPerfectScroll();
        const navigationEnd$ = this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel),
                delay(100)
            )
            .subscribe(() => {
                this.ps && this.ps.update();
            });
        this.allSub.push(navigationEnd$);
    }

    initPerfectScroll() {
        this.ps = new PerfectScrollbar(this._elementRef.nativeElement, {});
    }

    ngOnDestroy(): void {
        this.ps && this.ps.destroy();
        this.allSub.forEach(x => x.unsubscribe());
    }

}
