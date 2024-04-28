import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Logic } from '../../logic.service';



export interface JobDetailsData {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  location: string,
  industries: string,
  types: string,
  description: string,
  publishDate: string
}

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {
  constructor(private dataService: Logic,
    private router: Router){}
  http = inject(HttpClient)
  detailsOfJob!: JobDetailsData;

  backClick() {
  this.router.navigate(['/listJobs']);
}

  ngOnInit(): void {
    const ListId = this.dataService.SelectedJob.id;
    this.featchJobDetails(ListId);
  }

    featchJobDetails(id: number) {
    const url = `${'/jobs'}/${id}`;
     this.http.get<JobDetailsData>(url).subscribe((respdata => {
      this.detailsOfJob = respdata;
    }))
  }

}
