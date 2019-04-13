import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from '../../employee.service';
import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employees: Employee[];

  constructor(private route: ActivatedRoute,
    private router: Router, private ngZone: NgZone, private employeeservice: EmployeeService) { }

  deleteEmployee(id) {
   this.employeeservice.deleteEmployee(id).subscribe(res => {
   console.log('Deleted');
    });
   this.ngZone.run(() => this.router.navigate(['/']));
  }

  ngOnInit() {
    this.employeeservice
      .getEmployee().subscribe((data: Employee[]) => {
                this.employees = data;
    });
  }
}



