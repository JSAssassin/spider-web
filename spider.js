class Spider {

    /**
     * To allow for parallelized crawling
     * since most computers have 8 cores
     * we want our spider to crawl with each leg in parallel
     * @param {number} legs 
     */
    constructor(legs = 8) {
        if (legs > 8) {
            throw 'spiders don\'t have more than 8 legs';
        }
        this.legs = legs;
    }

    /**
     * Crawl the interwebs by following a given thread
     * @param {InterWebs} interwebs 
     * @param {string} threads 
     */
    crawl(interwebs, threads) {
        let webs = [];

        for (let i = 0; i < threads.length; i++) {
            const thread = threads[i];
            webs.push(interwebs.crawlUpThread(thread));
        }

        return webs;
    }

}

module.exports = Spider;