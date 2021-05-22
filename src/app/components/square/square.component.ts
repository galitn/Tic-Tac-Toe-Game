import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { eSquareType } from '../board/board.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  eSquareType = eSquareType;
  @Output() squareClicked: EventEmitter<void> = new EventEmitter<void>();
  @Input() square: eSquareType = eSquareType.empty;
  constructor() {}

  ngOnInit(): void {}
  onSquareClicked() {
    this.squareClicked.emit();
  }
}
