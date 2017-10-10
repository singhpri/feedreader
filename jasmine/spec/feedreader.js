/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        function checkUrl(url) {
            it('is defined', function() {
                expect(url).toBeDefined();
                expect(url).not.toEqual('');
            });
        }

        for (var i = 0; i < allFeeds.length; i++) {
            checkUrl(allFeeds[i].url);
        }


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        function checkName(name) {
            it('is defined', function() {
                expect(name).toBeDefined();
                expect(name).not.toEqual('');
            });
        }

        for (var j = 0; j < allFeeds.length; j++) {
            checkName(allFeeds[j].name);
        }
    });


    /* a new test suite named "The menu" */
    describe('The Menu', function() {

        /* test that ensures the menu element is
         * hidden by default.
         */
        var container = (document.body).classList;
        it("menu-hidden should be default", function() {
            expect(container).toContain('menu-hidden');
        });

        /* test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('adds the class', function() {
            var menu = $('.menu-icon-link');
            menu.click();
            expect(container).not.toContain('menu-hidden');
        });

        it('removes the class', function() {
            var menu = $('.menu-icon-link');
            menu.click();
            expect(container).toContain('menu-hidden');
        });

    });

    /* new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should have at least one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var content;

        beforeEach(function(done) {
            loadFeed(0, function() {
                content = $('.feed').html();
                done();
            });
        });

        it('should not have the same content', function(done) {
            loadFeed(1, function() {
                expect(content).not.toEqual($('.feed').html());
                done();
            });
        });
    });

}());
