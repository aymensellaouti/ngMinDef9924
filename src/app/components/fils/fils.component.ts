import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  @Input()
  messageFromBaba = 'init message';
  @Output()
  sendMessageToBaba = new EventEmitter<string>();

  onSendMessageToBaba() {
    this.sendMessageToBaba.emit('Salam');
  }
}
