interface Person {
  firstName: string;
  lastName: string;
}

function sayHello(p: Person): string {
  return `Heellooooo ${p.firstName}!`;
}

const alan: Person = {
  firstName: 'Alan',
  lastName: 'Turing',
}

console.log(sayHello(alan));