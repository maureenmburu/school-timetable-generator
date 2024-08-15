import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Property to manage dropdown states
  // dropdowns: { [key: string]: boolean } = {
  //   userRoles: true,
  //   timetable: false,
  //   classes: false,
  //   subjects: false,
  //   teachers: false
  // };

  // // Method to toggle dropdowns
  // toggleDropdown(menu: string) {
  //   this.dropdowns[menu] = !this.dropdowns[menu];
  // }
  showLogoutModal = false;
  constructor(private router: Router) {}
  openLogoutModal(): void {
    this.showLogoutModal = true;
  }

  closeLogoutModal(): void {
    this.showLogoutModal = false;
  }

  logout(): void {
    // Implement your logout logic here
    console.log('User logged out');
    this.closeLogoutModal();

    // Navigate to the homepage
    this.router.navigate(['/']);

    // Close the modal
    this.closeLogoutModal();
  }


  public areaChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10000, 20000, 15000, 25000, 30000, 35000],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4
      }
    ]
  };

  public areaChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  // Bar chart data
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5000, 10000, 7500, 12500, 15000, 17500],
        backgroundColor: '#007bff'
      }
    ]
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };
}
