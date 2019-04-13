import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormControl, FormBuilder,  Validators } from '@angular/forms';
import { Employee } from '../index/Employee';
import { EmployeeService } from '../../employee.service';

import { NgZone } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: any = {};
  angForm: FormGroup;
  id: FormControl;
  name: FormControl;
  departmen: FormControl;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeservice: EmployeeService,
    private fb: FormBuilder, private ngZone: NgZone) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             id: ['', Validators.required ],
             name: ['', Validators.required ],
             departmen: ['', Validators.required ]
         });
      }

    updateEmployee(id, name, departmen) {
          this.route.params.subscribe(params => {
                                        this.employeeservice.updateEmployee(id, name, departmen);
                                        this.ngZone.run(() => this.router.navigate(['/']));
                                        //this.router.navigate(['/index']);
                                      });

      /*this.employeeservice.updateEmployee(id, name, departmen).subscribe((data: Employee[]) => {
                                                      this.employees = data;
                                                  });*/
    }

    ngOnInit() {

      /*
      this.angForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      departmen: ['', Validators.required],
    });

      /*this.employeeservice.editEmployee('E01')
      .subscribe( data => {
        this.editForm.setValue(data);
      });*/

      this.route.params.subscribe(params => {
        this.employeeservice.editEmployee(params['id']).subscribe(res => {
          this.employee = res;
      });
    });

    
  }
}
