import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btnClass: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() btnClick = new EventEmitter<Event>();

  onClick(event: Event) {
    this.btnClick.emit(event);
  }
}

