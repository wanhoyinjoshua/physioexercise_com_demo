import {Input,Component, Inject,HostListener} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component"
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
  @Input() modalcontent:any;
  public getScreenWidth: any;
  public getScreenHeight: any;
  
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log(this.getScreenHeight)
  }
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
    
      width: this.getScreenWidth>600?"50vw":"100vw",
      height:this.getScreenWidth>600?"auto":"auto",
      
      data: {content:this.modalcontent,title:this.title}
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

