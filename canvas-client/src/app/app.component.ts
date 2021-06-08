import {Component, ViewChild} from '@angular/core';
import {CanvasComponent} from './canvas/canvas.component';
import {CanvasService} from './services/canvas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CanvasComponent) canvas: CanvasComponent | undefined;
  images: any = [];

  constructor(private canvasService: CanvasService) {
    this.canvasService.getAllImages().subscribe(images => this.images = images);
  }

  ngOnInit(): void {
  }

  onSaveImage(e: any) {
    const img = this.canvas?.getImage();
    this.canvasService.saveImage(img).subscribe((images: any) => {
      this.images = images;
    });
  }

  onImageCLick(base64: string) {
    let img: any = new Image;
    img.onload = () => {
      this.canvas?.drewImage(img);
    };
    img.src = base64;

  }
}
