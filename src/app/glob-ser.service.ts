import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private Data : String = 'abc';

  public getData(){
    return this.Data;
  }
  constructor() { }

}