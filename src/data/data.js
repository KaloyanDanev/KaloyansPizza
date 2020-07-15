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

import pepsi from '../images/menu/drinks/pepsi.jpg'
import mtnDew from '../images/menu/drinks/mtn-dew.jpg'
import dietPepsi from '../images/menu/drinks/diet-pepsi.jpg'
import aquafinaWater from '../images/menu/drinks/aquafina-water.jpg'
import sierra from '../images/menu/drinks/sierra.jpg'
import crushOrange from '../images/menu/drinks/crush.jpg'
import mugBeer from '../images/menu/drinks/mug.jpg'

import donutHoles from '../images/menu/desserts/donut-holes.jpg'
import cinnPullAparts from '../images/menu/desserts/cinn-pull-aparts.jpg'
import choclateChipCookie from '../images/menu/desserts/chocolate-chip-cookie.jpg'
import choclateChipBrownie from '../images/menu/desserts/chocolate-chip-brownie.jpg'

export const pizza = [
        {
        id:1,
        category:'pizza',
        name: 'Cheese Pizza',
        photo: cheese,
        description: 'Real cheese made from mozzarella, pizza sauce and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 300,
        price: 10
    },
    {
        id:2,
        category:'pizza',
        name: 'Pepperoni Pizza',
        photo: pepperoni,
        description: 'Premium pepperoni, real cheese made from mozzarella and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 310,
        price: 10
    },
    {
        id:3,
        category:'pizza',
        name: 'Sausage Pizza',
        photo: sausage,
        description: 'Sausage and real cheese made from mozzarella and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 330,
        price: 10
    },
    {
        id:4,
        category:'pizza',
        name: 'Chicken Pizza',
        photo: chicken,
        description: 'Premium all-white chicken and real cheese made with mozzarella and buttery garlic crust.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 320,
        price: 10
    },
    {
        id:5,
        category:'pizza',
        name: 'Garden Pizza',
        photo: garden,
        description: 'Mushrooms, black olives, onions, sliced tomatoes, pizza sauce and signature three-cheese blend.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 280,
        price: 10
    },
    {
        id:6,
        category:'topping',
        name: 'Extra Cheese',
        photo: extraCheese,
        additional_calories: 15,
        price: 1.99,
    },
    {
        id:7,
        category:'topping',
        name: 'Parmesan Romano',
        photo: parmesan,
        additional_calories: 20,
        price: 1.99,
    },
    {
        id:8,
        category:'topping',
        name: '3-Cheese Blend',
        photo: threeCheese,
        additional_calories: 25,
        price: 1.99,
    },
    {
        id:9,
        category:'topping',
        name: 'Grilled Chicken',
        photo: grilledChicken,
        additional_calories: 20,
        price: 2.99,
    },
    {
        id:10,
        category:'topping',
        name: 'Pepperoni',
        photo: extraPepperoni,
        additional_calories: 50,
        price: 2.99,
    },
    {
        id:11,
        category:'topping',
        name: 'Beef',
        photo: beef,
        additional_calories: 40,
        price: 2.99,
    },
    {
        id:12,
        category:'topping',
        name: 'Spicy Italian Sausage',
        photo: spicyItalian,
        additional_calories: 50,
        price: 2.99,
    },
    {
        id:13,
        category:'topping',
        name: 'Bacon',
        photo: bacon,
        additional_calories: 50,
        price: 2.99,
    },
    {
        id:14,
        category:'topping',
        name: 'Sausage',
        photo: extraSausage,
        additional_calories: 60,
        price: 2.99,
    },
    {
        id:15,
        category:'topping',
        name: 'Canadian Bacon',
        photo: canadianBacon,
        additional_calories: 20,
        price: 2.99,
    },
    {
        id:16,
        category:'topping',
        name: 'Salami',
        photo: salami,
        additional_calories: 20,
        price: 2.99,
    },
    {
        id:17,
        category:'topping',
        name: 'Mushrooms',
        photo: mushrooms,
        additional_calories: 5,
        price: 0.99,
    },
    {
        id:18,
        category:'topping',
        name: 'Roma Tomatoes',
        photo: tomatoes,
        additional_calories: 5,
        price: 0.99,
    },
    {
        id:19,
        category:'topping',
        name: 'Pineapple',
        photo: pineapple,
        additional_calories: 10,
        price: 0.99,
    },
    {
        id:20,
        category:'topping',
        name: 'Onions',
        photo: onions,
        additional_calories: 5,
        price: 0.99,
    },
    {
        id:21,
        category:'topping',
        name: 'Black Olives',
        photo: olives,
        additional_calories: 15,
        price: 0.99,
    },
    {
        id:22,
        category:'topping',
        name: 'Jalapeno Peppers',
        photo: jalapenoPeppers,
        additional_calories: 0,
        price: 0.99,
    },
    {
        id:23,
        category:'topping',
        name: 'Banana Peppers',
        photo: bananaPeppers,
        additional_calories: 0,
        price: 0.99,
    },
    {
        id:24,
        category:'topping',
        name: 'Green Peppers',
        photo: greenPeppers,
        additional_calories: 0,
        price: 0.99,
    },
    {
        id:25,
        category:'drink',
        name: 'Pepsi',
        photo: pepsi,
        calorie: 900,
        price: 2.79,
    },
    {
        id:26,
        category:'drink',
        name: 'Mountain Dew',
        photo: mtnDew,
        calorie: 1020,
        price: 2.79,
    },
    {
        id:27,
        category:'drink',
        name: 'Diet Pepsi',
        photo: dietPepsi,
        calorie: 0,
        price: 2.79,
    },
    {
        id:28,
        category:'drink',
        name: 'Aquafina Water',
        photo: aquafinaWater,
        calorie: 0,
        price: 1.49,
    },
    {
        id:29,
        category:'drink',
        name: 'Sierra Mist',
        photo: sierra,
        calorie: 900,
        price: 2.79,
    },
    {
        id:30,
        category:'drink',
        name: 'Crush Orange',
        photo: crushOrange,
        calorie: 1010,
        price: 2.79,
    },
    {
        id:31,
        category:'drink',
        name: 'Mug Root Beer',
        photo: mugBeer,
        calorie: 850,
        price: 2.79,
    },
    {
        id:32,
        category:'dessert',
        name: 'Donut Holes',
        photo: donutHoles,
        description: 'Ten oven-baked Donut Holes filled with caramel cream. Perfect for sharing, or not.',
        serving_size: '10 donut holes',
        calorie_per_serving: 580,
        price: 4.99,
    },
    {
        id:33,
        category:'dessert',
        name: 'Cinnamon Pull Aparts',
        photo: cinnPullAparts,
        description: 'Covered in cinnamon and sugar, topped with cinnamon crumbles, drizzled with cream cheese icing.',
        serving_size: '1 tray',
        calorie_per_serving: 1960,
        price: 6.99,
    },
    {
        id:34,
        category:'dessert',
        name: 'Chocolate Chip Cookie',
        photo: choclateChipCookie,
        description: 'Loaded with chocolate chips, cut into 8 slices, served warm.',
        serving_size: '1 slice, 8 slices',
        calorie_per_serving: 190,
        price: 6.99,
    },
    {
        id:35,
        category:'dessert',
        name: 'Double Chocolate Chip Brownie',
        photo: choclateChipBrownie,
        description: 'Filled with chocolate chips, cut into 9 squares and served warm.',
        serving_size: '1 square, 9 squares',
        calorie_per_serving: 240,
        price: 6.99,
    }
]
