import room1 from "./images/ottoman_property.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room_g4 from "./images/gp-room4.jpg";
import room_g2 from "./images/gp-room2.jpg";
import room_g3 from "./images/gp-room3.jpg";
const propertyData = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "OTTOMAN",
      slug: "ottoman",
      type: "property",
      price: 2000,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "HOTEL GANGA PALACE",
      slug: "hotel-ganga-palace",
      type: "property",
      price: 2000,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      images: [
        {
          fields: {
            file: {
              url: room_g4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room_g2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room_g3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
      ],
    },
  },
];

export default propertyData;
