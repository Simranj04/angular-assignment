import { Routes } from '@angular/router';
import { JobsListComponent } from './Components/jobs-list/jobs-list.component';

import { JobDetailsComponent } from './Components/job-details/job-details.component';
import { FavJobComponent } from './Components/fav-job/fav-job.component';

export const routes: Routes = [

    {path: "", component: JobsListComponent},
    {path: "listJobs", component: JobsListComponent},
    {path: "favJob", component: FavJobComponent},
    {path: "jobDetails", component: JobDetailsComponent}
];
