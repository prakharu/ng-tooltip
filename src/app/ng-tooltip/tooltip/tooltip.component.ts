import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngtt-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @ViewChild('medTooltipContainer', { read: ViewContainerRef }) medTooltipContainer: ViewContainerRef;
  @ViewChild('defaultTooltipTemplate') defaultTooltipTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
