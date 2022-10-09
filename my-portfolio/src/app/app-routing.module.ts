import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent, pathMatch: 'full'},
  {path: 'main', component:MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
