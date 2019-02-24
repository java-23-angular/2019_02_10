import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent implements OnInit {
  @Input('curr') current: ContactModel;
  @Input('indx') index: number = -1;
  private routeIndex: number = -1;
  constructor(private service:ContactService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((value: Params) => {
      this.routeIndex = +value['index'];
    });
  }

  onDeleteClick() {
    if(this.index >= 0 && this.index < this.service.contacts.length){
      if(this.routeIndex == this.index){
        this.router.navigate(['/contacts'],{relativeTo:this.activatedRoute});
      }
      this.service.contacts.splice(this.index,1);

    }
  }
}
