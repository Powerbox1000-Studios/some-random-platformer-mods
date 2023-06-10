if(window.api && (window.api.apiVersion == "v1" || window.api.apiVersion == "v2-v1")){
  window.api.setCustomLevel([
    "@                            x",
    "                             x",
    "                             x",
    "                            |x",
    "_ x x x x x x _ x x x x x x _x"
  ]);
  window.api.toggleCustomLevel(true);
  go("title");
  console.info("Custom level loaded!");
}else{
  var levelMod = new Mod({
    version: 1,
    name: "The Invisible Parkour",
    id: "invisible-parkour",
    permissions: ["WRITE_LEVEL"],
    onReady: function(){
        levelMod.addLevel(levelMod.id, levelMod.name, [
          "@                            x",
          "                             x",
          "                             x",
          "                            |x",
          "_ x x x x x x _ x x x x x x _x"
      ])
    }
  })
}
