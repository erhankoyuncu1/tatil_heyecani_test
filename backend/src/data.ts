export const sample_roomtypes: any[] = [
  {
    id: "1",
    name: "First Class",
    price: 1000,
  },
  {
    id: "2",
    name: "Second Class",
    price: 600,
  },
  {
    id: "3",
    name: "Third Class",
    price: 300,
  },
  {
    id: "4",
    name: "plus Room",
    price: 400,
  }
];

export const sample_hotels: any[] = [
  {
    id: "1",
    name: "Örnek Otel 1",
    address: "İstanbul, Türkiye",
    email: "ornekotel1@gmail.com",
    city: "İstanbul",
    phone: "+90 123 456 7890",
    imageUrl: "otel1.jpg",
    images: ["otel1.jpg", "otel2.jpg"],
    rooms: [
      {
        id: "1",
        name: "Ultra Prime Oda",
        nihgtPrice: 600,
        imageUrl: "oda4.jpg",
        roomTypeId: "1",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
      {
        id: "2",
        name: "Prime Oda",
        nihgtPrice: 450,
        imageUrl: "oda.jpg",
        roomTypeId: "2",
        capacity: 1,
        description:"Oda açıklama lorem5"
      },
    ],
    isFull: false,
    managerID: "1",
    starCount: 4,
    tags: ["Merkezi Konum", "Havuz"],
  },
  {
    id: "2",
    name: "Örnek Otel 2",
    address: "Ankara, Türkiye",
    email: "ornekotel2@gmail.com",
    city: "Ankara",
    phone: "+90 987 654 3210",
    imageUrl: "otel2.jpg",
    images: ["otel2.jpg", "otel4.jpg"],
    rooms: [
      {
        id: "1",
        name: "Aile Oda",
        nihgtPrice: 500,
        imageUrl: "oda3.jpg",
        roomTypeId: "1",
        capacity: 3,
        description:"Oda açıklama lorem5"
      },
      {
        id: "2",
        name: "Standart Oda",
        nihgtPrice: 300,
        imageUrl: "oda5.jpg",
        roomTypeId: "2",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
    ],
    isFull: false,
    managerID: "2",
    starCount: 3,
    tags: ["Otopark", "Restoran"],
  },
  {
    id: "3",
    name: "Örnek Otel 3",
    address: "İzmir, Türkiye",
    email: "ornekotel3@gmail.com",
    city: "İzmir",
    phone: "+90 555 123 4567",
    imageUrl: "otel3.jpg",
    images: ["otel1.jpg", "otel4.jpg"],
    rooms: [
      {
        id: "1",
        name: "Prime Oda",
        nihgtPrice: 500,
        imageUrl: "oda3.jpg",
        roomTypeId: "1",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
      {
        id: "2",
        name: "Secondary Oda",
        nihgtPrice: 350,
        imageUrl: "oda5.jpg",
        roomTypeId: "3",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
    ],
    isFull: false,
    managerID: "3",
    starCount: 5,
    tags: ["Plaj Erişimi", "Restoran"],
  },
  {
    id: "4",
    name: "Örnek Otel 4",
    address: "İzmir, Türkiye",
    email: "ornekotel4@gmail.com",
    city: "İzmir",
    phone: "+90 555 123 4567",
    imageUrl: "otel4.jpg",
    images: ["otel3.jpg", "otel4.jpg"],
    rooms: [
      {
        id: "1",
        name: "Standart 1 Oda",
        nihgtPrice: 450,
        imageUrl: "oda3.jpg",
        roomTypeId: "1",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
      {
        id: "2",
        name: "Standart 2 Oda",
        nihgtPrice: 300,
        imageUrl: "oda2.jpg",
        roomTypeId: "2",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
      {
        id: "3",
        name: "Plus Oda",
        nihgtPrice: 550,
        imageUrl: "oda7.jpg",
        roomTypeId: "3",
        capacity: 3,
        description:"Oda açıklama lorem5"
      },
      {
        id: "4",
        name: "Plus + Oda",
        nihgtPrice: 600,
        imageUrl: "oda9.jpg",
        roomTypeId: "4",
        capacity: 4,
        description:"Oda açıklama lorem5"
      },
    ],
    isFull: false,
    managerID: "3",
    starCount: 5,
    tags: ["Plaj Erişimi", "Spa"],
  },
  {
    id: "5",
    name: "Örnek Otel 5",
    address: "Antalya, Türkiye",
    email: "ornekotel4@gmail.com",
    city: "Antalya",
    phone: "+90 555 123 4567",
    imageUrl: "otel5.jpg",
    images: ["otel5.jpg", "otel1.jpg"],
    rooms: [
      {
        id: "1",
        name: "Standart 1 Oda",
        nihgtPrice: 450,
        imageUrl: "oda3.jpg",
        roomTypeId: "1",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
      {
        id: "2",
        name: "Standart 2 Oda",
        nihgtPrice: 300,
        imageUrl: "oda2.jpg",
        roomTypeId: "2",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
    ],
    isFull: false,
    managerID: "3",
    starCount: 5,
    tags: ["Plaj Erişimi", "Spa"],
  },
  {
    id: "6",
    name: "Örnek Otel 6",
    address: "Antalya, Türkiye",
    email: "ornekotel4@gmail.com",
    city: "Antalya",
    phone: "+90 555 123 4567",
    imageUrl: "otel4.jpg",
    images: ["otel4.jpg", "otel2.jpg"],
    rooms: [
      {
        id: "1",
        name: "Standart 1 Oda",
        nihgtPrice: 450,
        imageUrl: "oda3.jpg",
        roomTypeId: "1",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
      {
        id: "2",
        name: "Standart 2 Oda",
        nihgtPrice: 300,
        imageUrl: "oda2.jpg",
        roomTypeId: "2",
        capacity: 2,
        description:"Oda açıklama lorem5"
      },
    ],
    isFull: false,
    managerID: "3",
    starCount: 5,
    tags: ["Plaj Erişimi", "Spa"],
  },
];

export const sample_tags: any[] = [
  { id: 1, name: "Hepsi", count: 4 },
  { id: 2, name: "Merkezi Konum", count: 1 },
  { id: 3, name: "Havuz", count: 1 },
  { id: 4, name: "Otopark", count: 1 },
  { id: 5, name: "Restoran", count: 1 },
  { id: 6, name: "Plaj Erişimi", count: 2 },
  { id: 7, name: "Spa", count: 1 },
  { id: 8, name: "Çocuk Dostu", count: 0 },
  { id: 9, name: "Lüks", count: 0 },
  { id: 10, name: "Sahil Manzarası", count: 0 },
  { id: 11, name: "Dağ Manzarası", count: 0 },
];

export const sample_comments: any[] = [
  {
    id: "1",
    ownerId: "1",
    hotelId: "1",
    comment: "iyiydi güzeldi.",
    date: new Date("01/12/2023"),
  },
  {
    id: "2",
    ownerId: "1",
    hotelId: "2",
    comment: "iyiydi güzeldi.",
    date: new Date("02/11/2023"),
  },
  {
    id: "4",
    ownerId: "2",
    hotelId: "1",
    comment: "iyiydi güzeldi.",
    date: new Date("01/11/2023"),
  },
  {
    id: "5",
    ownerId: "3",
    hotelId: "2",
    comment: "iyiydi güzeldi.",
    date: new Date("04/12/2023"),
  },
];

export const sample_rezervations: any[] = [
  {id:"1", hotelId:"1", roomId:"1", ownerId:"1", personCount:"2", startDate:"01/12/2023", endDate:"06/12/2023", totalPrice:"4200", status:"Ödendi"},
  {id:"2", hotelId:"2", roomId:"1", ownerId:"2", personCount:"3", startDate:"11/11/2023", endDate:"16/11/2023", totalPrice:"4200", status:"Ödendi"},
  {id:"3", hotelId:"3", roomId:"1", ownerId:"3", personCount:"2", startDate:"21/10/2023", endDate:"23/10/2023", totalPrice:"4200", status:"Ödendi"},
  {id:"4", hotelId:"4", roomId:"1", ownerId:"2", personCount:"1", startDate:"5/11/2023", endDate:"15/11/2023", totalPrice:"4200", status:"Ödendi"},
  {id:"5", hotelId:"2", roomId:"2", ownerId:"3", personCount:"3", startDate:"03/11/2023", endDate:"09/11/2023", totalPrice:"4200", status:"Ödendi"},
  {id:"6", hotelId:"1", roomId:"2", ownerId:"3", personCount:"2", startDate:"12/12/2023", endDate:"15/12/2023", totalPrice:"4200", status:"Ödendi"},
  {id:"7", hotelId:"3", roomId:"2", ownerId:"2", personCount:"1", startDate:"01/12/2023", endDate:"04/12/2023", totalPrice:"4200", status:"Ödendi"}
];

export const sample_carousel_data: any[] = [
  { image: "otel1.jpg", imageDescription: "Antalya Otelleri" },
  { image: "otel3.jpg", imageDescription: "Ankara Otelleri" },
  { image: "otel5.jpg", imageDescription: "Nevşehir Otelleri" },
];
export const sample_users: any[] = [
  {
    id: "1",
    name: "erhan",
    surname: "Koyuncu",
    email: "erhan@gmail.com",
    password: "12345",
    token: "",
    isAdmin: false,
  },
  {
    id: "2",
    name: "ahmet",
    surname: "İnak",
    email: "ahmet@gmail.com",
    password: "12345",
    resdtoken: "",
    isAdmin: false,
  },
  {
    id: "3",
    name: "yusuf",
    surname: "Şeyhun",
    email: "yusuf@gmail.com",
    password: "12345",
    token: "",
    isAdmin: true,
  },
];

export const sample_cities: any[] = [
  "İstanbul",
  "Antalya",
  "Ankara",
  "Nevşehir",
  "İzmir",
  "Manisa",
];
