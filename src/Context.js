import React, { useState, useEffect } from "react";
import items from "./data";
import properties from "./propertyData";

export const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [userValue, setUserValue] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    propertyData: [],
    loading: true,
  });

  useEffect(() => {
    let rooms = formatData(items, properties).tempItems;
    let propertyData = formatData(items, properties).property;
    let featuredRooms = rooms.filter((room) => room.featured === true);
    setUserValue({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      propertyData,
    });
  }, []);

  const getRoom = (slug) => {
    let tempRooms = userValue.rooms;
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const formatData = (items, properties) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;
    });
    let property = properties.map((pro) => {
      let id = pro.sys.id;
      let images = pro.fields.images.map((image) => image.fields.file.url);
      let prop = { ...pro.fields, id, images };
      return prop;
    });
    return { tempItems, property };
  };

  return (
    <RoomContext.Provider value={{ ...userValue, getRoom: getRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
