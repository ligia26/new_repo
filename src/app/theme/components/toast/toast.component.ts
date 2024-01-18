import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Output() disposeEvent = new EventEmitter();

  @Input()
  type: 'success' | 'error' | 'warning' | 'info';

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  hidden: boolean;

  private ngUnsubscribe = new Subject<void>();

  visible = false;
  private routeSub: any;  // subscription to route observer
  hideErrorPopup=false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.visible = true;

    console.log('tipul erorii', this.type);
    console.log('autohide', this.hidden)

    if(this.type !== 'success'){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.ngUnsubscribe)
    ).subscribe((event: NavigationEnd) => {
      console.log('s-a schimbat ruta', event);
      // Hide the error pop-up when a route change is detected
      this.hide();
    });
    }

    
  }

  hide() {
    this.visible = false;
    this.disposeEvent.emit();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
