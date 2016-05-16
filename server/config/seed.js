/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Menuitem from '../api/menuitem/menuitem.model';

Menuitem.find({}).remove()
  .then(() => {
    Menuitem.create({
      name: 'Шопска салата',
      price: 3.50,
      active: true,
      kitchen: true,
      category: 'Салати',
      description: 'Краставици, домати, лук, чушка, сирене',
      imgUrl:''
    }, {
      name: 'Овчарска салата',
      price: 5.10,
      active: true,
      kitchen: true,
      category: 'Салати',
      description: 'Краставици, домати, лук, чушка, сирене, кашкавал, яйце, колбас',
      imgUrl:''
    }, {
      name: 'Специалитет Бонжур',
      price: 5.10,
      active: true,
      kitchen: true,
      category: 'Основни ястия',
      imgUrl:''
    }, {
      name: 'Средногорска скара',
      price: 13.50,
      active: true,
      kitchen: true,
      category: 'Основни ястия',
      imgUrl:''
    }, {
      name: 'Бутилка вино',
      price: 14,
      active: true,
      kitchen: false,
      category: 'Напитки',
      imgUrl:''
    }, {
      name: 'Шампанско',
      price: 12,
      active: true,
      kitchen: false,
      category: 'Напитки',
      imgUrl:''
    }, {
      name: 'Фанта',
      price: 1.40,
      active: false,
      kitchen: false,
      category: 'Напитки',
      imgUrl:''
    })
    .then(() => {
      console.log('finished populating menuitems');
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
