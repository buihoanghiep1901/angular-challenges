import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserStore } from './user.store';
import { HasRoleDirective } from './role.directive';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, HasRoleDirective],
  template: `
    <h2 class="mt-10 text-xl">Information Panel</h2>
    <!-- admin can see everything -->
    <div *hasRole="['ADMIN']">visible only for super admin</div>
    <div *hasRole="'MANAGER'">visible if manager</div>
    <div *hasRole="['MANAGER', 'READER']">visible if manager and/or reader</div>
    <div *hasRole="['MANAGER', 'WRITER']">visible if manager and/or writer</div>
    <div *hasRole="'CLIENT'">visible if client</div>
    <div>visible for everyone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  user$ = this.userStore.user$;
  constructor(private userStore: UserStore) {}
}
