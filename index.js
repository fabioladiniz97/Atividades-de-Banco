let map;
let info;

let centro ={ lat: -6.895124480428826, lng: -38.56747736517121 };
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 14,
    zoomControl: false,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });

  marker=new google.maps.Marker({
    position: centro,
    map,
    title: "oiiiii!",
    draggable: true,
    animation: google.maps.Animation.BOUNCE
  });

  marker.addListener("dblclick", ()=>{
    info = new google.maps.InfoWindow({
      content: ""+marker.getPosition(),
    }).open({
    anchor: marker,
    map,
    shouldFocus: false,
    });
  });

  map.addListener("click", (evt)=>{
     marker.setPosition(evt.latLng);
  });
}

window.initMap = initMap;