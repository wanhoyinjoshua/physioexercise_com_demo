import {AfterViewInit, Component,ViewChild,HostListener } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {ThemePalette} from '@angular/material/core';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component"
import {SettingmodalComponent } from "../settingmodal/settingmodal.component"
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
interface Food {
  value: string;
  viewValue: string;
}

export interface Exerciseentry {
  category: string;
  title: string;
  me:string;
  others:string;
  url:string;
  taim:string;
  caim:string;
  tinstruction:string;
  pinstruction:string
  progression:string;
  precaution:string;


}

const ELEMENT_DATA: Exerciseentry[] = [
  { title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
},
{ title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
},
{ title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
},
{ title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
},
{ title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
},
{ title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
},
{ title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
},
{ title: "Upper limb bicep curls", category: 'Spinal Cord', me: "", others: '',url:"https://www.physiotherapyexercises.com/ExerciseImages/Drawings_Webp/Ex0040_ad_l_pa_lp.webp",
taim:"to strengthen arms",caim:"to be more indepdent" ,tinstruction:"don't let it touch the floor",pinstruction:"do 10 to 30 reps",progression:"lift heavier weights and do it faster",
precaution:"make sure you follow prescriptions"
}

 
 
  

 
];

@Component({
  selector: 'app-review-progress',
  templateUrl: './review-progress.component.html',
  styleUrls: ['./review-progress.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ReviewProgressComponent implements AfterViewInit  {
getScreenWidth:any;
getScreenHeight:any;

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
  const dialogRef = this.dialog.open(SettingmodalComponent, {
  
    width: this.getScreenWidth>600?"50vw":"100vw",
    height:this.getScreenWidth>600?"auto":"auto",
    
    data: {content:"hi",title:"hi"}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
}

  @ViewChild(MatPaginator) paginator: MatPaginator ;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = [
    'select',
    'toggle',
    'title',
    'category',
    'me',
    'others',
    'edit'
  ];
  dataSource = new MatTableDataSource<Exerciseentry>(ELEMENT_DATA);
  selection = new SelectionModel<Exerciseentry>(true, []);
  none={
    none:true
  }
show={
    show:true
  }

  selected={
    selected:true
  }
  unselected={selected:false}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach((s) => console.log(s));
  }

  

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  

}

