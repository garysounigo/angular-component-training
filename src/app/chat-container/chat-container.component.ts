import { Component, Input, ViewChild, ElementRef, AfterViewChecked , OnChanges, SimpleChanges} from '@angular/core';
// import { Observable, of} from 'rxjs';
// import { tap, delay } from 'rxjs/operators';


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
  selector: 'chat-container',
  standalone: false,
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.css'
})
export class ChatContainerComponent implements OnChanges, AfterViewChecked {

  // private _conversation: Observable<ChatMessage[]> = of([]);
  
  // @Input() 
  // set conversation(c:Observable<ChatMessage[]>){
  //   this._conversation = c;
  // }

  // get conversation(): Observable<ChatMessage[]> {
  //   return this._conversation;
  // };

    private _conversation: ChatMessage[] = [];
  
  @Input() 
  set conversation(c:ChatMessage[]){
    this._conversation = c;
  }

  get conversation(): ChatMessage[] {
    return this._conversation;
  };


  @ViewChild('shell') shell!: ElementRef<HTMLDivElement>;
  private shouldScroll = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['conversation']) {
      this.shouldScroll = true;
    }
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom(this.shell.nativeElement);
      this.shouldScroll = false;
    }
  }

  scrollToBottom(el: HTMLElement): void{
    setTimeout(() => {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  // constructor(){
  //   this.conversation.pipe(
  //     delay(10000),
  //     tap(() => {this.scrollToBottom(this.shell.nativeElement)})
  //   );
  }

  // [
  //   {
  //     mode: "conversation",
  //     type: "message",
  //     message: {
  //       role: "user",
  //       content: "Explique moi brivement ce qu'est HTML ?" 
  //     },
  //     meta: {
  //       send: "true",
  //       receive: "false",
  //       sender: "user",
  //       receiver: "assistant",
  //       generator: "openai"
  //     }
  //   },
  //   {
  //     mode: "chatbot",
  //     type: "block",
  //     message: { role: "assistant", content: "HTML (HyperText Markup Language) est le langage essentiel du web, servant à structurer le contenu des pages grâce à des balises qui définissent des éléments tels que les titres, paragraphes, listes, images et liens, permettant ainsi aux navigateurs d'afficher le contenu de manière organisée." },
  //     meta: { send: "false", receive: "true", sender: "assistant", receiver: "user", generator: "openai" }
  //   },
  //   {
  //     mode: "conversation",
  //     type: "message",
  //     message: { role: "user", content: "Fais de meme pour le CSS" },
  //     meta: { send: "true", receive: "false", sender: "user", receiver: "assistant", generator: "openai" }
  //   },
  //   {
  //     mode: "chatbot",
  //     type: "block",
  //     message: { role: "assistant", content: "CSS (Cascading Style Sheets) est le langage utilisé pour décrire la présentation des documents HTML. Il permet de contrôler l'apparence des éléments sur une page web, y compris la mise en page, les couleurs, les polices et les espacements. CSS fonctionne en appliquant des règles de style aux éléments HTML, ce qui permet de séparer le contenu de la présentation." },
  //     meta: { send: "true", receive: "false", sender: "assistant", receiver: "user", generator: "openai" }
  //   },
  //   {
  //     mode: "conversation",
  //     type: "message",
  //     message: { role: "assistant", content: "Maintenant explique moi comment les deux communiquent ensemble" },
  //     meta: { send: "true", receive: "false", sender: "assistant", receiver: "user", generator: "openai" }
  //   },
  //   {
  //     mode: "chatbot",
  //     type: "block",
  //     message: { role: "assistant", content: "HTML établit la structure et le contenu sémantique d'une page web, agissant comme son squelette, tandis que CSS est le langage qui habille ce squelette, définissant le style visuel et la mise en page des éléments HTML, communiquant en sélectionnant des balises, des classes ou des identifiants dans le HTML pour leur appliquer des règles de style spécifiques, séparant ainsi la présentation du contenu pour une meilleure maintenabilité et flexibilité du design." },
  //     meta: { send: "false", receive: "true", sender: "assistant", receiver: "user", generator: "openai" }
  //   },
  // ];
