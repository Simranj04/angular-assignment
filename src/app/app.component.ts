import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { JobsListComponent } from './Components/jobs-list/jobs-list.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
       JobsListComponent 
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
  constructor(private router: Router){}

  TabSet(tabname: string){
    this.router.navigate([`/${tabname}`]);
  }
}
