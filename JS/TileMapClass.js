class Tile {
  constructor(identifier, coords) {
    this.identifier = identifier;
    this.img = new Image(64, 64);
    this.coords = {
      x: coords.x,
      y: coords.y
    };
    this.sources = {
      grass: "Media/Grass.png",
      grass1: "Media/Grass1.png",
      grass2: "Media/Grass2.png",
      grass3: "Media/Grass3.png",
      tree: "Media/Tree.png"
    };
    this.passable;
    if (this.identifier == 2) {
      this.passable = false
    } else this.passable = true;
  }
  loadimage() {
    // let rotations = [90, 180, 270, 360];
    // let rotation = Math.round(Math.random() * rotations.length);
    // let currentrotation = rotations[rotation];
    // this.img.style.rotation = currentrotation;

    switch (this.identifier) {
      case 1:
        let randimgnumber = Math.floor(Math.random() * 4);
        if (randimgnumber == 0) {
          this.img.src = this.sources.grass;
        } else if (randimgnumber == 1) {
          this.img.src = this.sources.grass1;
        } else if (randimgnumber == 2) {
          this.img.src = this.sources.grass2;
        } else {
          this.img.src = this.sources.grass3;
        }
        break;
      case 2:
        this.img.src = this.sources.tree;
        break;
    }
  }

  creatediv() {
    let div = document.createElement("div");
    div.className = "area";
    div.style.left = this.coords.x * 16 * 4 + "px";
    div.style.top = this.coords.y * 16 * 4 + "px";
    div.style.backgroundimage = this.img;
    div.appendChild(this.img);
    div.setAttribute("x", this.coords.x);
    div.setAttribute("y", this.coords.y);
    document.body.appendChild(div);
    //div.setattribute();
  }
}

class Tilemap {
  constructor() {
    this.screen = {
        width: window.innerwidth,
        height: window.innerheight
      },
      this.map = {},
      //0 = nothing
      //1 == grass
      //2 == tree
      //3 == sand
      //4 == water
      this.stage1 = [
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 3, 3, 3, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 3, 3, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 3, 3, 4, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0]
      ];
    this.randstage = [];



  }
  //end of constructor

  randStages() {

  }


  mapRender() {

    //console.log(this.map);
    let rownum = 0;
    this.stage1.forEach((row) => {
      let colnum = 0;
      row.forEach((col) => {

        let div = document.createElement("div");
        div.classname = "area";
        div.style.left = 64 * colnum + 22 + "px";
        div.style.top = 64 * rownum + 12 + "px";
        let coordinates = {
          x: colnum,
          y: rownum
        }

        let tile = new Tile(col, coordinates);
        tile.loadimage();
        tile.creatediv();
        //difference
        // switch (col) {
        //   case 0:
        //
        //     break;
        //     case 1:
        //     div.classname += " grass";
        //     break;
        //     case 2:
        //     div.classname += " tree";
        //     break;
        //     case 3:
        //     div.classname += " sand";
        //     break;
        //     case 4:
        //     div.classname += " water";
        //     break;
        //   default:
        //   break;
        //
        //
        // }
        //end of switch

        colnum++;
      });
      rownum++;
    });
  }

}
