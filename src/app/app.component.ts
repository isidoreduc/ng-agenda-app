import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  events: Array<any> = [
    {
      time: '08:00',
      subject: 'Breakfast with Simon',
      location: 'Lounge Caffe',
      description: 'Discuss Q3 targets'
    },
    {
      time: '08:30',
      subject: 'Daily Standup Meeting (recurring)',
      location: 'Warsaw Spire Office'
    },
    { time: '09:00', subject: 'Call with HRs' },
    {
      time: '12:00',
      subject: 'Lunch with Timmoty',
      location: 'Canteen',
      description:
        // tslint:disable-next-line: max-line-length
        'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a cab'
    }
  ];

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }

  // event: any = {
  //   time: '08:00',
  //   subject: 'Breakfast with Simon',
  //   location: 'Lounge Caffe',
  //   description: 'Discuss Q3 targets'
  // };
}
