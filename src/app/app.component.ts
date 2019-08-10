import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { HttpClient } from '@angular/common/http';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'RegisterForFinancialAlert';

  user: User;
  response: any;
  customerId: string  = "Enter CustomerId";
  contactNumber: string  = "Enter ContactNumber";
  emailId: string  = "Enter Email Id";


  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole("Got the service!");

    this.user = new User();
    //this.user.name = 'Tarun';
    //this.user.designation = 'Software Engineer';
    //this.user.address = '9 Commercial Road';
    //this.user.phone = [
     // '1234'
    //];
  }
    /*
    ngOnInit() {
     let  obs = this.http.get('https://api.github.com/users/koushikkothagal');
     obs.subscribe((response) => console.log(response));
    } */

    submit() {

      this.http.get('https://api.github.com/users/' + this.customerId).subscribe((response) =>
      {
        this.response = response;
        console.log(this.response);
      })

      console.log(this.customerId);
      console.log(this.contactNumber);
      console.log(this.emailId);

    }
  }
