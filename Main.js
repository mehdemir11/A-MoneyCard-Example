let message = `
Welcome to the Demir.
Do you have DemirCard?
1 - Yes
2 - No
`;
const items = [
  {
    title: "Milk",
    price: 15,
  },
  {
    title: "Bread",
    price: 4,
  },
  {
    title: "A bottle of water",
    price: 4,
  },
];

// boolean
let result = confirm(message);
let amountToPaid;
if (result) {
  // there is DemirCard
  let firstName = prompt("May I have your first name?");
  let lastName = prompt("May I have your last name?");

  const client = new Client(firstName, lastName, result, items);
  let amountToPaid = client.calculate();

  alert(`Client Infos : ${firstName} ${lastName}
  Amount to be paid : ${amountToPaid}`);
} else {
  // there is not DemirCard
  const client = new Client(null, null, result, items);
  alert(`Amount to be paid : $(amountToPaid)`);
}
