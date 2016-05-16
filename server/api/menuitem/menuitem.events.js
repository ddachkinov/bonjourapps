/**
 * Menuitem model events
 */

'use strict';

import {EventEmitter} from 'events';
import Menuitem from './menuitem.model';
var MenuitemEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MenuitemEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Menuitem.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MenuitemEvents.emit(event + ':' + doc._id, doc);
    MenuitemEvents.emit(event, doc);
  }
}

export default MenuitemEvents;
