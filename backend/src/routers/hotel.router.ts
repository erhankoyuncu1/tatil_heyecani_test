import { Router } from "express";
import { sample_comments, sample_hotels, sample_roomtypes, sample_tags } from "../data";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_hotels);
});

router.get("/tag/:tag", (req, res) => {
  const tag = req.params.tag;

  let hotels = sample_hotels.filter((hotel) => {
    const lowercaseTags = hotel.tags.map((tag: string) => tag.toLowerCase());
    return lowercaseTags.includes(tag.toLowerCase());
  });

  if (tag === "Hepsi") hotels = sample_hotels;

  res.send(hotels);
});

router.get("/city/:city", (req, res) => {
  const city = req.params.city.toLowerCase();

  const hotels = sample_hotels.filter(
    (hotel) => hotel.city.toLocaleLowerCase("tr-TR") == city
  );
  res.send(hotels);
});

router.get("/search/:search", (req, res) => {
  const search = req.params.search;

  const hotels = sample_hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );
  res.send(hotels);
});

router.get("/id/:hotelId", (req, res) => {
  const hotelId = req.params.hotelId;
  const hotel = sample_hotels.find((hotel) => hotel.id == hotelId);

  res.send(hotel);
});

router.get("/tags", (req, res) => {
  res.send(sample_tags);
});

router.get("/comments/:hotelId", (req, res) => {
  const hotelId = req.params.hotelId;
  let comments = sample_comments.filter(comment => comment.hotelId === hotelId);

  res.send(comments);
})

function findRoom(hotelId: string, roomId: string) {
  const hotel = sample_hotels.find((h: { id: any; }) => h.id === hotelId);

  if (hotel) {
    const room = hotel.rooms.find((r: { id: any; }) => r.id === roomId);

    if (room) {
      return room;
    }
  }
  return null;
}


router.get("/room/:hotelId/:roomId", (req, res) => {
  const hotelId = req.params.hotelId;
  const roomId = req.params.roomId;

  const room = findRoom(hotelId, roomId);
  ;
  res.send(room);
});

function findRoomTypeId(hotelId: string, roomId: string) {
  const hotel = sample_hotels.find((h: { id: any; }) => h.id === hotelId);

  if (hotel) {
    const room = hotel.rooms.find((r: { id: any; }) => r.id === roomId);

    if (room) {
      return room.roomTypeId;
    }
  }

  return null;
}

router.get("/roomtype/:hotelId/:roomId", (req, res) => {
  const hotelId = req.params.hotelId;
  const roomId = req.params.roomId;

  const roomTypeId = findRoomTypeId(hotelId, roomId);

  const roomtype = sample_roomtypes.find(roomType => roomType.id === roomTypeId);
  res.send(roomtype);
})

function areDateRangesOverlroutering(
  start1: Date,
  end1: Date,
  start2: Date,
  end2: Date
): boolean {
  return start1 <= end2 && end1 >= start2;
}

function isReservationConflict(
  reservation: any,
  checkInDate: Date,
  checkOutDate: Date
): boolean {
  const [day, month, year] = reservation.startDate.split("/").map(Number);
  const startDate = new Date(year, month - 1, day);
  const [endDay, endMonth, endYear] = reservation.endDate
    .split("/")
    .map(Number);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  // Tarih çakışmasını kontrol et
  return areDateRangesOverlroutering(
    startDate,
    endDate,
    checkInDate,
    checkOutDate
  );
}

router.get("/find", (req, res) => {
  const { city, dateIn, dateOut, personCount } = req.query;

  

  res.send();
});

export default router;