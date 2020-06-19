import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu = [];

  public menu0 = [
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    }
  ];

  public menu1 = [//Customers
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline'
    },
    {
      "title": 'Perfil',
      "url": '/customers',
      "icon": 'clipboard-outline'
    },
    {
      "title": 'Checkin',
      "url": '/checkin',
      "icon": 'qr-code-outline'
    },
    {
      "title": 'Cardapio',
      "url": '/tcardapio',
      "icon": 'reader-outline'
    },
    {
      "title": 'Pedidos',
      "url": '/tpedido',
      "icon": 'cart-outline'
    },
    {
      "title": 'Cartoes',
      "url": '/creditcards-list',
      "icon": 'card-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    },
    {
      "title": 'Avaliar APP',
      "url": '/tavaliar',
      "icon": 'thumbs-up-outline'
    },
    {
      "title": 'Termos',
      "url": '/ttermos',
      "icon": 'create-outline'
    }
  ];

  public menu2 = [//companies
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline',
    },
    {
      "title": 'Quiosque',
      "url": '/companies',
      "icon": 'business-outline'
    },
    {
      "title": 'Grupo de Produtos',
      "url": '/products-categories-list',
      "icon": 'albums-outline'
    },
    {
      "title": 'Produtos',
      "url": '/products-list',
      "icon": 'gift-outline'
    },
    {
      "title": 'Cardapio',
      "url": '/qcardapios',
      "icon": 'book-outline'
    },
    {
      "title": 'Entregadores',
      "url": '/qentregadores',
      "icon": 'walk-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    }
  ];

  public menu3 = [
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    }
  ];

  public menuD = [
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    }
  ];

  constructor() { }

  setMenu(menu){

    switch(menu){

      case "0"://admin
        this.menu = this.menu0;
      break;

      case "1"://customers
        this.menu = this.menu1;
      break;

      case "2"://companies
        this.menu = this.menu2;
      break;

      case "3"://workers
        this.menu = this.menu3;
      break;

      default:
        this.menu = this.menuD;
      break;

    }

  }

}
