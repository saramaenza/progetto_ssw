import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class InserimentoComponent implements OnInit {
  @Output() updateView = new EventEmitter<string>();
  view: string = 'viewInserimento';

  newView(name: string) {
    this.view = name;
    this.updateView.emit(this.view);
  }

  constructor() {}

  ngOnInit() {}
  newBook() {
    var input: HTMLInputElement = document.getElementById(
      'nuovo'
    ) as HTMLInputElement;
    input.value = '';
  }
}
