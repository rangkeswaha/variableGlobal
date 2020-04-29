import { Component } from '@angular/core';
import { GlobSerService } from './glob-ser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  // datadariglob = '';
  // datahtml : String;


  datadariglob : any;
  dno : '';
  ddes : '';
  datatambah : any;
  datatemp : any;

  constructor (public variabelglobal : GlobSerService){
    this.datadariglob = this.variabelglobal.getData();
    this.datatemp = this.datadariglob;
    console.log(this.datadariglob);
  }

  save(){
    this.datatambah = {
      no : this.dno,
      isid : this.ddes
    }
    this.datatemp.push(this.datatambah);
    this.variabelglobal.setData(this.datatemp);
    this.datadariglob = this.variabelglobal.getData();
  }

  // ubahdata(){
  //   this.variabelglobal.setData(this.datahtml);
  //   this.datahtml = "";
  //   this.datadariglob = this.variabelglobal.getData();
  // }
}
