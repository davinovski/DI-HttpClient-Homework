import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexElementsComponent } from './index-elements/index-elements.component';


const routes: Routes = [
  {path: '', component: IndexElementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
