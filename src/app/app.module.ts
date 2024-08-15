import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StatisticComponent } from './dashboard/statistic/statistic.component';
import { ClassComponent } from './dashboard/class/class.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { SubjectComponent } from './dashboard/subject/subject.component';
import { SubjectAddEditDialogComponent } from './dashboard/subject/subject-add-edit-dialog/subject-add-edit-dialog.component';
import { ClassAddEditDialogComponent } from './dashboard/class/class-add-edit-dialog/class-add-edit-dialog.component';
import { TeacherAddEditDialogComponent } from './dashboard/teacher/teacher-add-edit-dialog/teacher-add-edit-dialog.component';
import { ExamComponent } from './dashboard/exam/exam.component';
import { ExamEditDialogComponent } from './dashboard/exam/exam-edit-dialog/exam-edit-dialog.component';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { ReportsComponent } from './dashboard/reports/reports.component';

import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { ActivitiesAddEditDialogComponent } from './dashboard/activities/activities-add-edit-dialog/activities-add-edit-dialog.component';
import { CustomFieldDialog2Component } from './dashboard/class/class-add-edit-dialog/custom-field-dialog2/custom-field-dialog2.component';
import { ChangeTeacherComponent } from './dashboard/class/class-add-edit-dialog/change-teacher/change-teacher.component';
import { ClassroomComponent } from './dashboard/classroom/classroom.component';
import { ClassroomAddEditDialogComponent } from './dashboard/classroom/classroom-add-edit-dialog/classroom-add-edit-dialog.component';
import { CustomFieldDialog3Component } from './dashboard/classroom/classroom-add-edit-dialog/custom-field-dialog3/custom-field-dialog3.component';
import { CustomFieldDialog4Component } from './dashboard/teacher/teacher-add-edit-dialog/custom-field-dialog4/custom-field-dialog4.component';
import { RelationsComponent } from './dashboard/relations/relations.component';
import { SubjectDialog1Component } from './dashboard/relations/subject-dialog1/subject-dialog1.component';
import { ClassDialog1Component } from './dashboard/relations/class-dialog1/class-dialog1.component';
import { SetClassroomsDialogComponent } from './dashboard/subject/subject-add-edit-dialog/set-classrooms-dialog/set-classrooms-dialog.component';
import { AddDialog2Component } from './dashboard/class/class-add-edit-dialog/custom-field-dialog2/add-dialog2/add-dialog2.component';
import { RenameDialog2Component } from './dashboard/class/class-add-edit-dialog/custom-field-dialog2/rename-dialog2/rename-dialog2.component';
import { CustomAddComponent } from './dashboard/classroom/classroom-add-edit-dialog/custom-field-dialog3/custom-add/custom-add.component';
import { CustomfieldComponent } from './dashboard/subject/subject-add-edit-dialog/customfield/customfield.component';
import { AddComponent } from './dashboard/subject/subject-add-edit-dialog/customfield/add/add.component';
import { AddcustomComponent } from './dashboard/teacher/teacher-add-edit-dialog/custom-field-dialog4/addcustom/addcustom.component';
import { ChangeClassroomComponent } from './dashboard/teacher/teacher-add-edit-dialog/change-classroom/change-classroom.component';
import { TimetableTestingComponent } from './dashboard/timetable-testing/timetable-testing.component';
import { ProgressBarComponent } from './dashboard/timetable-testing/progress-bar/progress-bar.component';
import { TabsComponent } from './dashboard/timetable-testing/tabs/tabs.component';
import { VerificationComponent } from './dashboard/verification/verification.component';

import { SchoolComponent } from './dashboard/school/school.component';
import { SettingDialogComponent } from './dashboard/school/setting-dialog/setting-dialog.component';
import { SimpleComponent } from './simple/simple.component';
import { RenamePeriodsComponent } from './dashboard/school/setting-dialog/rename-periods/rename-periods.component';
import { BreakComponent } from './dashboard/school/setting-dialog/rename-periods/break/break.component';
import { RenameDaysComponent } from './dashboard/school/setting-dialog/rename-days/rename-days.component';
import { EditDaysComponent } from './dashboard/school/setting-dialog/rename-days/edit-days/edit-days.component';
import { DeleteDaysComponent } from './dashboard/school/setting-dialog/rename-days/delete-days/delete-days.component';
import { CombineDaysComponent } from './dashboard/school/setting-dialog/rename-days/combine-days/combine-days.component';
import { ParameterComponent } from './dashboard/school/setting-dialog/parameter/parameter.component';
import { CustomsComponent } from './dashboard/school/setting-dialog/customs/customs.component';
import { Add1Component } from './dashboard/school/setting-dialog/customs/add1/add1.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    DashboardComponent,
    LoginComponent,
    StatisticComponent,
    ClassComponent,
    TeacherComponent,
    SubjectComponent,
    SubjectAddEditDialogComponent,
    ClassAddEditDialogComponent,
    TeacherAddEditDialogComponent,
   
   
    ExamComponent,
    ExamEditDialogComponent,
    TimetableComponent,
    ReportsComponent,
  
    ActivitiesComponent,
    ActivitiesAddEditDialogComponent,
    CustomFieldDialog2Component,
    ChangeTeacherComponent,
    ClassroomComponent,
    ClassroomAddEditDialogComponent,
    CustomFieldDialog3Component,
    CustomFieldDialog4Component,
    RelationsComponent,
    SubjectDialog1Component,
    ClassDialog1Component,
    SetClassroomsDialogComponent,
    AddDialog2Component,
    RenameDialog2Component,
    CustomAddComponent,
    CustomfieldComponent,
    AddComponent,
    AddcustomComponent,
    ChangeClassroomComponent,
    TimetableTestingComponent,
    ProgressBarComponent,
    TabsComponent,
    VerificationComponent,
   
    SchoolComponent,
    SettingDialogComponent,
    SimpleComponent,
    RenamePeriodsComponent,
    BreakComponent,
    RenameDaysComponent,
    EditDaysComponent,
    DeleteDaysComponent,
    CombineDaysComponent,
    ParameterComponent,
    CustomsComponent,
    Add1Component,
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faClock);
  }
}
