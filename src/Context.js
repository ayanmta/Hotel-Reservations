import React, { useState, useEffect } from "react";
import items from "./data";

export const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [userValue, setUserValue] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });
  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    setUserValue({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
    });
  }, []);

  const getRoom = (slug) => {
    let tempRooms = userValue.rooms;
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  };

  return (
    <RoomContext.Provider value={{ ...userValue, getRoom: getRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
