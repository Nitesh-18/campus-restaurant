export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  ingredients?: string[]
  isVegetarian?: boolean
  isVegan?: boolean
}

export const menuItems: MenuItem[] = [
  // Burgers & Sandwiches
  {
    id: "1",
    name: "Campus Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce on a toasted bun",
    price: 12.99,
    image: "/delicious-burger-with-lettuce-tomato.jpg",
    category: "Burgers & Sandwiches",
    ingredients: ["Beef patty", "Lettuce", "Tomato", "Onion", "Special sauce", "Brioche bun"],
  },
  {
    id: "2",
    name: "Veggie Delight Wrap",
    description: "Fresh vegetables, hummus, and avocado wrapped in a spinach tortilla",
    price: 9.99,
    image: "/healthy-veggie-wrap-with-avocado.jpg",
    category: "Burgers & Sandwiches",
    ingredients: ["Spinach tortilla", "Hummus", "Avocado", "Cucumber", "Bell peppers", "Sprouts"],
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: "3",
    name: "BBQ Pulled Pork Sandwich",
    description: "Slow-cooked pulled pork with tangy BBQ sauce and coleslaw on a brioche bun",
    price: 13.99,
    image: "/bbq-pulled-pork-sandwich-with-coleslaw.jpg",
    category: "Burgers & Sandwiches",
    ingredients: ["Pulled pork", "BBQ sauce", "Coleslaw", "Brioche bun", "Pickles"],
  },

  // Pizza
  {
    id: "4",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce",
    price: 14.99,
    image: "/margherita-pizza-with-fresh-basil.jpg",
    category: "Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil", "Olive oil"],
    isVegetarian: true,
  },
  {
    id: "5",
    name: "Pepperoni Supreme",
    description: "Loaded with pepperoni, mushrooms, bell peppers, and extra cheese",
    price: 16.99,
    image: "/pepperoni-pizza-with-mushrooms-and-peppers.jpg",
    category: "Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Pepperoni", "Mushrooms", "Bell peppers"],
  },

  // Salads
  {
    id: "6",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan cheese, croutons, and Caesar dressing",
    price: 10.99,
    image: "/fresh-caesar-salad-with-croutons.jpg",
    category: "Salads",
    ingredients: ["Romaine lettuce", "Parmesan cheese", "Croutons", "Caesar dressing"],
    isVegetarian: true,
  },
  {
    id: "7",
    name: "Mediterranean Bowl",
    description: "Mixed greens with feta cheese, olives, tomatoes, and balsamic vinaigrette",
    price: 11.99,
    image: "/mediterranean-salad-bowl-with-feta-and-olives.jpg",
    category: "Salads",
    ingredients: [
      "Mixed greens",
      "Feta cheese",
      "Kalamata olives",
      "Cherry tomatoes",
      "Red onion",
      "Balsamic vinaigrette",
    ],
    isVegetarian: true,
  },

  // Beverages
  {
    id: "8",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh lemons and mint",
    price: 3.99,
    image: "/fresh-lemonade-with-mint-garnish.jpg",
    category: "Beverages",
    ingredients: ["Fresh lemons", "Sugar", "Water", "Fresh mint"],
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: "9",
    name: "Iced Coffee",
    description: "Cold brew coffee served over ice with your choice of milk",
    price: 4.99,
    image: "/iced-coffee-in-tall-glass.jpg",
    category: "Beverages",
    ingredients: ["Cold brew coffee", "Ice", "Milk (optional)"],
  },

  // Desserts
  {
    id: "10",
    name: "Chocolate Brownie",
    description: "Rich, fudgy brownie served warm with vanilla ice cream",
    price: 6.99,
    image: "/chocolate-brownie-ice-cream.png",
    category: "Desserts",
    ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour", "Vanilla ice cream"],
    isVegetarian: true,
  },
]

export const categories = ["All", "Burgers & Sandwiches", "Pizza", "Salads", "Beverages", "Desserts"]
