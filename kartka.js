// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();
//wczytywanie obrazków
loadSprite("tło","tło.png")
loadSprite("góry","góry.png")
loadSprite("chmura","chmura 1.png")
loadSprite("chmura2","chmura2.png")
loadSound("muzyka","Utwór bez tytułu.mp3")
// add a piece of text at position (120, 80)
add([sprite("tło")
])
const góry = add([sprite("góry"),
pos(0,0),
scale()])
góry.scaleTo(0.95)

const chmura = add([sprite("chmura"),
pos(900,400),
scale()])
chmura.scaleTo(0.5)

onUpdate(()=>{

    if(góry.pos.x<800)

    góry.pos.x=góry.pos.x + 1

    else góry.pos.x=-800


    if(chmura.pos.x>-900)

    chmura.pos.x=chmura.pos.x - 2

    else chmura.pos.x=900
}
)
onKeyPress("space", ()=>{
    play("muzyka")
})
