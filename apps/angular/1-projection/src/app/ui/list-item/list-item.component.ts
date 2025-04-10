import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="border-grey-300 flex justify-between border px-2 py-1">
      {{ item.firstName }}
      <button (click)="delete.emit(item.id)">
        <img class="h-5" src="assets/svg/trash.svg" />
      </button>
    </div>
  `,
  standalone: true,
})
export class ListItemComponent <T extends { id: number; firstName: string }> {
  @Output() delete = new EventEmitter<number>();
  @Input() item!: T;
  constructor() {}
}
