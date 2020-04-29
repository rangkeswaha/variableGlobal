import { Component } from '@angular/core';
import { GlobSerService } from './glob-ser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  datadariglob = '';
  datahtml : String;

  constructor (public variabelglobal : GlobSerService){
    this.datadariglob = this.variabelglobal.getData();
  }

  ubahdata(){
    this.variabelglobal.setData(this.datahtml);
    this.datahtml = "";
    this.datadariglob = this.variabelglobal.getData();
  }
}
