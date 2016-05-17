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
      menuitemUrl:''
    }, {
      name: 'Овчарска салата',
      price: 5.10,
      active: true,
      kitchen: true,
      category: 'Салати',
      description: 'Краставици, домати, лук, чушка, сирене, кашкавал, яйце, колбас',
      menuitemUrl:''
    }, {
      name: 'Специалитет Бонжур',
      price: 5.10,
      active: true,
      kitchen: true,
      category: 'Основни ястия',
      menuitemUrl:''
    }, {
      name: 'Средногорска скара',
      price: 13.50,
      active: true,
      kitchen: true,
      category: 'Основни ястия',
      menuitemUrl:'http://bonjour-bg.com/wp-content/uploads//2014/09/gallery41_h600.jpg'
    }, {
      name: 'Бутилка вино',
      price: 14,
      active: true,
      kitchen: false,
      category: 'Напитки',
      menuitemUrl:''
    }, {
      name: 'Шампанско',
      price: 12,
      active: true,
      kitchen: false,
      category: 'Напитки',
      menuitemUrl:''
    }, {
      name: 'Фанта',
      price: 1.40,
      active: false,
      kitchen: false,
      category: 'Напитки',
      menuitemUrl:''
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
