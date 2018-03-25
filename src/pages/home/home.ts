import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: ArrayBuffer;

  constructor(public navCtrl: NavController,private apiService: ApiServiceProvider) {

  }

  ionViewDidLoad(){
    //this.createDemoUser();
    this.readUsers();
    //this.updateDemoUser();
    //this.deleteDemoUser();
    
  }
  createDemoUser(){
    this.apiService.post("users",{username:"test",email:"test@outlock.com",password:"anotherhash"}).subscribe(result=>{
      console.log("got this as a response of creating a new user",result);
    });
  }

  readUsers(){
    this.apiService.get("users").subscribe((result)=>{
      console.log("got this from  api",result);
      this.users =  result;
    });
  }

  updateDemoUser() {
    this.apiService.put("users/2",{username:"updateduser"}).subscribe(result=>{
      console.log("got this as a response while updating the user",result);
    });
  }

  deleteDemoUser(){
    this.apiService.delete("users/2").subscribe(result=>{
      console.log("got this as a response while deleting the user",result);
    })
  }
}
