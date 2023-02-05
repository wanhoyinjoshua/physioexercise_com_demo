import {AfterViewInit, Component,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {ThemePalette} from '@angular/material/core';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
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
  selector: 'app-v0customexercisetable',
  templateUrl: './v0customexercisetable.component.html',
  styleUrls: ['./v0customexercisetable.component.css'],
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
export class V0customexercisetableComponent implements AfterViewInit  {
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

  


  

}
