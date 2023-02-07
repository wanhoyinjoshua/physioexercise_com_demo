import {Input,Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-popupcard',
  templateUrl: './popupcard.component.html',
  template:`
  <h1 class="card__title">{{title}}</h1>

  <p class="card__content">
  {{description}}
  </p>

  <button mat-raised-button (click)="openDialog()">{{buttontext}}</button>

  `,
  styleUrls: ['./popupcard.component.css']
})
export class PopupcardComponent {
  animal: string;
  name: string;
  @Input() title: string|undefined;
  @Input() description: string|undefined;
  @Input() buttontext: string|undefined;
  @Input() linkurl: string|undefined;
  @Input() modal: boolean|undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50vw',
      height:"80vh",
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

