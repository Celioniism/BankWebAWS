import { Injectable, NgModule } from "@angular/core";

@NgModule({})
@Injectable()
export class UserLocal {
LoggedIn: boolean;
  public static LoggedIn: boolean;
  public static userId: number;
  constructor(){

  }
  static Logged(){
    localStorage.getItem("userId")
  }
  static getLog(){
      return this.LoggedIn;
  }
}