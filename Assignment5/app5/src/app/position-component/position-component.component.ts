import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/data/position.service';
import { Position } from 'src/app/data/position';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-position',
  templateUrl: './position-component.component.html',
  styleUrls: ['./position-component.component.css']
})
export class PositionComponent implements OnInit {
  
  getPositionsSub: Subscription;
  positions: Position[];
  loadingError = false;

  constructor(private readonly positionService: PositionService) {}

  ngOnInit() {
    this.getPositionsSub = this.positionService
      .getPositions()
      .subscribe(
        employees => (this.positions = employees),
        (error) => (this.loadingError = true)
      );
  }
  ngOnDestroy() {
    if (this.getPositionsSub !== undefined) {
      this.getPositionsSub.unsubscribe();
    }
  }
}
