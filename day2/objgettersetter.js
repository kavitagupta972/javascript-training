const person = {
    firstName: 'John',
    lastName: 'Doe',
  
    // Getter
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    // Setter
    set fullName(name) {
      const nameParts = name.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1] || '';
    }
  };
  
  // Using the getter
  console.log(person.fullName); // John Doe
  
  // Using the setter
  person.fullName = 'Jane Smith';
  console.log(person.firstName); // Jane
  console.log(person.lastName); // Smith
  console.log(person.fullName); // Jane Smith
  