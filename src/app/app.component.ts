import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public yearNow: number = new Date().getFullYear();

  public email = 'emnljrz@outlook.com';
  public location = 'General Santos City, Philippines';
  public linkedin = 'https://www.linkedin.com/in/emnljrz';
  public blink = false;

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

  public works = [
    {
      position: 'Software Engineer II',
      company: 'Cloudstaff Inc.',
      startDate: 'February 2022',
      endDate: 'Present',
      location: 'Angeles City, Pampanga, Philippines',
    },
    {
      position: 'Lead Programmer',
      company: 'TSP Marine Industries',
      startDate: 'September 2015',
      endDate: 'February 2022',
      location: 'General Santos City, Philippines',
    },
    {
      position: 'Web Developer, Multimedia Editor, Photographer, Videographer',
      company: 'Freelance',
      startDate: 'November 2013',
      endDate: 'September 2015',
      location: 'General Santos City, Philippines',
    },
    {
      position: 'Junior Web Developer',
      company: 'ZDH Consulting',
      startDate: 'June 2013',
      endDate: 'November 2013',
      location: 'General Santos City, Philippines',
    },
    {
      position: 'SEO & Lead Generation',
      company: 'Callbox Sales & Marketing',
      startDate: 'November 2012',
      endDate: 'February 2013',
      location: 'Davao City, Philippines',
    },
  ];

  public educations = [
    {
      degree: 'Master in Information Technology',
      school: 'Notre Dame of Dadiangas University, Graduate School',
      startDate: 'June 2019',
      endDate: 'May 2023',
      location: 'General Santos City, Philippines',
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'STI College of General Santos City',
      startDate: 'June 2009',
      endDate: 'March 2013',
      location: 'General Santos City, Philippines',
    },
  ];

  public ngOnInit(): void {
    setInterval(() => {
      this.blink = !this.blink;
    }, 600);
  }
}
