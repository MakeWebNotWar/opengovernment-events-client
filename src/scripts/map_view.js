// $(window).on('load', GetMap);

function GetMap() {
  var map = new Microsoft.Maps.Map(document.getElementById("map"), {
    credentials:"Avpt8rWAmFwIe9hCE8EP5GyKx3Vgr86LqjoWGZ8KdrvtgazGt1ONCO9tr9AF1VJN",
    center: new Microsoft.Maps.Location(43.653233,-79.383194),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 13
  });
  var loc = new Microsoft.Maps.Location(43.653233,-79.483194);

  var pin = new Microsoft.Maps.Pushpin(loc, {text: "99"}); 
  map.entities.push(pin);

  var locations = {
    locations: [
      {
        location: {
          name: "People & Code Inc.",
          address_1: "26 Soho Street",
          address_2: null,
          city: "Toronto",
          province: "Ontario",
          postal_code: "M5T 1A8",
          country: "Canada"
        }
      },
      {
        location: {
          name: "BNOTIONS",
          address_1: "106 Front Street East",
          address_2: null,
          city: "Toronto",
          province: "Ontario",
          postal_code: "M5A 1E1",
          country: "Canada"
        }
      }
    ]
  }
}