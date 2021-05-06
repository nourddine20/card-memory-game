/********* dom card game  */
let container_cards = document.querySelector(".box_card_memory");
let box_card_memory_dom = document.querySelectorAll(".card");
let lunch_game = document.querySelector(".lunch_game button");
let count_time = document.querySelector(".count_time h2");
let timer =0;

console.dir();


lunch_game.addEventListener("click",start_game);


function random_cards(){
  box_card_memory_dom.forEach(card=>{
    let random_order = Math.floor(Math.random()*12);
    card.style.order = random_order;
  });
}

function start_game(){

  this.style.display ="none";
  container_cards.style.display ="flex";
  random_cards()
}
let has_flip=false;
let first_cart;
let second_cart;
let board_working=false;
box_card_memory_dom.forEach(card=>card.addEventListener("click",flip_cart));


function flip_cart(){
      if(board_working) return;

      if(this === first_cart) return;

  this.classList.add("flip");
  console.log("before ",this);
  if(!has_flip){
    first_cart=this;
    has_flip=true;
    console.log("first cart",first_cart);
    return;
  }
      has_flip=false;
      second_cart=this;
      console.log("second cart",second_cart);
  
  if(has_flip == false){
   check_match();
  }
  

};

function check_match(){
  let ismatch =first_cart.dataset.name === second_cart.dataset.name;
  ismatch ? disabled_cart() :  remove_flip();

}


function disabled_cart(){
  first_cart.removeEventListener("click",flip_cart);
  second_cart.removeEventListener("click",flip_cart);
}

function remove_flip(){
  board_working=true;
  setTimeout(function(){
    first_cart.classList.remove("flip");
    second_cart.classList.remove("flip");
    board_working=false;
  },100);

  
}

