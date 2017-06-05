import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from './player/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
            path: 'teams',
            component: TeamListComponent
        },
        {
          path: "player",
          component: PlayerListComponent
        },
        {
          path: '',
          component: TeamListComponent
        },
        {
          path: '**',
          component: TeamListComponent
        }

      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
