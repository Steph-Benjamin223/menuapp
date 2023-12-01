class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `${this.type} is named ${this.name}`;
  }
}

class Barn {
  constructor(name) {
    this.name = name;
    this.animals = [];
  }
}

addAnimal(animal) {
  if (animal instanceof Animal) {
    this.animals.push(animal);
  } else {
    throw new Error(`You can only add an instance of Animal. Argument is not a animal: ${animal}`);
  }
}

describe() {
  return `${this.name} has ${this.animals.length} animals`;
}

class Menu {
  constructor() {
    this.barns = [];
    this.selectedBarn = null;
  }

  start() {    
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createBarn();
          break;
        case '2':
          this.viewBarn();
          break;
        case '3':
          this.deleteBarn();
          break;
        case '4':
          this.displayBarns();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();

      alert('Goodbye!');
    }

    showMainMenuOptions() { 
      return prompt(`
        0) exit
        1) create new barn
        2) view barn
        3) delete barn
        4) display all barns
      `);
    }        
    