if (typeof module !== 'undefined') {
    var assert = require('assert'),
        //ssinon = require('sinon'),
        faker = require('../index');
}

describe("departments.js" , function() {

  describe("engineering()" , function() {
      it("returns random value from departments.engineering array", function() {
          var engineering = faker.departments.engineering();
          assert.ok(faker.definitions.departments.engineering.indexOf(engineering) !== -1);
      });
  });

  describe("semester(max, fixedValue)", function() {

    it("should use the default amounts when not passing arguments", function() {
        var semester = faker.departments.semester();
        assert.ok(semester.split(" ").length === 1);
    });

    /*

    it("should return only one value if we specify a maximum of one", function() {
        sinon.spy(faker.random, 'arrayElement');

        var department = faker.commerce.department(1);

        assert.strictEqual(department.split(" ").length, 1);
        assert.ok(faker.random.arrayElement.calledOnce);

        faker.random.arrayElement.restore();
    });

    it("should return the maxiumum value if we specify the fixed value", function() {
        sinon.spy(faker.random, 'arrayElement');

        var department = faker.commerce.department(5, true);

        console.log(department);

        // account for the separator
        assert.strictEqual(department.split(" ").length, 6);
        // Sometimes it will generate duplicates that aren't used in the final string,
        // so we check if arrayElement has been called exactly or more than 5 times
        assert.ok(faker.random.arrayElement.callCount >= 5);

        faker.random.arrayElement.restore();
    });
    */
  });



  describe("division()" , function() {
      it("returns random value from departments.division array", function() {
          var division = faker.departments.division();
          assert.ok(faker.definitions.departments.division.indexOf(division) !== -1);
      });
  });

describe("head()" , function() {
      it("returns random value from departments.head array", function() {
          var head = faker.departments.head();
          assert.ok(faker.definitions.departments.division.indexOf(head) !== -1);
      });
  });
});
