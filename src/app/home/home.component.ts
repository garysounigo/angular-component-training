import { Component } from '@angular/core';

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


  onValue(event: string): void{
    console.log("receive value",event)
  }

}
