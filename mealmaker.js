const menu = { 
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
    },
    set mains(mains) {
    this._courses.mains = mains;
    },
    set desserts(desserts) {
    this._courses.desserts = desserts;
    },
    get courses() {
     return {
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts,
     }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
    name: dishName,
    price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    },
    generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
     }
    };
    
    menu.addDishToCourse('appetizer', 'soup', 10.00);
    menu.addDishToCourse('appetizer', 'salad', 12.00);
    menu.addDishToCourse('appetizer', 'oysters', 20.00);
    
    menu.addDishToCourse('main', 'burger', 40.00);
    menu.addDishToCourse('main', 'lobster', 80.00);
    menu.addDishToCourse('main', 'pasta', 60.00);
    
    menu.addDishToCourse('dessert', 'cake', 20.00);
    menu.addDishToCourse('dessert', 'ice cream', 15.00);
    menu.addDishToCourse('dessert', 'chocolate bar', 5.00);
    
    let meal = menu.generateRandomMeal();
    console.log(meal);