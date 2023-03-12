class DemirBase {
  discount = 20;

  constructor(firstName, lastName, cardExist, items) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cardExist = cardExist;
    this.items = items;
  }
  calculate() {
    let amountToPaid = 0;
    if (this.manipulateItems(this.items)) {
      // Cart is not empty
      if (this.cardExist) {
        // there is DemirCard
        this.items.forEach((item) => {
          amountToPaid += (item.price * (100 - this.discount)) / 100;
        });
      } else {
        // There is no DemirCard
        this.items.forEach((item) => {
          amountToPaid += item.price;
        });
      }
    } else {
      // Cart is empty
      alert("At least must have one item.");
    }
    return amountToPaid;
  }
  manipulateItems(items) {
    if (items != null && items.length > 0) {
      return true;
    }
    return false;
  }
}
