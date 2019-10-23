const InterWebs = require('./interwebs');
const Spider = require('./spider');

/**
 * We want to crawl the interwebs
 * so first we need the interwebs and a spider
 */

let interwebs = new InterWebs();
let spider = new Spider();

let webs = spider.crawl(interwebs, ['http://beesbeesbees.com']);
webs.forEach(web => {
    console.log(web.stringify());
});