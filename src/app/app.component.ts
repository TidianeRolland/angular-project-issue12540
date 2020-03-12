import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-project-issue12540';

  happyControl = new FormControl(null);
  
  sadControl = new FormControl(null);

  form = new FormGroup({
    happy: this.happyControl,
    sad: this.sadControl,
  });

  ngOnInit(): void {
    this.happyControl.valueChanges
    .subscribe(x => console.log("Happy (" + typeof x + "): " + x));

    this.sadControl.valueChanges
    .subscribe(x => console.log("Sad (" + typeof x + "): " + x));

  }
}
