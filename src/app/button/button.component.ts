import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-button',
  template: `
    <button [ngClass]='classes'>
      <span *ngIf="startIcon" class="material-icons" style="margin-right: 10px">{{startIcon}}</span>
      {{text}}
      <span *ngIf="endIcon" class="material-icons" style="margin-left: 10px">{{endIcon}}</span>
    </button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() disableShadow = undefined;
  @Input() disabled = undefined;
  @Input() startIcon: string = undefined;
  @Input() endIcon: string = undefined;
  @Input() variant = 'default';
  @Input() color = 'default';
  @Input() size = 'md';
  @Input() label: string;
  get text() {
    return this.label;
  }

  get classes() {
    let cssClasses = [];

    cssClasses.push(`variant-${this.variant}`);
    cssClasses.push(`color-${this.color}`);
    cssClasses.push(`size-${this.size}`);

    return cssClasses;
  }

  constructor() { }

  ngOnInit(): void {
    const btn = document.querySelector('button');
    if (this.disableShadow !== undefined) {
      btn.style.boxShadow = 'none';
    }
    btn.disabled = this.disabled !== undefined;
  }

}
