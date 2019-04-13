import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Employee } from './components/index/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  addEmployee(id, name, departmen) {
    const obj = {
      id: id,
      name: name,
      departmen: departmen
    };
    this.http.post(`${this.uri}/create`, obj)
        .subscribe(res => console.log('Done'));
  }

  getEmployee() {
    return this.http.get(`${this.uri}`);
  }

  editEmployee(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
  }

  updateEmployee(id, name, departmen) {

    const obj = {
      id: id,
      name: name,
      departmen: departmen
    };

    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(res => console.log('Done'));
  }

  deleteEmployee(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
