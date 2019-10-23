class Web {

    /**
     * Builds a new web that may be crawled
     * @param {string} thread 
     * @param {Array} prey 
     * @param {Array} spiral 
     */
    constructor(thread, prey, spiral) {
        this.thread = thread;
        this.prey = prey;
        this.spiral = spiral;
    }

    /**
     * Transforms a web to its component strings
     */
    stringify() {
        return JSON.stringify(this);
    }
}

module.exports = Web;