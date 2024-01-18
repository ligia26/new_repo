import {Component, Input} from '@angular/core';
import {Reservation} from "../../../../shared/_models/reservation.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() reservation: Reservation;

}
