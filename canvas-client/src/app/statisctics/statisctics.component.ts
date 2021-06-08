import {Component, Input, OnInit} from '@angular/core';
import {PageSettings} from '../models/page-settings';

@Component({
  selector: 'app-statisctics',
  templateUrl: './statisctics.component.html',
  styleUrls: ['./statisctics.component.css']
})
export class StatiscticsComponent implements OnInit {
  @Input() mousePos: { x: number, y: number } = {x: 0, y: 0};
  @Input() pageSettings: PageSettings = {
    brushSize: 0,
    brushColor: '',
    bgColor: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
