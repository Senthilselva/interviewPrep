const Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://getbootstrap.com/css/')
  // // .click('ul li ')
  // // .wait('#main')
  // // .evaluate(function () {
  // //   return document.querySelector('#main .searchCenterMiddle li a').href
  // })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });