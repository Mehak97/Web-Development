import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.css']
})
export class CalendarDemoComponent implements OnInit {

  constructor() { }

      date6: Date;
      date5: Date;
      //rangeDates: Date[];
      
      es: any;
  
      ngOnInit() {
        this.es = {
          firstDayOfWeek: 1,
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
          monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
          monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      };
          
          let today = new Date();
          let month = today.getMonth();
          let year = today.getFullYear();
          let prevMonth = (month === 0) ? 11 : month -1;
          let prevYear = (prevMonth === 11) ? year - 1 : year;
          let nextMonth = (month === 11) ? 0 : month + 1;
          let nextYear = (nextMonth === 0) ? year + 1 : year;
      }
}
