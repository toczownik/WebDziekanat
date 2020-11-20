import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {
  public programme = 'Robotics';
  public semester: number;
  public hasChosen = false;

  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--records-visibility', 'none');
    document.documentElement.style.setProperty('--general-visibility', 'none');
  }

  setSemester(newSemester: number): void {
    this.semester = newSemester;
    if (!this.hasChosen) {
      this.hasChosen = true;
    }
  }

  setProgramme(newProgramme: string): void {
    this.programme = newProgramme;
  }

  changeVisibility(property: string): void {
    if (getComputedStyle(document.documentElement).getPropertyValue(property) === 'none') {
      document.documentElement.style.setProperty(property, 'grid');
    } else {
      document.documentElement.style.setProperty(property, 'none');
    }
  }
}
