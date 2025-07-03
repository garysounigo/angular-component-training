import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JustinRoutingModule } from './justin-routing.module';
import { JustinComponent } from './justin.component';

import { ChatInputComponent } from './chat-input/chat-input.component';
import { DockComponent } from './dock/dock.component';
import { ListsComponent  } from './lists/lists.component';
import { ListsItemComponent } from './lists-item/lists-item.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';


@NgModule({
  declarations: [
    JustinComponent,
    ChatInputComponent,
    DockComponent,
    ListsComponent,
    ListsItemComponent,
    NavigationListComponent,
  ],
  imports: [
    CommonModule,
    JustinRoutingModule,
  ]
})
export class JustinModule { }
