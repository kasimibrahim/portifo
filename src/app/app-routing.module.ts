import { ProjectsComponent } from './components/main/projects/projects.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { EducationComponent } from './components/main/education/education.component';
import { SkillsComponent } from './components/main/skills/skills.component';
import { HomeComponent } from './components/main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/main/about/about.component';

const routes: Routes = [
  //{path: '**', redirectTo: 'home'},
  //{path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'education',component: EducationComponent},
  {path: 'experience',component: ExperienceComponent},
  {path: 'projects',component: ProjectsComponent},
  { path: '**', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
