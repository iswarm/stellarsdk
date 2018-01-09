// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by stellarsdk.js.
import { name as packageName } from "meteor/alexandreyu:stellarsdk";

// Write your tests here!
// Here is an example.
Tinytest.add('stellarsdk - example', function (test) {
  test.equal(packageName, "stellarsdk");
});
