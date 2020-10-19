import {Component} from '@angular/core';
import {Programme} from './programme/programme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'WebDziekanat';
  public programme1 = new Programme(1);
  public programme2 = new Programme(2);
  public programmes = [this.programme1, this.programme2];
}
