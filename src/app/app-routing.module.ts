import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BookRoomComponent } from './home/bookRoom/bookRoom.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: HomeComponent.URL },
  {
    path: HomeComponent.URL, component: HomeComponent,
    children: [
      // Declaracion de RUTAS
      // { path: TicketsComponent.URL, component: TicketsComponent }, <-- Ejemplo

      { path: BookRoomComponent.URL, component: BookRoomComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static COMPONENTS = [
    // Declaracion de COMPONENTES
    HomeComponent, BookRoomComponent,
  ];

  static DIALOGS_COMPONENTS = [
    // Declaracion de DIALOGOS
  ];
}
