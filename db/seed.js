const Item = require("../models/index");

// Always start by deleting everything
Item.remove({}).then(function() {
  // Then create "seed" items
  Item.create({
    name: "Wash the dishes",
    description: "put the dirty dishes in the dishwasher",
    status: "Incomplete",
    priority: 1
  });

  Item.create({
    name: "Walk the dog",
    description:
      "Walk Sadie for at least 1 mile, then take her to the dog park if she still has a lot of energy!",
    status: "Incomplete",
    priority: 2
  });

  Item.create({
    name: "Finish homework",
    description: "???",
    status: "Complete",
    priority: 3
  });
});
