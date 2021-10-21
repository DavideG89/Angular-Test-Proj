import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError, retry, tap} from 'rxjs/operators';
import { Project } from '../models/Projects';
import { LogService } from './log.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

// public projects: Project [] = []
// private projectSubject = new BehaviorSubject<Project[]>(this.projects);
// public project$ = this.projectSubject.asObservable();

constructor(private httpClient: HttpClient, private logService: LogService) { }


getAll(): Observable<Project[]> {// torna direttamente l'array dei nostri progetti
  return this.httpClient.get<Project[]>('http://localhost:3000/projects')
  .pipe(
  tap((data) => this.logService.log(`get All Eseguito ${data}`)),
  retry(3), // da la possibilità di ripetere la chiamata
  catchError(this.handleError)
  );

}
add(project: Project): Observable<Project>{ // aggiunge un nuovo progetto di tipo project
const addproject = {
  ...project,
  code: Math.random().toString(36).replace('0.','').substring(2,9),
  done: false,
  tasks: []
};
  return this.httpClient.post<Project>('http://localhost:3000/projects',addproject)
  .pipe(
  tap((data) => this.logService.log(`get All Eseguito ${data}`)),
  catchError(this.handleError)
  );
// this.projects.push(project);
// this.projectSubject.next(this.projects.slice());
// this.logService.log('add Eseguito')
}

get(id:number): Observable<Project>{ // ritorniamo un singolo progetto attraverso il metodo find
  //identifica l'id a seconda dell'id che passeremo lui troverà il corrispondente.
  // return this.projects.find(project => project.id === id) as Project;
  return this.httpClient.get<Project>(`http://localhost:3000/projects/${id}`).pipe(
    tap((data)=> this.logService.log(`get Eseguito ${data }`)),
    catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error('An error ocurred', error.error.message);
  } else{
    // console.error(
    //   `backend returned code ${error.status},` +
    //   `body was ${error.error}`);
    }
    return throwError(
      'Something bad happenend, try againg'
    );
  }
};


