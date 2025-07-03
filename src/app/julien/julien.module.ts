import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JulienRoutingModule } from './julien-routing.module';
import { JulienComponent } from './julien.component';

import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChipsComponent } from './chips/chips.component';
import { FooterLinkListComponent } from './footer-link-list/footer-link-list.component';
import { FooterFrameComponent } from './footer-frame/footer-frame.component';
import { SocialMediaIconPanelComponent } from './social-media-icon-panel/social-media-icon-panel.component';
import { SocialMediaIconComponent } from './social-media-icon/social-media-icon.component';


@NgModule({
  declarations: [    
    JulienComponent,
    ChatMessageComponent,
    ChipsComponent,
    FooterLinkListComponent,
    FooterFrameComponent,
    SocialMediaIconPanelComponent,
    SocialMediaIconComponent,
  ],
  imports: [
    CommonModule,
    JulienRoutingModule,
  ]
})
export class JulienModule { }
