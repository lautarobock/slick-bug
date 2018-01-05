import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';

const appRoutes: Routes = [
  { path: 'another', component: AnotherComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false}),
    BrowserModule,
    SlickModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
