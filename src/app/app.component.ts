import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-project-issue12540';

  firstControl = new FormControl(null);

  fixedControl = new FormControl(null);

  form = new FormGroup({
    first: this.firstControl,
    fix: this.fixedControl,
  });

  ngOnInit(): void {
    this.firstControl.valueChanges
    .subscribe(x => console.log(" (" + typeof x + "): " + x));

    this.fixedControl.valueChanges
    .subscribe(x => console.log(" (" + typeof x + "): " + x));

  }
}
