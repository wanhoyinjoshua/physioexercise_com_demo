import { Component, Input } from '@angular/core';
export interface Modal{
  icontext: String,
  title: String,
  description: String,
  linkurl:String
  

}
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css'],
  template: "<p>Hello, {{name}}!</p>",
})

export class MaincontentComponent {
  @Input() name: string|undefined;
  
  list: Modal[] = [
    {icontext: "build", title: "Create Custom Exercise",description:"Add your own custom exercises to this software",linkurl:"/shit"}, 
    {icontext: "supervised_user_circle", title: "Access Exercise made by others",description:"Review Exercises made by other physiotherapists via a code",linkurl:"/shit2"},
    {icontext: "supervisor_account", title: "Share custom exercises with others",description:"Share your custom exercises with other physiotherapists",linkurl:"/shit2"},
    {icontext: "lock_open", title: "Physiotherapists Viewing your exercises",description:"Manage access to your custom exercises",linkurl:"/shit2"},
    {icontext: "settings", title: "Need more flexibility?",description:"Create your own exercise booklet layout, customise to suit your organisation's needs.",linkurl:"/shit2"},
  
  
  ]

  settingmodalcontent: Modal[] = [
    {icontext: "contact_phone", title: "Manage Contact Details",description:"",linkurl:"/shit"}, 
    {icontext: "face", title: "Customize Avatar",description:"",linkurl:"/shit2"}
  
  ]
  
}
