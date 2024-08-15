import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { Setting } from '../../models/setting.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  settingData: Setting[] = [];
  showSettingDialog: boolean = false;
  selectedSetting: Setting = this.initializeSetting(); // Initialize with default Setting object

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
    this.refreshSettings();
  }

  openSettingDialog(): void {
    this.selectedSetting = this.initializeSetting(); // Reset to default for new entries
    console.log('Opening dialog with data:', this.selectedSetting); // Debugging statement
    this.showSettingDialog = true;
  }

  editSetting(setting: Setting): void {
    this.selectedSetting = { ...setting };
    console.log('Editing setting with data:', this.selectedSetting); // Debugging statement
    this.showSettingDialog = true;
  }

  deleteSetting(id: number | undefined): void {
    if (id !== undefined) {
      this.settingService.deleteSetting(id).subscribe(() => this.refreshSettings());
    } else {
      console.error('Error: Attempted to delete a setting without an ID.');
    }
  }

  refreshSettings(): void {
    this.settingService.getSettings().subscribe(data => {
      this.settingData = data;
    });
  }

  closeSettingDialog(): void {
    this.showSettingDialog = false;
    this.refreshSettings();
  }

  // Initialize a default Setting object
  private initializeSetting(): Setting {
    return {
      id: undefined, // You can set this to a default value if needed
      schoolName: '',
      academicYear: '2024/2025',
      registrationName: '',
      periodsPerDay: 7,
      zeroPeriods: false,
      allowZeroPeriodLessons: false,
      numberOfDays: 5,
      weekend: 'Saturday - Sunday',
      multiTerm: false
    };
  }
}