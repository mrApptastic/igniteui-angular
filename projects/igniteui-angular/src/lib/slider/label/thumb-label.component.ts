import { Component, Input, TemplateRef, HostBinding, ElementRef } from '@angular/core';
import { SliderHandle } from '../slider.common';
import { IgxSliderThumbComponent } from '../thumb/thumb-slider.component';

/**
 * @hidden
 */
@Component({
    selector: 'igx-thumb-label',
    templateUrl: 'thumb-label.component.html'
})
export class IgxThumbLabelComponent {
    @Input()
    public value: number;

    @Input()
    public templateRef: TemplateRef<any>;

    @Input()
    public context: any;

    @Input()
    public type: SliderHandle;

    @Input()
    public continuous: boolean;

    @Input()
    public deactiveState: boolean;

    @Input()
    public thumb: IgxSliderThumbComponent;


    @HostBinding('class.igx-slider-from')
    public get thumbFromClass() {
        return this.type === SliderHandle.FROM;
    }

    @HostBinding('class.igx-slider-to')
    public get thumbToClass() {
        return this.type === SliderHandle.TO;
    }

    @HostBinding('class.igx-slider-from--active')
    public get thumbFromActiveClass() {
        return this.type === SliderHandle.FROM && this.active;
    }

    @HostBinding('class.igx-slider-to--active')
    public get thumbToActiveClass() {
        return this.type === SliderHandle.TO && this.active;
    }

    @HostBinding('class.igx-slider-from--pressed')
    public get labelFromPressedClass() {
        return this.thumb?.thumbFromPressedClass;
    }

    @HostBinding('class.igx-slider-to--pressed')
    public get labelToPressedClass() {
        return this.thumb?.thumbToPressedClass;
    }

    public get getLabelClass() {
        return {
            'igx-slider-from__label': this.type === SliderHandle.FROM,
            'igx-slider-to__label': this.type === SliderHandle.TO
        };
    }

    private _active: boolean;

    constructor(private _elementRef: ElementRef) { }

    public get nativeElement() {
        return this._elementRef.nativeElement;
    }

    public get active() {
        return this._active;
    }

    public set active(val: boolean) {
        if (this.continuous || this.deactiveState) {
            this._active = false;
        } else {
            this._active = val;
        }
    }
}
