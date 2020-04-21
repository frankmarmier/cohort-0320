const hbs = require("hbs");

hbs.registerHelper("isSelected", function (value1, value2) {
  console.log(value1, value2);
  if (value1 === value2) {
    return "selected";
  }
});

hbs.registerHelper("compare", function (value1, value2, operator, options) {
  const operators = {
    ">=": function (v1, v2) {
      return v1 >= v2;
    },
    "===": function (v1, v2) {
      return v1 === v2;
    },
    ">": (v1, v2) => v1 > v2,
    "<": (v1, v2) => v1 < v2,
    "<=": (v1, v2) => v1 <= v2,
  };

  // >=
  const operation = operators[operator];
  if (operation(value1, value2)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
