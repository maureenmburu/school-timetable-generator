import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StatisticComponent } from './dashboard/statistic/statistic.component';

import { ClassComponent } from './dashboard/class/class.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { SubjectComponent } from './dashboard/subject/subject.component';

import { ClassAddEditDialogComponent } from './dashboard/class/class-add-edit-dialog/class-add-edit-dialog.component';
import { TeacherAddEditDialogComponent } from './dashboard/teacher/teacher-add-edit-dialog/teacher-add-edit-dialog.component';
import { SubjectAddEditDialogComponent } from './dashboard/subject/subject-add-edit-dialog/subject-add-edit-dialog.component';


import { ExamComponent } from './dashboard/exam/exam.component';
import { ExamEditDialogComponent } from './dashboard/exam/exam-edit-dialog/exam-edit-dialog.component';


import { TimetableComponent } from './dashboard/timetable/timetable.component';

import { ReportsComponent } from './dashboard/reports/reports.component';


import { ActivitiesAddEditDialogComponent } from './dashboard/activities/activities-add-edit-dialog/activities-add-edit-dialog.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { ClassroomComponent } from './dashboard/classroom/classroom.component';

import { RelationsComponent } from './dashboard/relations/relations.component';
import { TimetableTestingComponent } from './dashboard/timetable-testing/timetable-testing.component';
import { VerificationComponent } from './dashboard/verification/verification.component';

import { SchoolComponent } from './dashboard/school/school.component';
import { SettingDialogComponent } from './dashboard/school/setting-dialog/setting-dialog.component';
import { SimpleComponent } from './simple/simple.component';
import { LoginComponent } from './login/login.component';



// Import the component


const routes: Routes = [
  { path: '', component: HomepageComponent }, // Home route
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'simple', component: SimpleComponent },
  
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: StatisticComponent },

      { path: 'school', component: SchoolComponent },
      { path: 'school/setting', component: SettingDialogComponent },
      { path: 'class', component: ClassComponent },
      { path: 'class/add-edit', component: ClassAddEditDialogComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'teacher/add-edit', component: TeacherAddEditDialogComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'subject/add-edit', component: SubjectAddEditDialogComponent },
      { path: 'classroom', component: ClassroomComponent },
     
    
      { path: 'timetable-testing', component: TimetableTestingComponent },
      { path: 'relations', component: RelationsComponent },
      { path: 'timeble', component: TimetableComponent },
      { path: 'verification', component: VerificationComponent },
      { path: 'exam', component: ExamComponent },
      { path: 'exam/add-edit', component: ExamEditDialogComponent },
      { path: 'reports', component: ReportsComponent },
      
      
      { path: 'activities', component: ActivitiesComponent },
      { path: 'activities/add-edit', component:  ActivitiesAddEditDialogComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
