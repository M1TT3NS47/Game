import
  Project
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
import player from "./Player/Player.js
import stage from "./Stage/Stage.js

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player
   x: 0,
   y: 0,
   direction: 90,
   rotationStyle: Sprite.RotationStyle.ALL_AROUND,
   costumeNumber: 1,
   size: 50,
   visible: true,
   layerOrder: 1
