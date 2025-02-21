import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  /*   @Input() btnClass: string = ''; // Permite añadir clases adicionales */
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Tipo de botón
  @Output() btnClick = new EventEmitter<Event>(); // Emite eventos al hacer clic

  onClick(event: Event) {
    this.btnClick.emit(event);
  }
}

