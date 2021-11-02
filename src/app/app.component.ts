import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todayDate;
  public persondata = [] as any;

  constructor(private myservice: MyServiceService){}
  ngOnInit(){
    this.todayDate = this.myservice.showTodayDate();

    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
      console.log(this.persondata);
    });
  }

  title = 'Angular Application';
  description = 'Welcome to the angular application page!';
  months = ["Muharram", "Safar", "Rabiul-Awwal"]
  isAvailbale = true;

  simplePipeData = "Data Piping is real";

  firstFeature = {
    heading: "1st feature heading",
    body : "1st feature body"
  }
  secodFeature = {
    heading: "2nd feature heading",
    body : "2nd feature body"
  }
  thirdFeature = {
    heading: "3rd feature heading",
    body : "3rd feature body"
  }
  fourthFeature = {
    heading: "4th feature heading",
    body : "4th feature body"
  }
  
  setTrue() {
    console.log("this is the TRUE btn")
  }

  setFalse() {
    console.log("this is the FALSE btn")
  }
}
