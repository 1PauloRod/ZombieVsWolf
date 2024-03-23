
const GRAVITY = 1;

const keys = {
    w: {
        pressed: false,
    }, 
    space: {
        pressed: false,
    },
    d: {
        pressed: false, 
    }, 
    
}


window.addEventListener("keydown", (event) => {
    
    switch(event.key){
        case 'd':
            keys.d.pressed = true;
            break;
        case ' ':
            keys.space.pressed = true;
            break;
        case 'w':
            keys.w.pressed = true; 
            break;
    }
})

window.addEventListener("keyup", (event) => {
  
    switch(event.key){
        case 'd':
            keys.d.pressed = false;
            break;
        case ' ':
            keys.space.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break;
    }
})