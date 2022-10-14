import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-details-display-page',
  templateUrl: './details-display-page.component.html',
  styleUrls: ['./details-display-page.component.css']
})
export class DetailsDisplayPageComponent implements OnInit {
@Input()receiver:any;

  constructor() { }

  ngOnInit(): void {
  }
  showElements: boolean = false;
  showListElements: boolean = false;
}
