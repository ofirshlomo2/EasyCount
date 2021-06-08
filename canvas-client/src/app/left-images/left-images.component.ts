import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CanvasComponent} from '../canvas/canvas.component';
import {CanvasService} from '../services/canvas.service';

@Component({
  selector: 'app-left-images',
  templateUrl: './left-images.component.html',
  styleUrls: ['./left-images.component.css']
})
export class LeftImagesComponent implements OnInit {

  @Input() images: any = [];
  @Output() onSaveCLick = new EventEmitter();
  @Output() onImageCLick = new EventEmitter();

  constructor(private canvasService: CanvasService) {
    this.canvasService.getAllImages().subscribe(images => this.images = images);
  }

  ngOnInit(): void {
  }

  saveImage() {
    this.onSaveCLick.emit();
  }

  deleteAll() {
    this.canvasService.deleteImages().subscribe(image => this.images = image);
  }
}
