import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PageSettings} from '../models/page-settings';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @Input() set file(img: any) {
    if (img) {
      this.drewImage(img);
    }
  }

  pageSettings: PageSettings = {bgColor: '', brushColor: '', brushSize: 0};
  @ViewChild('paintCanvas', {static: false})
  canvas!: ElementRef;

  context: any;
  flag = false;
  prevX = 0;
  currX = 0;
  prevY = 0;
  currY = 0;
  dot_flag = false;
  mousePos = {x: 0, y: 0};

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
  }

  constructor() {

  }

  findxy(res: string, e: any) {
    if (res == 'down') {
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.currX = e.clientX - this.canvas.nativeElement.offsetLeft;
      this.currY = e.clientY - this.canvas.nativeElement.offsetTop;

      this.flag = true;
      this.dot_flag = true;
      if (this.dot_flag) {
        this.context.beginPath();
        this.context.fillStyle = this.pageSettings.brushColor;
        this.context.fillRect(this.currX, this.currY, 2, 2);
        this.context.closePath();
        this.dot_flag = false;
      }
    }
    if (res == 'up' || res == 'out') {
      this.flag = false;
    }
    if (res == 'move') {
      if (this.flag) {
        this.prevX = this.currX;
        this.prevY = this.currY;
        this.currX = e.clientX - this.canvas.nativeElement.offsetLeft;
        this.currY = e.clientY - this.canvas.nativeElement.offsetTop;
        this.draw();
      }
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
    }
  }

  draw() {
    this.context.beginPath();
    this.context.moveTo(this.prevX, this.prevY);
    this.context.lineTo(this.currX, this.currY);
    this.context.strokeStyle = this.pageSettings.brushColor;
    this.context.lineWidth = this.pageSettings.brushSize;
    this.context.stroke();
    this.context.closePath();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }


  ngOnInit(): void {
  }

  onSettingsChange(_pageSettings: PageSettings) {
    this.pageSettings = _pageSettings;
  }

  drewImage(img: any) {
    this.clear();
    this.context.drawImage(img, 0, 0);
  }

  getImage() {
    return this.canvas.nativeElement.toDataURL('image/png');
  }

  onFileChange(img: any) {
    this.drewImage(img);
  }

}
