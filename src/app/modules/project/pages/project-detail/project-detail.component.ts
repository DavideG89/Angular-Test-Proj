import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { Project } from 'src/app/models/Projects';
import { ProjectService } from '../../../../services/project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
//  @Input() project!: Project; //@input serve per  il componente padre a comunicare la proprietà ad altri componenti figli. all'esterno
project$!: Observable<Project>;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
  // const id =  this.activatedRoute.snapshot.paramMap.get('id');
  //   this.projectService.get(+id!).subscribe(data => console.log(data))
 this.project$ = this.activatedRoute.paramMap.pipe(
    switchMap((params: ParamMap) => this.projectService.get(+params.get('id')!))
  )
  }
  //

}
