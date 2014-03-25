Opengov.Map = {
  mapInit: function(){
    Opengov.Map.map = new Microsoft.Maps.Map(document.getElementById("map"), {
      credentials:"Avpt8rWAmFwIe9hCE8EP5GyKx3Vgr86LqjoWGZ8KdrvtgazGt1ONCO9tr9AF1VJN",
      mapTypeId: Microsoft.Maps.MapTypeId.road,
      zoom: 15
    });
  }
};