import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      "id": 7,
      "title": "Classic Comfort Drawstring Joggers",
      "price": 100,
      "description": "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
      "images": [
        "https://i.imgur.com/mp3rUty.jpeg",
        "https://i.imgur.com/JQRGIc2.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T02:22:49.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
    {
      "id": 10,
      "title": "Classic Blue Baseball Cap",
      "price": 86,
      "description": "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
      "images": [
        "https://i.imgur.com/wXuQ7bm.jpeg",
        "https://i.imgur.com/BZrIEmb.jpeg",
        "https://i.imgur.com/KcT6BE0.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T01:54:17.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
    {
      "id": 11,
      "title": "Classic Red Baseball Cap",
      "price": 35,
      "description": "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
      "images": [
        "https://i.imgur.com/cBuLvBi.jpeg",
        "https://i.imgur.com/N1GkCIR.jpeg",
        "https://i.imgur.com/kKc9A5p.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T01:54:17.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
    {
      "id": 12,
      "title": "Classic Black Baseball Cap",
      "price": 58,
      "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
      "images": [
        "https://i.imgur.com/KeqG6r4.jpeg",
        "https://i.imgur.com/xGQOw3p.jpeg",
        "https://i.imgur.com/oO5OUjb.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T01:54:17.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
    {
      "id": 13,
      "title": "Classic Olive Chino Shorts",
      "price": 84,
      "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
      "images": [
        "https://i.imgur.com/UsFIvYs.jpeg",
        "https://i.imgur.com/YIq57b6.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T01:54:17.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
    {
      "id": 14,
      "title": "Classic High-Waisted Athletic Shorts",
      "price": 43,
      "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
      "images": [
        "https://i.imgur.com/eGOUveI.jpeg",
        "https://i.imgur.com/UcsGO7E.jpeg",
        "https://i.imgur.com/NLn4e7S.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T01:54:17.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
    {
      "id": 15,
      "title": "Classic White Crew Neck T-Shirt",
      "price": 39,
      "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
      "images": [
        "https://i.imgur.com/axsyGpD.jpeg",
        "https://i.imgur.com/T8oq9X2.jpeg",
        "https://i.imgur.com/J6MinJn.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T01:54:17.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
    {
      "id": 16,
      "title": "Classic White Tee - Timeless Style and Comfort",
      "price": 73,
      "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
      "images": [
        "https://i.imgur.com/Y54Bt8J.jpeg",
        "https://i.imgur.com/SZPDSgy.jpeg",
        "https://i.imgur.com/sJv4Xx0.jpeg"
      ],
      "creationAt": "2024-11-09T01:54:17.000Z",
      "updatedAt": "2024-11-09T01:54:17.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-11-09T01:54:17.000Z",
        "updatedAt": "2024-11-09T01:54:17.000Z"
      }
    },
  ]
}
