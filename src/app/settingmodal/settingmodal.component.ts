import {Input,Component, Inject,HostListener} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-settingmodal',
  templateUrl: './settingmodal.component.html',
  styleUrls: ['./settingmodal.component.css']
})
export class SettingmodalComponent {
  constructor(
    public dialogRef: MatDialogRef<SettingmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
