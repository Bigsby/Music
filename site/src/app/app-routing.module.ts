import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "theory",
    loadChildren: "./theory/theory.module#TheoryModule"
  },
  { path: "",
    redirectTo: "theory",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = []
