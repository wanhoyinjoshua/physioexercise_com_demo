
import { MatRadioChange } from '@angular/material/radio';
import {Input,Component, Inject,HostListener, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component"
import { ActivatedRoute } from "@angular/router";
import {ExercisecollectionmodalComponent} from "../exercisecollectionmodal/exercisecollectionmodal.component"
@Component({
  selector: 'app-exercisecollection',
  templateUrl: './exercisecollection.component.html',
  styleUrls: ['./exercisecollection.component.css']
})
export class ExercisecollectionComponent  implements OnInit{

  constructor(public dialog: MatDialog,private route: ActivatedRoute) {}
  exid:any;
  filteredcollection:any
  ngOnInit() {
    
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.route.params.subscribe(params=>{
     this.exid = params['exid'];
      console.log(this.exid)
      this.filteredcollection= this.posts.filter((post: { title: any; }) => {
        this.match==true
        return post.title.includes( params['exid'])
      })
  })
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;
  console.log(this.getScreenHeight)
  }
  value = ""
  posts:any=[
    {title:"osteoporosis",level:[{level:"1",levelheader:"High Risk-Moderate Impact activities",leveldescrption:`Sanet is a 82 year old women who recently slipped in the bathroom at home and sustained a hip fracture, she also had two previous falls prior to this current fall, she was hospitalised and 
    the fracture was surgically managed, she was now discharged back home with her mobility below baseline. 
    
    She mobilise with a 4WW amnd walks slowly, she also had impaired balance and am quite scared of walking because of the fall. 
    
    The aim of Sanet's program was to encourage movement and minimise bone loss by incoporating moderate to low impact exercises to increase muscle strength and improve balance to maximise functional mobility and improve quality of life.
    
    `,levelimage:"",value:"osteoporosis"},{level:"2",levelheader:"Low risk Moderate-High impact activities",leveldescrption:`Dalia is a 73- year old women and had a history of low trauma Colles' fracture 11 years ago. 
    She  is independent with all ADLS but have trouble balancing at times.

The aim of Dalia's program is to minimise bone loss by incporating moderate impact exercises and improve muscle strength to support mobility and balance to minimise risk of falling.

This program is suitable for people who are independent with short distances walking but may or may not require aids for longer distances.`,levelimage:"",value:"osteoporosismedium"},

{level:"3",levelheader:"High Impact Activities",leveldescrption:`   Frank is independent with all ADLS and had no previous history of fractures.
<br/>
The aim of franks program is to minimise bone loss by incporating high impact exercises and maintaining muscle strength to support mobility and balance for optimal participation in the community 
<br/>
This program is suitable for people who are independent with walking and able to balance on one leg.`,levelimage:"",value:"osteoporosishard"}]}
    ,{title:"c5-injury",level:[{level:"1",levelheader:"1title",leveldescrption:"1description",levelimage:"",value:"osteoporosishard"}]}
  
  
  ]
  match:boolean;
  filteredArray: any=this.posts
  clear(){
    this.value=""
    this.filteredArray = this.posts;
    this.displaydata=null

  }
  getPostByName(event: any) {
    
    let filtered = this.posts.filter((post: { title: any; }) => {
      this.match==true
      return post.title.includes(event.target.value)
    })
    this.filteredArray = filtered
    if (this.filteredArray.length <= 0) {
      this.match==false
      this.filteredArray = [];
    }
  }

  exercise:any =
  {
    osteoporosis:{
      displaytitle:"Osteoporosis Level 1-High Risk-Moderate Impact activities",
      exercises:[
      {title:"Ankle dorsiflexor strengthening in sitting without weights",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0677_xx_x_lp_in_tb_st.webp",clientaim:"To strengthen the muscles at the front of your ankle.",clientinstruction:"Position yourself sitting with your feet together in front of you. Start with your feet flat on the floor. Finish with your toes lifted up. Ensure that you keep your heels on the ground."},
      {title:"Bridging to end of range",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex6151.webp",clientaim:"To strengthen your hip muscles.",clientinstruction:"Position yourself lying on your back with your knees bent. Tighten the muscles in your bottom and lift your bottom off the bed."},
      {title:"Ankle plantarflexor strengthening in sitting without weights",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0676_xx_x_lp_in_tb_st.webp",clientaim:"To strengthen your calf muscles.",clientinstruction:"Position yourself sitting with your knees together. Start with your feet flat on the floor. Finish with your heels lifted off the floor. Ensure that you keep your toes on the floor."},
      {title:"Abdominal strengthening",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex6129.webp",clientaim:"To improve your abdominal strength",clientinstruction:"Position yourself in supine with your knees bent. Gently draw your navel towards your spine."},
      {title:"Stand with narrow base of support",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex1067.webp",clientaim:"To improve your ability to stand and balance.",clientinstruction:"Position yourself standing with your feet together and a stable support nearby. Practice maintaining the position. Ensure that hand support is used only if you feel unsteady."}
    ]},
    osteoporosismedium:{
      displaytitle:"Osteoporosis Level 2- Low risk Moderate-High impact activities",
      exercises:[
      
      {title:"Jump on the spot",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex7044.webp",clientaim:"To improve your ability to jump and balance.",clientinstruction:"Position yourself standing with your feet shoulder width apart and inside a marked box on the floor. Practice jumping up and down landing in the box. Ensure that both feet leave and land on the floor at the same time and your knees bend during landing."},
      {title:"Sit to stand from chair with arms crossed",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex6047.webp",clientaim:"To strengthen the muscles that straighten your legs.",clientinstruction:"Position yourself sitting on a chair with your arms crossed and feet shoulder width apart. Bring your shoulders forwards and stand up. Stick your bottom back and return to sitting.",precautions:"Place the chair against a wall."},
      {title:"Calf strengthening",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex9034.webp",clientaim:"To strengthen your calf, improve your balance and ensure that your ankle and foot are achieving normal range of motion.",clientinstruction:"Stand behind a supporting surface and raise up onto your toes and then lower back down."},
      {title:"Arm raise in 4-point kneeling",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex6030.webp",clientaim:"To strengthen your trunk muscles.",clientinstruction:"Position yourself on your hands and knees. Engage your core muscles. Practice lifting one hand up to reach forward in front of you. Ensure your back does not hollow/arch and your hips do not sway to the side."},
      {title:"Stand on one leg with support",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex1069.webp",clientaim:"To improve your ability to stand on one leg and balance.",clientinstruction:"Position yourself standing on one leg with a stable support nearby. Practice maintaining the position without touching your other foot on the floor. Ensure that hand support is used only if you feel unsteady.",precautions:"1. Ensure that the support is stable."},
  ]},
    osteoporosishard:{
      displaytitle:"Osteoporosis Level 3- High Impact Activities",
     exercises: [
      {title:"Jump in different directions",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0518_ad_x_in_tb_st.webp",clientaim:"To improve your ability to jump in different directions and balance.",clientinstruction:"Position yourself standing next to a cross on the floor. Practice taking a big jump from one box to another while facing forward. Ensure that your feet do not touch the lines and that your knees bend during landing."},
      {title:"Lunges",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex6127.webp",clientaim:"To strengthen the muscles in your thigh.",clientinstruction:"Position yourself in standing with one leg comfortably in front. Ensure that your back knee drops towards the floor and that your front knee does not come beyond your toes."},
      {title:"Crab walk sideways with theraband",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex6045.webp",clientaim:"To strengthen the muscles on the outside of your hips.",clientinstruction:"Position yourself standing with your feet apart and a theraband around your thighs. Practice walking sideways while maintaining tension in the theraband. Ensure that both feet point forwards."},
      {title:"Arm and leg raise in 4-point kneeling",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex6093.webp",clientaim:"To strengthen your trunk muscles.",clientinstruction:"Position yourself in 4-point kneeling. Engage your core muscles. Raise one arm forward while simultaneously lifting the opposite leg straight behind you. Ensure your back does not hollow/arch and your hips do not sway to the side."},
      {title:"Stand on one leg ",img:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex7021.webp",clientaim:"To improve your ability to balance.",clientinstruction:"Position yourself in standing on a firm surface. Lift one leg off the ground and practice balancing on the other leg. Ensure that you look ahead at a fixed spot."},
    
    ]
  }



  }
 
  displaydata:any
  selectedmodule:any;


  radioButtonGroupChange(data:MatRadioChange) {

    this.displaydata=this.exercise[data.value]
    console.log(data.value)
    

 
}
getScreenWidth:any;
getScreenHeight :any





showcollection(name:any){
  console.log(name)
  const dialogRef = this.dialog.open(ExercisecollectionmodalComponent, {
  
    width: this.getScreenWidth>600?"50vw":"100vw",
    height:this.getScreenWidth>600?"auto":"auto",
   
    data: {mobile:this.getScreenWidth>600?false:true,content:this.exercise[name],title:this.filteredcollection}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });



}


  
  

}
