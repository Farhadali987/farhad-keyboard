 let button = document.getElementsByTagName('button')
 let p = document.getElementById('ip');
 let keybord= document.getElementsByClassName('keybord')[0]
 let space = document.getElementsByClassName('space')[0]
 let backspace = document.getElementsByClassName('backspace')[0]

 function bb(){
button.innerHTML+=index.key
for (let i = 0; i< button.length; i++) {
    if (button[i].innerHTML==index.key.toUpperCase()) {
        button[i].classList.add("active")
        
    };
}

p.innerHTML+=index.key
if (index.key=="Backspace") {
    p.innerHTML=p.innerHTML.slice(0, -10)
    
};
}
document.body.addEventListener('keyup',function(index) {
    for (let j = 0; j < button.length; j++) {
        if (button[j].innerHTML==index.key.toUpperCase()) {
            button[j].classList.remove('active')
            
        }
        
    }
    
})
for (let x of button){
    x.addEventListener('mousedown',function() {
        x.className='active'
        p.innerHTML+=x.innerHTML
        
    })
}
for (let y of button) {
    y.addEventListener('mouseup',function() {
y.className=''    

    })
    
}
space.addEventListener('mousedown', function() {
    space.classList.add('active')
    p.innerHTML+=" "
    
})
space.addEventListener('mouseup',function() {
    space.classList.remove('active')
    
})
function back() {
    backspace.className+='active'
    p.innerHTML=p.innerHTML.slice(0, -1)
    
}
backspace.onmousedown=back
backspace.onmouseup=function() {
    backspace.classList.remove('active')
    
}
//for MOBILES AND TABLET 
 for (let x of button) {
    x.addEventListener('touchstart',function () {
        x.className='active'
        
    })
    
 }
 
 for (let y of button) {
    x.addEventListener('touchend', function() {
        space.classList.remove('active')

        
    })
 }
 space.addEventListener('touchstart', function() {
    space.classList.add('active')

    
 })
 space.addEventListener('touchend',function () {

space.classList.remove('active')
    
 })
 backspace.addEventListener('touchstart',function() {
    backspace.className+=' active'
    
 })
 backspace.addEventListener('touchend',function() {
    backspace.classList.remove('active')
    
 })


