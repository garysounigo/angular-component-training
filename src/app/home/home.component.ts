import { Component } from '@angular/core';

type RoleType = 'user' | 'assistant' | 'system' | '';
type TypeType = 'message' | 'code' | 'block' | 'image' | 'file' | 'video' | 'audio' | 'blockcode' | '';
type ModeType = 'conversation' | 'chatbot' | '';
type GeneratorType = 'openai' | 'anthropic' | 'google' | 'microsoft' | 'cohere' | 'other' | '';

interface Message {
  role: RoleType;
  content: string;
}

interface MessageMeta {
  send: string;
  receive: string;
  sender: string;
  receiver: string;
  generator: GeneratorType;
}

interface ChatMessage {
  mode: ModeType;
  type: TypeType;
  message: Message;
  meta: MessageMeta;
}


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    lists: any = {
    listsItems: [
      {
        triggered: false,
        title: 'Tableu intelligent',
        lists: {
          title: 'hello',
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'First element',
              subtitle: 'First supporting text'
            },
            {
              size: '16',
              title: 'First element',
              subtitle: 'First supporting text'
            },
          ]
        },
      },
      {
        triggered: false,
        title: 'Flux collaboratif',
        lists: {
          title: 'hello',
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'First element',
              subtitle: 'First supporting text',
            },
            {
              size: '16',
              title: 'Coucou',
              subtitle: 'main',
            },
          ]
        }
      },
      {
        triggered: false,
        title: 'Calenddrier projet',
        lists: {
          title: 'hello',
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'First element',
              subtitle: 'First supporting text',
            },
            {
              size: '16',
              title: 'Coucou',
              subtitle: 'main',
            }
          ]
        }
      },
      {
      triggered: false,
      title: 'Paramétre IA',
      lists: {
        title: 'hello',
        drop: true,
        listsItems: [
          {
            size: '16',
            title: 'First element',
            subtitle: 'First supporting text',
          },
          {
            size: '16',
            tilte: 'Coucou',
            subtitle: 'main',
            },
          ]
        }
      },
      {
        triggered: false,
        title: 'A propos de la plateforme',
        lists: {
          title: 'hello',
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'First element',
              subtitle: 'First supporting text',
            },
            {
              size: '16',
              title: 'Coucou',
              subtitle: 'main',
            },
          ]
        }
      },
    ]
  };


  conversation: ChatMessage[] = [];
  send: string = 'true';


  onValue(event: string): void{
    let newMessage: ChatMessage = {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: event, 
      },
      meta: {
        send: this.send,
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    }
    this.conversation = [...this.conversation, newMessage];
    //this.conversation.push();
  }

  onLabelValue(event: string): void{
    this.send = event;
  }

}
