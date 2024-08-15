import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent implements OnInit{
  activities: Activity[] = [];
  showDialog = false;
  selectedActivity: Activity | null = null;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.activitiesService.getActivities().subscribe((data: Activity[]) => {
      this.activities = data;
    });
  }

  openAddDialog(): void {
    this.selectedActivity = null;
    this.showDialog = true;
  }

  editActivity(activity: Activity): void {
    this.selectedActivity = activity;
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }

  refreshActivities(): void {
    this.loadActivities();
  }

  deleteActivity(id: number): void {
    this.activitiesService.deleteActivity(id).subscribe(() => {
      this.loadActivities();
    });
  }

}
