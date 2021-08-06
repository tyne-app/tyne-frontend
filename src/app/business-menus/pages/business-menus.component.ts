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
        id: 1,
        name: 'Carne al jugo',
        imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
        price: '4500',
        description: 'Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo'
      },
      {
        id: 2,
        name: 'item 2',
        description: '',
        imageUrl: '',
        price: '4500',
      }]
    },
    {
      id: 2,
      title: '2',
      isTitleVisible: false,
      products: [{
        id: 1,
        name: 'item 1',
        description: 'description',
        imageUrl: '',
        price: '4500',
      }]
    },
    {
      id: 3,
      title: '3',
      isTitleVisible: false,
      products: [{
        id: 1,
        name: 'item 1',
        description: 'description',
        imageUrl: '',
        price: '4500',
      }]
    },
    {
      id: 4,
      title: '4',
      isTitleVisible: false,
      products: [{
        id: 1,
        name: 'item 1',
        description: 'description',
        imageUrl: '',
        price: '4500',
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
      title: 'Nueva Sección',
      isTitleVisible: false,
      products: [{
        id: 1,
        name: 'item 1',
        description: 'Ingresa una descripción',
        imageUrl: '../../../../../assets/alternate-photo.png',
        price: '0'
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

  deleteProduct(seccionId: number, productId: number) {
    const section = this.accordions.find(x => x.id === seccionId)

    if (section) {
      section.products = section.products.filter(x => x.id != productId);

      if (section.products.length === 0) {
        this.accordions = this.accordions.filter(x => x.id != seccionId);
      }
    }
  }

  addProduct(seccionId: number) {
    const section = this.accordions.find(x => x.id === seccionId)
    section.products.push({
      id: 1,
      name: 'item 1',
      description: 'Ingresa una descripción',
      imageUrl: '../../../../../assets/alternate-photo.png',
      price: '0'
    });

    for (let index = 0; index < section.products.length; index++) {
      section.products[index].id = index + 1;
    }
  }
}