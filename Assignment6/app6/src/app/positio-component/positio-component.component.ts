import { Component, OnInit } from '@angular/core';
import{	PositionService } from '../data/position.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-positio-component',
  templateUrl: './positio-component.component.html',
  styleUrls: ['./positio-component.component.css']
})
export class PositioComponent implements OnInit {
	paramSubscription: any;
	positionSubscription: any;
	savePositionSubscription: any;
	position: any;
	successMessage: any;
	failMessage: any;
  
  constructor(private positionservice: PositionService, private activatedroute: ActivatedRoute ) { }


  ngOnInit() {
    this.paramSubscription = this.activatedroute.params.subscribe((par: {_id: string}) => { 
                             this.positionSubscription = this.positionservice.getPosition(par._id)
                             .subscribe(pos => { this.position = pos[0];})
    });  
    }

  onSubmit(f: NgForm): void {
    this.savePositionSubscription = this.positionservice.savePosition(this.position)
                                    .subscribe(()=>{ this.successMessage = true;
                                    setTimeout(()=>{this.successMessage = false;}, 2500)
                                    }, error => {
                                      this.failMessage = true;
                                      setTimeout(()=>{ this.failMessage = false; }, 2500)
                                    },
                                    () => { console.log("Position: saved!") });
  }

  ngonDestroy(): void{
    if(this.paramSubscription){
      this.paramSubscription.unsubscribe();
    }
    if(this.positionservice){
      this.positionSubscription.unsubscribe();
    }
    if(this.savePositionSubscription){
      this.savePositionSubscription.unsubscribe();
    }
  }

}
