import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  loader = true;
 

  developerSkills = [
    { title: 'Python', description: 'Experience with Python programming language', category: 'Languages & Databases', level: 98 },
    { title: 'JavaScript & TypeScript', description: 'Frontend web development skills', category: 'Languages & Databases', level: 95 },
    { title: 'React', description: 'Frontend development with React library', category: 'Frameworks & Libraries', level: 90 },
    { title: 'Git & GitHub', description: 'Version control with Git and GitHub', category: 'Tools', level: 90 },
    { title: 'C++', description: 'Languages & Databases', category: '', level: 88 },
    { title: 'Java', description: 'Experience with Java programming language', category: 'Languages & Databases', level: 80 },
    { title: 'MySQL', description: 'Database skills with MySQL', category: 'Languages & Databases', level: 70 },
    { title: 'Flutter & Dart', description: '', category: 'Frameworks & Libraries', level: 70 },
    { title: 'Angular', description: 'Experience with Angular framework', category: 'Frameworks & Libraries', level: 60 },
    { title: 'React Native', description: '', category: 'Frameworks & Libraries', level: 75 },  
   
  ];

  softSkills=[
    { title: 'Problem Solver', description: 'Innovative & Critical thinker', category: 'Soft Skills', level: 5 },
    { title: 'Communication', description: 'Effective communication skills', category: 'Soft Skills', level: 4 },
    { title: 'Organisation and team work', description: 'well organized and collaborative', category: 'Soft Skills', level: 3 },
    { title: 'Resilience', description: 'Resilience in facing challenges', category: 'Soft Skills', level: 4 },
    { title: 'Hardworking', description: 'Hardworking and dedicated', category: 'Soft Skills', level: 5 },
  ]

  // Categorize skills in the component
  categorizedSkills: { name: string, skills: any[] }[] = [];

  constructor() {}

  ngOnInit(): void {
    // Categorize skills based on category property
    

    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }
}
