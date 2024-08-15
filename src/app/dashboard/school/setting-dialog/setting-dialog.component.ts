import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SettingService } from '../../../services/setting.service';
import { Setting } from '../../../models/setting.model';
import { Period } from '../../../models/period.model';

@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.css']
})
export class SettingDialogComponent implements OnInit {

  @Input() showDialog: boolean = false;
  @Input() data: Setting = new Setting(); // Provide default value to avoid null
  @Output() refreshSetting = new EventEmitter<void>();
  @Output() dialogClosed = new EventEmitter<void>();

  periods: number[] = []; // Array to store number of periods (1-15)
  periodDetails: Period[] = []; // Array to store detailed period information
  days: number[] = [];
  showBellTimesDialog: boolean = false;
  showRenameDaysDialog: boolean = false;
  showParametersDialog: boolean = false;
  showCustomFieldDialog: boolean = false;

  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.days = [1, 2, 3, 4, 5, 6, 7];
    this.initializePeriods(); // Initialize periods for dropdown
    this.loadSettings();
  }

  // Initialize periods array with values from 1 to 15
  initializePeriods(): void {
    this.periods = Array.from({ length: 15 }, (_, i) => i + 1);
  }

  loadSettings(): void {
    this.settingService.getSettings().subscribe((settings: Setting[]) => {
      if (settings.length > 0) {
        this.data = settings[0] || new Setting(); // Use the first setting or default
        this.updatePeriodDetails();
      } else {
        this.data = new Setting(); // Default if no settings found
      }
    });
  }

  updatePeriodDetails(): void {
    this.periodDetails = Array.from({ length: this.data.periodsPerDay }, (_, i) => ({
      id: i,
      name: (i + 1).toString(),
      short: (i + 1).toString(),
      start: `${8 + i}:00`,
      end: `${8 + i}:45`,
      length: 45,
      print: true,
      bell: 'All classes'
    }));
  }

  onSubmit() {
    if (this.data.id) {
      this.settingService.updateSetting(this.data.id, this.data).subscribe(() => {
        this.refreshSetting.emit();
        this.close();
      });
    } else {
      this.settingService.addSetting(this.data).subscribe(() => {
        this.refreshSetting.emit();
        this.close();
      });
    }
  }

  close() {
    this.dialogClosed.emit();
    this.showDialog = false;
  }

  openBellTimesDialog() {
    this.showBellTimesDialog = true;
  }

  onBellTimesDialogClosed() {
    this.showBellTimesDialog = false;
  }

  openRenameDaysDialog() {
    this.showRenameDaysDialog = true;
  }

  closeRenameDaysDialog() {
    this.showRenameDaysDialog = false;
  }

  renameDays() {
    this.openRenameDaysDialog();
  }

  parameters() {
    this.showParametersDialog = true;
  }

  closeParametersDialog() {
    this.showParametersDialog = false;
  }

  customField() {
    this.showCustomFieldDialog = true; // Show the custom field dialog
  }

  closeCustomFieldDialog() {
    this.showCustomFieldDialog = false; // Close the custom field dialog
  }}