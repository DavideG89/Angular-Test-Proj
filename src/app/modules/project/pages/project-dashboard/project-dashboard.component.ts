import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/Projects';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {
//  subscribe!: Subscription; // oggetto di tipo subscription

  //una volta che selectProject viene passato creiamo una property di classe chiamandola selctedProject
   // lo renderemo di tipo project, inseriamo l'operatore non null cioè !: perchè typescript vede che non è inizializzato

  // projects: Project[] = [];
  projects$!: Observable<Project[]>;

  // constructor(private logService: LogService) { // indichiamo un parametro di tipo private, il cui nome è logService.
  //   //Angular utilizzerà il tipo della classe, come identificatore di quale sia il servizio di ignettare all'interno di LogService.
  //   // logService sarà uno delle proprietà di classe che conterrà l'istanza  ignettata da Angular attraverso la Dependency Inj..
  //   this.logService.log('Costruiamo una Service')

  // }
  constructor( private projectService: ProjectService,  private router: Router){}
// Router consente la navigazione all'interno del nosro progetto
  ngOnInit(): void {
    // this.subscribe = this.projectService.getAll().subscribe(data => { // inseriamo la sottoscrizione
    //   this.projects = data;});
     this.projects$ = this.projectService.getAll();
  }

  selectProject(project: Project){// passare il progetto dell'iterazione n.10
      // console.log(project);
      // this.selectedProject = project;
      //
      // this.subscribe = this.projectService.get(project.id).subscribe(data => {
      //   this.selectedProject = data;
      // })
    this.router.navigate(['/projects', 'detail', project.id]);
  };
  submitProject(project: Project){ // passare la property #f , dichirando che è any, quindi qualsiasi valore
    this.projectService.add(project).subscribe(data => this.projects$ = this.projectService.getAll() );
    // this.projectService.add(project)
    // this.projects.push({
    //   ...project,
    //   id: this.projects.length,
    //   code: Math.random().toString(36).replace('0.','').substring(2,9),
    //   done:false,
    //   tasks:[],
    // });
  }
  // ngOnDestroy(){ // questo metodo viene utilizzato per la desottoscrizione della subscription, quando verrà distrutto


  // }
}
