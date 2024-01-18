import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  isCallUsed = false;
  isExtraCallUsed = false;
  isBackCallUsed=false;


  @Input() pageTitleOne: string;
  @Input() routeTitleOne: string;

  @Input() pageTitleTwo: string;
  @Input() routeTitleTwo: string;

  @Input() pageTitleThree: string;
  @Input() routeTitleThree: string;

  @Input() buttonBackRoute: string;

  @Input() buttonAddRoute: string;

  @Input() buttonCallName: string;
  @Output() buttonCall = new EventEmitter<void>();

  @Input() buttonExtraName: string;
  @Output() buttonExtraCall = new EventEmitter<void>();

  @Input() buttonBackName: string;
  @Output() buttonBackCall = new EventEmitter<void>();

  handleCall() {
    this.buttonCall.emit();
  }

  handleExtraCall() {
    this.buttonExtraCall.emit();
  }

  handleBackCall() {
    this.buttonBackCall.emit();
  }


  ngOnInit() {
    this.isBackCallUsed = this.buttonBackCall.observed;
    this.isCallUsed = this.buttonCall.observed;
    this.isExtraCallUsed = this.buttonExtraCall.observed;
  }


}
