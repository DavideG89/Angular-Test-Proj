import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CardComponent } from "src/app/shared/components/card/card.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "../dashboard/pages/home/home.component";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectComponent } from './pages/project.component';
import { ProjectRoutingModule } from "./project-routing.module";


@NgModule({
  declarations: [
    ProjectDashboardComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectFormComponent,
    ProjectComponent,

  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ProjectRoutingModule,


  ],
  exports:[
    ProjectComponent
  ]
})


export class ProjectModule {}
