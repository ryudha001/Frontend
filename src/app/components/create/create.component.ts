import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router, private ngZone: NgZone, private employeeservice: EmployeeService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required ],
      name: ['', Validators.required ],
      departmen: ['', Validators.required ]
   });
  }

  addEmployee(id, name, departmen) {
    this.employeeservice.addEmployee(id, name, departmen);
    this.ngZone.run(() => this.router.navigate(['/']));
  }

  ngOnInit() {
  }

}
