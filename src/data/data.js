import cheese from "../images/menu/pizza/cheese.jpg";
import pepperoni from "../images/menu/pizza/pepperoni.jpg";
import sausage from "../images/menu/pizza/sausage.jpg";
import chicken from "../images/menu/pizza/chicken.jpg";
import garden from "../images/menu/pizza/garden.jpg";

import extraCheese from "../images/menu/toppings/extra-cheese.jpg"
import parmesan from "../images/menu/toppings/parmesan.jpg"
import threeCheese from "../images/menu/toppings/three-cheese.jpg"
import grilledChicken from "../images/menu/toppings/grilled-chicken.jpg"
import extraPepperoni from "../images/menu/toppings/pepperoni.jpg"
import beef from "../images/menu/toppings/beef.jpg"
import spicyItalian from "../images/menu/toppings/spicy-italian.jpg"
import bacon from "../images/menu/toppings/bacon.jpg"
import extraSausage from "../images/menu/toppings/sausage.jpg"
import canadianBacon from "../images/menu/toppings/canadian-bacon.jpg"
import salami from "../images/menu/toppings/salami.jpg"
import mushrooms from "../images/menu/toppings/mushrooms.jpg"
import tomatoes from "../images/menu/toppings/tomatoes.jpg"
import pineapple from "../images/menu/toppings/pineapple.jpg"
import onions from "../images/menu/toppings/onions.jpg"
import olives from "../images/menu/toppings/olives.jpg"
import jalapenoPeppers from "../images/menu/toppings/jalapeno-peppers.jpg"
import bananaPeppers from "../images/menu/toppings/banana-peppers.jpg"
import greenPeppers from "../images/menu/toppings/green-peppers.jpg"

export const pizzas = [
    {
        id:1,
        name: 'Cheese Pizza',
        photo: cheese,
        description: 'Real cheese made from mozzarella, pizza sauce and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 300,
        price: 10
    },
    {
        id:2,
        name: 'Pepperoni Pizza',
        photo: pepperoni,
        description: 'Premium pepperoni, real cheese made from mozzarella and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 310,
        price: 10
    },
    {
        id:3,
        name: 'Sausage Pizza',
        photo: sausage,
        description: 'Sausage and real cheese made from mozzarella and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 330,
        price: 10
    },
    {
        id:4,
        name: 'Chicken Pizza',
        photo: chicken,
        description: 'Premium all-white chicken and real cheese made with mozzarella and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 320,
        price: 10
    },
    {
        id:5,
        name: 'Garden Pizza',
        photo: garden,
        description: 'Mushrooms, black olives, onions, sliced tomatoes, pizza sauce and signature three-cheese blend.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 280,
        price: 10
    },
]

export const toppings = [
    {
        id:6,
        name: 'Extra Cheese',
        photo: extraCheese,
        additional_calories: 15,
        price: 1.99,
    },
    {
        id:7,
        name: 'Parmesan Romano',
        photo: parmesan,
        additional_calories: 20,
        price: 1.99,
    },
    {
        id:8,
        name: '3-Cheese Blend',
        photo: threeCheese,
        additional_calories: 25,
        price: 1.99,
    },
    {
        id:9,
        name: 'Grilled Chicken',
        photo: grilledChicken,
        additional_calories: 20,
        price: 2.99,
    },
    {
        id:10,
        name: 'Pepperoni',
        photo: extraPepperoni,
        additional_calories: 50,
        price: 2.99,
    },
    {
        id:11,
        name: 'Beef',
        photo: beef,
        additional_calories: 40,
        price: 2.99,
    },
    {
        id:12,
        name: 'Spicy Italian Sausage',
        photo: spicyItalian,
        additional_calories: 50,
        price: 2.99,
    },
    {
        id:13,
        name: 'Bacon',
        photo: bacon,
        additional_calories: 50,
        price: 2.99,
    },
    {
        id:14,
        name: 'Sausage',
        photo: extraSausage,
        additional_calories: 60,
        price: 2.99,
    },
    {
        id:15,
        name: 'Canadian Bacon',
        photo: canadianBacon,
        additional_calories: 20,
        price: 2.99,
    },
    {
        id:16,
        name: 'Salami',
        photo: salami,
        additional_calories: 20,
        price: 2.99,
    },
    {
        id:17,
        name: 'Mushrooms',
        photo: mushrooms,
        additional_calories: 5,
        price: 0.99,
    },
    {
        id:18,
        name: 'Roma Tomatoes',
        photo: tomatoes,
        additional_calories: 5,
        price: 0.99,
    },
    {
        id:19,
        name: 'Pineapple',
        photo: pineapple,
        additional_calories: 10,
        price: 0.99,
    },
    {
        id:20,
        name: 'Onions',
        photo: onions,
        additional_calories: 5,
        price: 0.99,
    },
    {
        id:21,
        name: 'Black Olives',
        photo: olives,
        additional_calories: 15,
        price: 0.99,
    },
    {
        id:22,
        name: 'Jalapeno Peppers',
        photo: jalapenoPeppers,
        additional_calories: 0,
        price: 0.99,
    },
    {
        id:23,
        name: 'Banana Peppers',
        photo: bananaPeppers,
        additional_calories: 0,
        price: 0.99,
    },
    {
        id:24,
        name: 'Green Peppers',
        photo: greenPeppers,
        additional_calories: 0,
        price: 0.99,
    },
]