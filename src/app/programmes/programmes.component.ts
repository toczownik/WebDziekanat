import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {
  public programme: string;
  public semester: number;

  constructor() { }

  ngOnInit(): void {
  }

  setSemester(newSemester: number): void {
    this.semester = newSemester;
  }

  setProgramme(newProgramme: string): void {
    this.programme = newProgramme;
  }

  changeVisibility(property: string): void {
    if (getComputedStyle(document.documentElement).getPropertyValue(property) === 'none') {
      document.documentElement.style.setProperty(property, 'block');
    } else {
      document.documentElement.style.setProperty(property, 'none');
    }
  }
}
