/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Event = require('../api/event/event.model');
var Volunteer = require('../api/volunteer/volunteer.model');
var Attendee = require('../api/attendee/attendee.model');
var Vendor = require('../api/vendor/vendor.model');


Attendee.collection.dropAllIndexes(function (err, results) {
  if(err){console.log(err);}
  else{console.log("Drop Successfull");}
});
Vendor.collection.dropAllIndexes(function (err, results) {
  if(err){console.log(err);}
  else{console.log("Drop Successfull");}
});
Event.collection.dropAllIndexes(function (err, results) {
  if(err){console.log(err);}
  else{console.log("Drop Successfull");}
});



Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Bradley',
    email: 'bradleymtreuherz@gmail.com',
    password: 'admin'
  },function() {
      console.log('finished populating users');
    }
  );
});

// Seed Events
Event.find({}).remove(function(){
  Event.create({
    title: 'Event 1',
    start: new Date(2016, 11, 17, 2, 30, 0),
    end: new Date(2016, 11, 17, 4, 30, 0), // Note: this is a 2 hour event.
    description: "This event is an event where events will be taking place. This is just an example description to see"
                + " how this will look on the website. Hopefully it looks nice.",
    location: "1234 Made Up St, Doesnt Exist, AL, 12345",
    imgUrl: "http://notarealurl.com"
  },{
    title: 'Event 2',
    start: new Date(2016, 3, 3, 1, 0, 0),
    end: new Date(2016, 3, 3, 4, 0, 0),
    description: "This is another event. The description for this one is a little different. There will also be eventstaking place."
                + " Hopefully it looks nice.",
    location: "A BS Address",
    imgUrl: "http://fakeimage.com"
  },{
    title: 'Event 3',
    start: new Date(2016, 4, 5, 3, 0, 0),
    end: new Date(2016, 5, 5, 6, 0, 0),
    description: "A third event for testing.",
    location: "Another BS Address",
    imgUrl: "http://fakeimageyea.com"
  }, function(){
    console.log('finished populating events.');
  });
});

// Seed attendees
Attendee.find({}).remove(function(){
  Attendee.create({
    email: 'attendee@email.com',
    firstName: 'Eric',
    lastName: 'Foreman',
    phone: 1234456123,
    age: 20
  }, {
    email: 'attendee2@email.com',
    firstName: 'Bob',
    lastName: "Johnson",
    phone: 1234456123,
    age: 21
  }, {
    email: 'attendee3@email.com',
    firstName: 'FirstName',
    lastName: 'lastName',
    phone: 1234456123,
    age: 19
  }, function(){
    console.log('finshed populating attendees.');
  });
})

// Seed volunteers
Volunteer.find({}).remove(function(){
  Volunteer.create({
    _id: 'volunteer1@email.com',
    firstName: 'first',
    lastName: 'firstLast',
    phone: 1234456123
  }, {
    _id: 'volunteer2@email.com',
    firstName: 'first2',
    lastName: 'first2Last',
    phone: 1234456123
  }, {
    _id: 'volunteer3@email.com',
    firstName: 'first3',
    lastName: 'first3Last',
    phone: 1234456123
  }, function(){
    console.log('finshed populating volunteers.');
  });
});

// Seen vendors
Vendor.find({}).remove(function(){
  Vendor.create({
    jobTitle: "Salesman",
    firstName: "Richard",
    lastName: "Hurts",
    email: "Email@email.email",
    phone: 12345678,
    organizationName: "NAME NAME",
    organizationAddress: "1234 this is an address",
    descriptionOfServices: "Were gonna sell stray cats.",
    descriptionOfPrizes: "You can take home a cat"
  });
});
