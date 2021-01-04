import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TurnOffAdBlockComponent } from './turn-off-ad-block/turn-off-ad-block.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"turn-off-ad-block", component: TurnOffAdBlockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
