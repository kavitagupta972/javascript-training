// Combined Program Demonstrating Object Concepts

// a. Working with Object Literals
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    start() {
      console.log(`${this.brand} ${this.model} is starting...`);
    }
  };
  console.log("Object Literal:");
  console.log(car.brand); // Toyota
  car.start(); // Toyota Corolla is starting...
  
  // b. Creating Object with Object.create
  const person = {
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const student = Object.create(person);
  student.name = "John";
  student.age = 25;
  console.log("\nObject.create:");
  student.greet(); // Hello, my name is John.
  
  // c. Using JavaScript Object Descriptors
  const book = {};
  Object.defineProperty(book, "title", {
    value: "JavaScript Guide",
    writable: false,
    enumerable: true,
    configurable: false
  });
  
  console.log("\nObject Descriptor:");
  console.log(book.title); // JavaScript Guide
  book.title = "New Guide"; // This won't change the value
  console.log(book.title); // JavaScript Guide
  
  for (let key in book) {
    console.log("Enumerable property:", key); // title
  }
  
  // d. Using Getter and Setters
  const employee = {
    firstName: "Jane",
    lastName: "Doe",
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  console.log("\nGetter and Setter:");
  console.log(employee.fullName); // Jane Doe
  employee.fullName = "John Smith";
  console.log(employee.fullName); // John Smith
  
  // e. Working with Writable, Enumerable, and Configurable
  const user = {};
  Object.defineProperty(user, "name", {
    value: "Alice",
    writable: true,
    enumerable: true,
    configurable: true
  });
  
  console.log("\nWritable, Enumerable, Configurable:");
  console.log(user.name); // Alice
  user.name = "Bob"; // Changing the value
  console.log(user.name); // Bob
  
  for (let key in user) {
    console.log("Enumerable property:", key); // name
  }
  
  delete user.name;
  console.log(user.name); // undefined
  