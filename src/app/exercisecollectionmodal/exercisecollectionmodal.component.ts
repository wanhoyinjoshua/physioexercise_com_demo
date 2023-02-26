import {Input,Component, Inject,HostListener} from '@angular/core';
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
export class ExercisecollectionmodalComponent {
  constructor(
    public dialogRef: MatDialogRef<ExercisecollectionmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
