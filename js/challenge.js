//incriment by 1 every second
let i=0;
let counter=document.getElementById("counter");
setInterval(function(){
counter.innerHTML=`${i++}`;
}, 1000);


minus=document.getElementById('minus');
minus.addEventListener("click", function(){
  i -= 1;
  counter.innerHTML = parseInt(counter.innerHTML) - 1
})

plus=document.getElementById("plus");
plus.addEventListener('click', function(event) {
counter.innerText=`${i}` ;

});

let likes= document.getElementById('heart');
likes.addEventListener('click', function(event) {
  let like = document.querySelector(".likes")
  let li = document.getElementById(`Li${i}`)
      let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
      li.innerHTML = `${i} have this many likes:${splitted}`
      like.appendChild(li)
});
