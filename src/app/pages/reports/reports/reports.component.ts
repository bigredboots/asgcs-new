import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'hubs',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class HubsComponent {
  @ViewChild('flocationsoverview') flocationsoverview: ElementRef;
  @ViewChild('treemapmoreinfo') treemapmoreinfo: ElementRef;

  FLocationsMoreInfo() {
    this.flocationsoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  TreeMapMoreInfo() {
    this.treemapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  ngOnInit(): void {}
}