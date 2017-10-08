# Project Overview

This is the final project for frontend-nanodegree. It is a web-based application that reads RSS feeds.
I am using Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Installation
Clone git repository to run the application.
Open js/index.html in a browser.

### My part

1. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Wrote a new test suite named `"The menu"`.
4. Wrote a test that ensures the menu element is hidden by default.
5. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. It tests two expectations: does the menu display when clicked and does it hide when clicked again.
6. Wrote a test suite named `"Initial Entries"`.
7. Wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Wrote a test suite named `"New Feed Selection"`.
9. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
10. Implement error handling for undefined variables and out-of-bound array access.
