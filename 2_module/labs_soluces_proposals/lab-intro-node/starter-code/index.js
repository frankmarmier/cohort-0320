class SortedList {
  constructor() {
    // When the instance is created, the items will be initialized to an empty array.
    // And the length at 0 aswell.
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item); // .push() method returns the new length of the array.
    // we use it to updated the length property aswell.

    // Same as
    // this.items.push(item)
    // this.length += 1;

    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    //     !0 = true      => error throw
    if (!this.items.length) throw Error("EmptySortedList");
    // Since we sorted the array when we insert the elements, the max
    // value will always be at the end of the array :)
    return this.items[this.items.length - 1];
  }

  min() {
    //   !0 = true       => error thrown.
    if (!this.items.length) throw Error("EmptySortedList");
    // Since we sorted the array after inserting an element,
    // the mine value will be at the first index.
    return this.items[0];
  }

  sum() {
    //  !0 = true      => return 0;
    if (!this.items.length) return 0;
    return this.items.reduce((acc, currentValue) => (acc += currentValue), 0);
  }

  avg() {
    if (!this.items.length) throw Error("EmptySortedList");
    return (
      this.items.reduce((acc, currentValue) => (acc += currentValue), 0) /
      this.items.length
    );
  }
}

module.exports = SortedList;
