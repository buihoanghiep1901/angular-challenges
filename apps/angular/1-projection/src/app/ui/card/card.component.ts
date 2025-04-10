import { NgFor, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CardType } from '../../model/card.model';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass">
      <ng-content select="header"></ng-content>
      <section>
        <ng-container *ngFor="let item of list">
          <ng-template
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item }">
          </ng-template>
        </ng-container>
      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="onAdd.emit()">
        Add
      </button>
    </div>
  `,
  standalone: true,
  imports: [NgFor, NgTemplateOutlet],
})
export class CardComponent <T> {
  @Input() list: T[] | null = null;
  @Input() customClass = '';
  @Input() itemTemplate!: TemplateRef<{ $implicit: T }>;
  @Output() onAdd = new EventEmitter<void>();

  constructor() {}
}
