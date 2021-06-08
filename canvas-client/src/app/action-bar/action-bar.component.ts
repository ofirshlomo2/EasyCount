import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PageSettings} from '../models/page-settings';


@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  @Output() onSettingsChange = new EventEmitter();
  @Output() onFileChange = new EventEmitter();
  @Output() onClearChange = new EventEmitter();
  pageSettings: PageSettings = {
    brushSize: 0,
    brushColor: '',
    bgColor: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  modelChanged($event: any) {
    this.onSettingsChange.emit(this.pageSettings);
  }


  async onfileChanged(e: any) {
    const file = e.target.files[0];

    const base64Str = await toBase64(file);
    let img: any = new Image;
    img.onload = () => {
      this.onFileChange.emit(img);
    };
    img.src = base64Str;
  }

}

const toBase64 = (file: any) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
