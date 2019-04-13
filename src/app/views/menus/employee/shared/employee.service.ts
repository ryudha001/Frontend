/*import {Injectable} from '@angular/core';
import {Employee} from './employee.model';
import {WsConstant} from '../../../../constants/ws.constant';
import {HttpService} from '../../../../services/core/http.service';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpService) {
  }

  getAll(){
    return this.http.get(WsConstant.getAllEmployee);
  }

  getOne(id: string) {
    return this.http.post(WsConstant.getOneEmployee, {id});
  }*/

  
  /*update(company: Company, file: File = null) {
    const formData = new FormData();
    formData.append('data', JSON.stringify(company));
    formData.append('upload', file ? '1' : '0');
    if (file) {
      formData.append('docTypes[0]', 'PP');
      formData.append('fileContents[0]', file, file.name);
      formData.append('ref', 'COMPANY');
    }
    return this.http.postFormData(WsConstant.updateCompany, formData);
  }*/

 /* delete(id: string) {
    return this.httpService.delete(WsConstant.deleteEmployee, {id});
  }
}*/



/*
save(company: Company, file: File = null) {
    const formData = new FormData();
    formData.append('data', JSON.stringify(company));
    formData.append('upload', file ? '1' : '0');
    if (file) {
      formData.append('docTypes[0]', 'PP');
      formData.append('fileContents[0]', file, file.name);
      formData.append('ref', 'COMPANY');
    }
    return this.http.postFormData(WsConstant.saveCompany, formData);
  }
*/

