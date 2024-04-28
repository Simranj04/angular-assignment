import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Logic } from '../../logic.service';



export interface JobData {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isSelectedFav: boolean
} 

@Component({
  selector: 'app-fav-jobs',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './fav-job.component.html',
  styleUrl: './fav-job.component.css'
})
export class FavJobComponent implements OnInit {
  noPreferredJob: string | undefined;
  isPreferred: boolean = false;

  constructor(private dataService: Logic,
    private router: Router){}
    preferredJobList: JobData[] = [];

 ngOnInit(): void {
    if(this.dataService.preferredJob.length !== 0) {
      this.isPreferred = true;
      this.preferredJobList = this.dataService.preferredJob;
    } else {
      this.isPreferred = false;
      this.noPreferredJob = 'No favorite selected'
    }
  }

  jobDetail(selectedJob: JobData) {
    this.dataService.SelectedJob = selectedJob;
    this.router.navigate(['/jobDetails']);
  }
}
