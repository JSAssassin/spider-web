const Web = require('./web');

class InterWebs {
  /**
   * Returns a new web after crawling
   * @param {string} thread 
   */
  crawlUpThread(thread) {
    let prey = ['oprahbees.jpg'];
    let spiral = ['http://beesbeesbees.com', 'http://github.com'];
    return new Web(thread, prey, spiral);
  }
}

module.exports = InterWebs;
