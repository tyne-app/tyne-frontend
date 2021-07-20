import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    // Must add domsanitizer.
    this.matIconRegistry.addSvgIcon(
      'pan',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../../../assets/pan_icon.svg')
    );
  }

  ngOnInit() {
  }

}
