import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertComponent {
  @Input() public message = '';
  @Output() public close = new EventEmitter<void>();

  public onClose(): void {
    this.close.emit();
  }
}
