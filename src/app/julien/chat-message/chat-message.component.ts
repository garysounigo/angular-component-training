import { Component, Input } from '@angular/core';

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
  selector: 'chat-message',
  standalone: false,
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {

  @Input() mode: ModeType = '';
  @Input() type: TypeType = '';

  @Input() role: RoleType = '';
  @Input() content: string = '';
  message: Message = { role: this.role, content: this.content };
  
  @Input() send: string = '';
  @Input() receive: string = '';
  @Input() sender: string = '';
  @Input() receiver: string = '';
  @Input() generator: GeneratorType = '';

  @Input()

  meta: MessageMeta = {
    send: this.send,
    receive: this.receive,
    sender: this.sender,
    receiver: this.receiver,
    generator: this.generator
  };

  chatMessage: ChatMessage = {
    mode: this.mode,
    type: this.type,
    message:  this.message,
    meta: this.meta
  };
}



// Je veux que si le mode = 'conversation' ai le type = 'message', alors le message est affiché dans une bulle de conversation.
// Si le mode = 'chatbot' et le type = 'message', alors le message est affiché dans une bulle de chatbot.
// Si le mode = 'conversation' et le type = 'code', alors le message est affiché dans une bulle de code.
// Si le mode = 'chatbot' et le type = 'code', alors le message est affiché dans une bulle de code.
// Si le mode = 'conversation' et le type = 'block', alors
// le message est affiché dans une bulle de bloc.
// Si le mode = 'chatbot' et le type = 'block', alors le message
// est affiché dans une bulle de bloc.
// Si le mode = 'conversation' et le type = 'image', alors le message est affiché dans une bulle d'image.
// Si le mode = 'chatbot' et le type = 'image', alors le message est affiché dans une bulle d'image.
// Si le mode = 'conversation' et le type = 'file', alors le message est affiché dans une bulle de fichier.
// Si le mode = 'chatbot' et le type = 'file', alors
// le message est affiché dans une bulle de fichier.
// Si le mode = 'conversation' et le type = 'video', alors le message est affiché dans une bulle de vidéo.
// Si le mode = 'chatbot' et le type = 'video', alors le message est affiché dans une bulle de vidéo.
// Si le mode = 'conversation' et le type = 'audio', alors le message est affiché dans une bulle d'audio.
// Si le mode = 'chatbot' et le type = 'audio', alors le message est affiché dans une bulle d'audio.
// Si le mode = 'conversation' et le type = 'blockcode', alors le message est affiché dans une bulle de bloc de code.
// Si le mode = 'chatbot' et le type = 'blockcode',
// alors le message est affiché dans une bulle de bloc de code.       


// si mode = conversation, nous voulons que des bulles affichées.
// si mode = chatbot, les messages du role 'user' doivent etre des bulles et si le role est 'systeme' ou 'assistant' doit prendre toute la place

// generateur de couleur // 