#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";

//console.log(faker.lorem.sentences())

console.log(faker.name.findName())
return;
//console.log(faker.address)
for(var i=0;i<=5;i++)
{
console.log(faker.department.engineering())
console.log(faker.department.semester())
console.log(faker.department.section());
console.log("\n");
}
/* faker.locale = "uk";

console.log(faker.helpers.contextualCard()); */