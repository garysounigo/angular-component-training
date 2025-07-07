import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

interface Link {
  label: string;
  href: string;
}

interface LinkList {
  heading: string;
  links: Link[];
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
        title: 'Comment créer un bot IA',
        lists: {
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'Renommer',
              subtitle: 'modifier le titre'
            },
            {
              size: '16',
              title: 'Supprimer',
              subtitle: 'supprimer votre conversation'
            },
          ]
        },
      },
      {
        triggered: false,
        title: 'Faire une tarte',
        lists: {
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'Renommer',
              subtitle: 'modifier le titre',
            },
            {
              size: '16',
              title: 'Supprimer',
              subtitle: 'supprimer votre conversation',
            },
          ]
        }
      },
      {
        triggered: false,
        title: 'Créer un jeux en C#',
        lists: {
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'Renommer',
              subtitle: 'modifier le titre',
            },
            {
              size: '16',
              title: 'Supprimer',
              subtitle: 'supprimer votre conversation',
            }
          ]
        }
      },
      {
      triggered: false,
      title: 'Ligne de commande de git',
      lists: {
        drop: true,
        listsItems: [
          {
            size: '16',
            title: 'Renommer',
            subtitle: 'modifier le titre',
          },
          {
            size: '16',
            title: 'Supprimer',
            subtitle: 'supprimer votre conversation',
            },
          ]
        }
      },
      {
        triggered: false,
        title: 'Comment faire une bases de donnée',
        lists: {
          drop: true,
          listsItems: [
            {
              size: '16',
              title: 'Renommer',
              subtitle: 'modifier le titre',
            },
            {
              size: '16',
              title: 'Supprimer',
              subtitle: 'supprimer votre conversation',
            },
          ]
        }
      },
    ]
  };


  // conversation: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  conversation: ChatMessage[] = [
    {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: 'Comment peut-on créer un bot basé sur l’intelligence artificielle ?',
      },
      meta: {
        send: 'true',
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    },
    {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: 'Créer un bot IA commence par définir clairement son objectif : répondre à des questions, automatiser des tâches, ou interagir avec des utilisateurs. Ensuite, il faut choisir une technologie adaptée comme les modèles de langage (ex. : GPT, Rasa, Dialogflow). On entraîne ensuite le bot avec des données pertinentes (textes, scénarios, intentions), on le connecte à une interface (site web, app, messagerie), et enfin, on le teste et améliore continuellement en fonction des retours utilisateurs.',
      },
      meta: {
        send: 'false',
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    },
    {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: 'Un bot simple suit des règles prédéfinies, comme des réponses fixes à des mots-clés. Un bot IA, lui, comprend le langage naturel, apprend à partir des interactions, et peut adapter ses réponses selon le contexte grâce à des modèles d’apprentissage automatique.',
      },
      meta: {
        send: 'false',
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    },
    {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: 'Faut-il savoir programmer pour créer un bot IA ?',
      },
      meta: {
        send: 'true',
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    },
    {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: 'Pas forcément. Il existe des plateformes sans code comme Chatfuel, Landbot ou Dialogflow qui permettent de créer un bot IA de base. Cependant, pour un bot plus avancé ou personnalisé, des connaissances en Python, en NLP (traitement du langage naturel) et en API sont très utiles.',
      },
      meta: {
        send: 'false',
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    },
    {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: 'Quelles données sont nécessaires pour entraîner un bot IA ?',
      },
      meta: {
        send: 'true',
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    },
    {
      mode: "conversation",
      type: "message",
      message: {
        role: "user",
        content: 'Un bot IA a besoin de données textuelles comme des exemples de questions/réponses, des dialogues réels, ou des intentions utilisateurs. Plus les données sont variées et bien structurées, plus le bot pourra comprendre et répondre avec pertinence.',
      },
      meta: {
        send: 'false',
        receive: "false",
        sender: "user",
        receiver: "assistant",
        generator: "openai"
      }
    },
  ]
  
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

    // this.c.push(newMessage);
    // this.conversation.next(this.c)

  }

  onLabelValue(event: string): void{
    this.send = event;
  }



  linkLists: LinkList[] = [
    {
      heading: 'Projet IA',
      links: [
        {
          label: 'UI Conception',
          href: '/julien',
        },
        {
          label: 'UX Conception',
          href: '/justin',
        },
        {
          label: 'Wireframing Structure',
          href: '/julien',
        },
        {
          label: 'Diagramming Représentation',
          href: '/julien',
        },
        {
          label: 'Brainstorming Idéation',
          href: '/justin',
        },
        {
          label: 'Online whiteboard',
          href: '/julien',
        },
        {
          label: 'Online Tableau',
          href: '/justin',
        },
      ]
    },
    {
      heading: 'Explore',
      links: [
        {
          label: 'Design Conception',
          href: '',
        },
        {
          label: 'Prototyping Maquettage ',
          href: '',
        },
        {
          label: 'Développement Évolution',
          href: '',
        },
        {
          label: 'Features Fonctionnalités ',
          href: '',
        },
        {
          label: 'Design Systèmes',
          href: '',
        },
        {
          label: 'Collaboration Fonctionnalités',
          href: '',
        },
        // {
        //   label: 'figjam Outil',
        //   href: '',
        // },
      ]
    },
  ];
}
