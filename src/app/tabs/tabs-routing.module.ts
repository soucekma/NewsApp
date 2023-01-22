import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'favorites',
        children:
          [
            {
              path:'',
              loadChildren: () => import('../pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
            }
          ]
      },
      {
        path: 'news',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/news/news.module').then(m => m.NewsPageModule)
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
