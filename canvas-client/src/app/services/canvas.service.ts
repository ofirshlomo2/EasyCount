import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  basrUrl = `http://localhost:5000`;

  constructor(private http: HttpClient) {
  }

  saveImage(base64: string) {
    return this.http.post(`${this.basrUrl}/images`, {data: base64});
  }

  deleteImages() {
    return this.http.delete(`${this.basrUrl}/images`);
  }

  getAllImages() {
    return this.http.get(`${this.basrUrl}/images`);
  }
}
