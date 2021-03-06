import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  selectedpopup = 0;
  
  constructor(private route:Router) { }

  ngOnInit() {
  }

  selectProcess(id){
    this.route.navigate(["/process/" + id]);
  }

  selectedTab = 0;

  tabs = [
    {
      img:"assets/images/tab1.png",
      head:"Business HR Leader",
      body: `
      <ul>
        <li>Provides strategic leadership and expertise for the business</li>
        <li>Sets HR strategy and governance for all people deliverables on project</li>
        <li>HR deliverable approver and escalation for HR barriers</li>
        <li>Ownership & accountability for HR delivery</li>
        <li>Communicate key implications from business strategy to the HR project team</li>
        <li>Monitor progress and adjust HR functional strategy as needed to optimize performance</li>
        <li>Could be involved in facilitating talent assessment for Macro Org</li>
      </ul>`
    },
    {
      img:"assets/images/tab2.png",
      head:"OD Consultant",
      body:`<ul>
      <li>Facilitates the Org Design Process as an experienced org design expert</li>
      <li>Provides org design tools and templates for the design team</li>
      <li>Advises the transformational approach to minimize business disruption</li>
    </ul>`
    },
    {
      img:"assets/images/tab3.png",
      head:"GHRS Project Manager*",
      body:`<ul>
      <li>Lead assignment of resources and responsibilities to meet HR objectives </li>
      <li>Determine project requirements and timelines for HR work</li>
      <li>Coordinate HR resources and manage work across HR service areas and across functions</li>
      <li>Responsible for day to day execution, reporting and project plan</li>
    </ul>`
    },
    {
      img:"assets/images/tab4.png",
      head:"HR Teams",
      body:
      `<p>Pension & Benefits,  HR Analytics, Talent Acquisition,  Time and  Attendance/Vendor, Employee Relations/Industrial Relations,  Compensation,  Employee Experience  Change Management** , HR CBS,  Mobility,  Payroll  Local HRIS/vendor,  HR Global Data and Systems Updates*</p>
        <p>Executes HR domain expertise in the respective service areas to implement organization design and support employee changes </p>
      <p>* May include partnership with IT</p>
      <p>**Includes partnering with Corporate Affairs on communications</p>`
    }
  ]

}
