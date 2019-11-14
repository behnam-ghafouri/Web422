import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from './position';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../helper';
@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private readonly http: HttpClient) {}
  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${baseUrl}positions`);
  }
}
