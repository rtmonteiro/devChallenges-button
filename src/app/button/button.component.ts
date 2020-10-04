import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-button',
  template: `<button [ngClass]='classes'>{{text}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() disableShadow = undefined;
  @Input() disabled = undefined;
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
