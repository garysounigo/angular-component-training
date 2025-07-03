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

  @Input() lists: any = {};
  // lists: any = {
  //   listsItems: [
  //     {
  //       triggered: false,
  //       title: 'Tableu intelligent',
  //       lists: {
  //         title: 'hello',
  //         drop: true,
  //         listsItems: [
  //           {
  //             size: '16',
  //             title: 'First element',
  //             subtitle: 'First supporting text'
  //           },
  //           {
  //             size: '16',
  //             title: 'First element',
  //             subtitle: 'First supporting text'
  //           },
  //         ]
  //       },
  //     },
  //     {
  //       triggered: false,
  //       title: 'Flux collaboratif',
  //       lists: {
  //         title: 'hello',
  //         drop: true,
  //         listsItems: [
  //           {
  //             size: '16',
  //             title: 'First element',
  //             subtitle: 'First supporting text',
  //           },
  //           {
  //             size: '16',
  //             title: 'Coucou',
  //             subtitle: 'main',
  //           },
  //         ]
  //       }
  //     },
  //     {
  //       triggered: false,
  //       title: 'Calenddrier projet',
  //       lists: {
  //         title: 'hello',
  //         drop: true,
  //         listsItems: [
  //           {
  //             size: '16',
  //             title: 'First element',
  //             subtitle: 'First supporting text',
  //           },
  //           {
  //             size: '16',
  //             title: 'Coucou',
  //             subtitle: 'main',
  //           }
  //         ]
  //       }
  //     },
  //     {
  //     triggered: false,
  //     title: 'Paramétre IA',
  //     lists: {
  //       title: 'hello',
  //       drop: true,
  //       listsItems: [
  //         {
  //           size: '16',
  //           title: 'First element',
  //           subtitle: 'First supporting text',
  //         },
  //         {
  //           size: '16',
  //           tilte: 'Coucou',
  //           subtitle: 'main',
  //           },
  //         ]
  //       }
  //     },
  //     {
  //       triggered: false,
  //       title: 'A propos de la plateforme',
  //       lists: {
  //         title: 'hello',
  //         drop: true,
  //         listsItems: [
  //           {
  //             size: '16',
  //             title: 'First element',
  //             subtitle: 'First supporting text',
  //           },
  //           {
  //             size: '16',
  //             title: 'Coucou',
  //             subtitle: 'main',
  //           },
  //         ]
  //       }
  //     },
  //   ]
  // };

  clickPos: {x:number;y:number} = {x: 0, y:0};

    //attention quand on clique a l'interieur du padding on recoit un offsetX,Y qui vient de l'elmentent parent a gerer pour le clickPos pour quil ny ai pas de decalage  
  triggeredDrop(event: MouseEvent, index: number){

    this.clickPos = {x: event.offsetX, y: event.offsetY};

    this.lists.listsItems[index].lists.drop && this.lists.listsItems.forEach(
      (m:any) => {
        m.lists?.drop && (m.triggered = false)
      }
    );
    this.lists.listsItems[index].triggered = true;
  }


}
