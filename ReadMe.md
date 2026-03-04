<h2>Work In Progress</h2>
This is intended to be an example of Cypress UI automation.  I've used the describe/it formatting for the first time.  I am using the sauce demo site to interact with.  It has limited functionality, so not a lot of tests will be written.  This demonstrates how I would organize a framework

Some items of note:
* I am storing the page objects separately so that if it needs to be updated for any reason, it only needs to be changed in one spot
* The files that I don't have actual tests, I wrote some pseudocode to demonstrate what I would include in automation
* End-to-end testing is very dependent on the application being tested and the testing environment stability.  If it isn't stable, then end-to-end tests may not be the best thing to automate.  If it fails because of timing or things loading, people will tend to ignore failures and just rerun tests until they pass.  When this happens, bugs can be missed and performance issues can get exponentially worse.
   * Because of this and limitations of the page, I didn't include any of these tests
