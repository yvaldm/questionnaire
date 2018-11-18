import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {FinishedComponent} from './finished/finished.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: 'questionnaire',
    redirectTo: 'questionnaire',
    pathMatch: 'full'
  },
  {
    path: 'questionnaire',
    component: AppComponent
  },
  {
    path: 'finished',
    redirectTo: 'finished',
    pathMatch: 'full'
  },
  {
    path: 'finished',
    component: FinishedComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
