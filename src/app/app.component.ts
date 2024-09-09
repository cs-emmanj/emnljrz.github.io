import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public yearNow: number = new Date().getFullYear();

  public email = 'emnljrz@gmail.com';
  public location = 'General Santos City, Philippines';

  private readonly technicalSkills = {
    field: 'Technical Skills',
    items: [
      {
        label: 'Core Skills',
        values: [
          'HTML, CSS, JavaScript',
          'Angular',
          '.Net Framework (C#, VB.Net)',
          'Microsoft SQL Server',
          'Git',
        ],
      },
      {
        label: 'Intermediate Skills',
        values: ['Python', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Dart'],
      },
      {
        label: 'Exploring',
        values: ['Rust', 'C++', 'Game Development'],
      },
    ],
  };

  private readonly softSkills = {
    field: 'Soft Skills',
    items: [
      {
        label: 'Team Player',
        values: [],
      },
      {
        label: 'Communication',
        values: [],
      },
      {
        label: 'Leadership and Mentoring',
        values: [],
      },
    ],
  };

  private creativeSkill = {
    field: 'Creative Skills',
    items: [
      { label: 'Photography', values: [] },
      { label: 'Videography', values: [] },
      {
        label: 'Creative Tools',
        values: [
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Adobe Lightroom',
          'Final Cut',
        ],
      },
    ],
  };

  public skills = [this.technicalSkills, this.softSkills, this.creativeSkill];
}
