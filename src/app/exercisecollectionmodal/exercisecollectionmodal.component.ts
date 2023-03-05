import {Input,Component, Inject,HostListener, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-exercisecollectionmodal',
  templateUrl: './exercisecollectionmodal.component.html',
  styleUrls: ['./exercisecollectionmodal.component.css']
})
export class ExercisecollectionmodalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ExercisecollectionmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;}
    
  getScreenWidth:any;
  getScreenHeight:any;
  mobile:any;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;
  if(window.innerHeight<=768){
    this.mobile=true

  }
  else{
    this.mobile=false
  }
  console.log(this.mobile)
  }


}
