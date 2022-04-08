const listOfNames = [
  { name: "mohammad", family: "sorooshfar" },
  { name: "ali", family: "irani" },
  { name: "akbar", family: "mohammadi" },
  { name: "amir", family: "nasiri" },
];

let listOfFamily = listOfNames.map((item) => {
  return {
    fullname: `${item.name} ${item.family}`,
  };
});

console.log(listOfFamily);
