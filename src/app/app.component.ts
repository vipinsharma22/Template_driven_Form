import { Component } from '@angular/core';
import{ NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onSubmit(data){
 console.log(data.firstName);
 var array = [];
 array.push({'FirstName' : data.firstName, 'Lastname': data.lastName,'EmployeeId': data.EmployeeId,'Email' : data.email,'PhoneNumber' : data.phoneNumber,
'Address' : data.Address, 'City' : data.City, 'Pincode' : data.PinCode })
console.log(array);
}

}

