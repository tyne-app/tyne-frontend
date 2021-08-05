import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-business-menus',
  templateUrl: './business-menus.component.html',
  styleUrls: ['./business-menus.component.scss']
})
export class BusinessMenusComponent implements OnInit {

  preventSingleClick = false;
  timer: any;
  delay: Number;
  title = "";
  
  constructor() { }

  ngOnInit() {
  }

  panelOpenState = true;

  accordions = [
    {
      id: 1,
      title: '1',
      isTitleVisible: false,
      products: [{
        name: 'Carne al jugo',
        imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        price: '4500',
        description: 'Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo'
      },
      {
        name: 'item 2',
        description: '',
        content: 'Content of subpanel 02',
      }]
    },
    {
      id: 2,
      title: '2', 
      description: 'simply click, drag & drop one of us around',
      products: [{
        name: 'item 1', 
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
    {
      id: 3,
      title: '3', 
      description: 'You will see, it\'s very easy!',
      products: [{
        name: 'item 1', 
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
    {
      id: 4,
      title: '4', 
      description: 'Try it now, go ahead',
      products: [{
        name: 'item 1', 
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
  ]
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.accordions, event.previousIndex, event.currentIndex);

    for (let index = 0; index < this.accordions.length; index++) {
      this.accordions[index].id = index + 1;
    }

  }

  eliminar(id) {
    this.accordions = this.accordions.filter(x => x.id != id);

    for (let index = 0; index < this.accordions.length; index++) {
      this.accordions[index].id = index + 1;
    }
  }

  addSection() {

    this.accordions.push({
      id: 0,
      title: '63', 
      description: 'you can reorder this list easily',
      products: [{
        name: 'item 1',
        description: 'description',
        content: 'Content of subpanel 01',
      },
      {
        name: 'item 2',
        description: '',
        content: 'Content of subpanel 02',
      }]
    });

    for (let index = 0; index < this.accordions.length; index++) {
      this.accordions[index].id = index + 1;
    }
  }

  algo(id: number) {
    this.accordions.find(x => x.id === id).isTitleVisible = true;
  }

  singleClick(event) {
    this.preventSingleClick = false;
     const delay = 200;
      this.timer = setTimeout(() => {
        if (!this.preventSingleClick) {
        }
      }, delay);
  }

  blurs(id: number) {
    this.accordions.find(x => x.id === id).isTitleVisible = false;
  }

  save(id) {
    this.accordions.find(x => x.id === id).title = this.title;
    this.accordions.find(x => x.id === id).isTitleVisible = false;
    this.title = '';
  }

  handleSpacebar(ev) {
    if (ev.keyCode === 32) {
      ev.stopPropagation();
    }
   }

  algomas() {
    console.log("ssss");
  }
}