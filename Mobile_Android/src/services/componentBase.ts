import { Injectable, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Injectable()
export class ComponentBase implements OnDestroy {

    private mobileQuery: MediaQueryList;
    protected subscription: Subscription;

    constructor(changeDetectorRef: ChangeDetectorRef,
                media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    }

    private _mobileQueryListener: () => void;

    isMobile (): boolean{
        return this.mobileQuery.matches;
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
        if (this.subscription){
            this.subscription.unsubscribe();
        }
    }
}
