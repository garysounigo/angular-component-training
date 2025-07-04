import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JustinRoutingModule } from './justin-routing.module';
import { JustinComponent } from './justin.component';

import { DockComponent } from './dock/dock.component';
import { ListsComponent  } from './lists/lists.component';
import { ListsItemComponent } from './lists-item/lists-item.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';


@NgModule({
  declarations: [
    JustinComponent,
    DockComponent,
    ListsComponent,
    ListsItemComponent,
    NavigationListComponent,
  ],
  exports: [
    JustinComponent,
    DockComponent,
    ListsComponent,
    ListsItemComponent,
    NavigationListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    JustinRoutingModule,
  ]
})
export class JustinModule { }
