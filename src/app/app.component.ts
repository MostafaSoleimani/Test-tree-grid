import { Component, VERSION } from '@angular/core';
import {
  INgmExpansion,
  INgmTreeGridConfig,
  NgmDataSource,
} from 'ngm-tree-grid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource = new NgmDataSource();
  getChildrenFn = (obj: any) => obj.nodes ?? [];
  treeGridConfig: INgmTreeGridConfig = {
    hasSearch: true,
    columns: [
      {
        header: 'Title: ',
        width: 50,
      },
      {
        header: 'New Title ',
        width: 50,
      },
    ],
    searchFn: (item, text: string) =>
      item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
  };
  data = [
    {
      id: 1,
      name: 'Mostafa',
      nodes: [
        {
          id: 2,
          name: 'Soleimani',
        },
        {
          id: 3,
          name: 'ngm',
        },
        {
          id: 4,
          name: 'tree',
          nodes: [
            {
              id: 5,
              name: 'grid',
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'test',
      nodes: [
        {
          id: 8,
          name: 'just for test',
        },
      ],
    },
  ];
  ngOnInit() {
    this.dataSource.data = this.data;
    this.dataSource.getChildrenFn = (obj: any) => obj.nodes ?? [];
  }
  onExpand(e: INgmExpansion) {
    console.log('expand:   ', e);
  }
  onCollapse(e: INgmExpansion) {
    console.log('collapse:   ', e);
  }
}
