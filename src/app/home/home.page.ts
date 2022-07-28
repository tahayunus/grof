import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parse } from 'parse';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  result: string
  constructor() {
    Parse.serverURL = environment.serverUrl;
    Parse.initialize(environment.appId, environment.javascriptKey);
  }
  ngOnInit() {
    let install = new Parse.Installation();

    install.save(null, {
      success: (install) => {
        // Execute any logic that should take place after the object is saved.
        this.result = 'New object created with objectId: ' + install.id;
      },
      error: (install, error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        this.result = ('Failed to create new object, with error code:' + error.message.toString());
      }
    });
  }
}
