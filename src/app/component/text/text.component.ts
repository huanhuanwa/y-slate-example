import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from "@angular/core";
import { BaseLeafComponent, BaseTextComponent } from "slate-angular";

export enum MarkTypes {
    bold = 'bold',
    italic = 'italic',
    underline = 'underlined',
    strike = 'strike',
    code = 'code-line'
}

@Component({
    selector: 'span[demoLeaf]',
    template: `
    <span [ngStyle]="{position:'relative',backgroundColor: leafData.data?.alphaColor}">
        <demo-caret *ngIf="leafData?.isCaret"  [decorate]="leafData?.data" [isForward]="leafData?.isForward"></demo-caret>
        <span slateString [context]="context" [viewContext]="viewContext"
      ></span>
    </span>
    `,
})
export class DemoMarkTextComponent extends BaseLeafComponent {
    constructor(
        public elementRef: ElementRef,
        public cdr: ChangeDetectorRef,
        private renderer2: Renderer2
    ) {
        super(elementRef, cdr);
    }

    leafData: any


    applyTextMark() {
        if (this.text[MarkTypes.bold]) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
        } else {
            this.renderer2.removeStyle(this.elementRef.nativeElement, 'font-weight');
        }
        if (this.text[MarkTypes.italic]) {
            this.renderer2.setStyle(this.nativeElement, 'font-style', 'italic');
        } else {
            this.renderer2.removeStyle(this.nativeElement, 'font-style');
        }
        if (this.text[MarkTypes.code]) {
            this.renderer2.addClass(this.nativeElement, 'code-line');
        } else {
            this.renderer2.removeClass(this.nativeElement, 'code-line');
        }
        if (this.text[MarkTypes.underline]) {
            this.renderer2.setStyle(this.nativeElement, 'text-decoration', 'underline');
        } else {
            this.renderer2.removeStyle(this.nativeElement, 'text-decoration');
        }
    }

    onContextChange() {
        super.onContextChange();
        this.leafData = this.leaf;
        this.applyTextMark();
    }
}