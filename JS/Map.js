//loop
function onupdate(callback){
  setInterval(callback, 1000 / 60);
  return;
}

//calling classes
const tilemap = new Tilemap();



onupdate(()=> {

});

tilemap.maprender();
tilemap.randstages();
