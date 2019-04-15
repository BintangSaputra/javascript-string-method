const listGymMember = [
  {
    id: 45,
    name: "rudi hartono",
    age: 25,
    occupaton: "teacher",
    phone: "+628123380090"
  },
  {
    id: 12,
    name: "budiman",
    age: 30,
    occupaton: "police",
    phone: "+628123380090"
  },
  {
    id: 26,
    name: "mega dwiani",
    age: 27,
    occupaton: "bank officer",
    phone: "+628123380090"
  },
  {
    id: 56,
    name: "alamanda",
    age: 32,
    occupaton: "entrepreuneur",
    phone: "+628123380090"
  },
  {
    id: 45,
    name: "sulis anggita cahyo",
    age: 35,
    occupaton: "head of bank mandiri",
    phone: "+628123380090"
  }
];

// show list gym member

const showMembers = members => {
  for (let index = 0; index < members.length; index++) {
    const member = members[index];

    console.log(`[${index + 1}] ${member}`);
  }
};

console.log(listGymMember);

console.log();

// fix members name with capital letter

const transformToTitleCase = text => {
  const splittedWords = text.split(" ");

  const upperCaseName = splittedWords
    .map(name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`)
    .join(` `);

  return upperCaseName;
};

console.log(transformToTitleCase("head of bank mandiri"));

// filter names

const filterGymMembers = (names, minimumLength) => {
  let newNames = [];

  for (let index = 0; index < names.length; index++) {
    const member = names[index];

    if (member.name.length >= minimumLength) {
      newNames.push(member);
    }
  }

  return newNames;
};

const filteredGymMembers = filterGymMembers(listGymMember, 12);
console.log(filteredGymMembers);
