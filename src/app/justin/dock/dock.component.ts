import { sanitizeIdentifier } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'dock',
  standalone: false,
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})

export class DockComponent {

  // @Input('side') side: string = 'right';
  // direction: string = ((this.side=='top') || (this.side=='bottom')) && 'row' || 'column';
  // justify: string = ((this.side=='bottom') || (this.side=='right')) && 'flex-end' || 'flex-start';
  // containerDirection: string = (this.direction == 'column') && 'row' || 'column';

  // pour bien prendre en charge le changement de vertical 
  // modifier flex pour dock-container, la premier lists, 
  // le :host, et l'élément englobant le dock (ici .home dans justin.component)



  lists: any = {
    listsItems: [
      {
        triggered: false,
        title: 'Dashboard',
        lists: {
          title: 'hello',
          drop: false,
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
        title: 'Inbox',
        lists: {
          title: 'hello',
          drop: false,
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
        title: 'Calendar',
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
      title: 'Settings',
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
        title: 'Vaadin website',
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

  triggeredDrop(index: number){
    this.lists.listsItems[index].lists.drop && this.lists.listsItems.forEach(
      (m:any) => {
        m.lists?.drop && (m.triggered = false)
      }
    );
    this.lists.listsItems[index].triggered = true;
  }



//   malists: any[] = [
//     {title: 'Dashboard'},
//     {title: 'Inbox'},
//     {title: 'Calendar'},
//     {title: 'Settings'},
//     {title: 'Vaadin website'}
//   ];
// }

}

// le 1 : rendre en objet
// le 2 : rajouter un menu déroulant
// le 3 : faire en sorte que quand j'active le menu deroulant, si il ya menu deroulant se ferme