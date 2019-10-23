const Web = require('./web');

class InterWebs {
    crawlUpThread(thread) {
        let prey = ['oprahbees.jpg'];
        let spiral = ['http://beesbeesbees.com', 'http://beesbeesbees.com'];
        return new Web(thread, prey, spiral);
    }
}

module.exports = InterWebs;