import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/dashboard/pages/home/home.component";
const routes: Routes = [

  { path: 'home', component: HomeComponent },
  {path:'projects',
  loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo:'/home'}


];

@NgModule({
 imports: [ // importerà tutti i moduli all'interno del nostro modulo
   RouterModule.forRoot(routes) // Routermodule, attraverso il metodo forRoot, valuterà le rotte (routes)
 ],
 exports:[ // una volta che viene importato è possibile esportarlo in modo da essere messo a disposizione da altri modules
  RouterModule
 ]
})
export class AppRoutingModule {

}
