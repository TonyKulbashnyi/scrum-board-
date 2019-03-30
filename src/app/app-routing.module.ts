import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableBodyComponent } from "./components/table-body/table-body.component";
import { AuthenticationComponent} from "./components/authentication/authentication.component";

const routes: Routes = [
  {path: 'table-body', component: TableBodyComponent},
  {path: '', component: AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
