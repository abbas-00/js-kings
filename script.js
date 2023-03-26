var posts =
 [
    ["img/306.jpg","https://instagram.com/abbas_cgi7","▼▼عباس","black"],
["img/7842.jpg","https://instagram.com/roronoadon","▼▼دوني ","#973535"],
["img/8750.jpg","https://instagram.com/husien_stark","▼▼حماقي","black"],
["img/1602.jpg","https://instagram.com/lo1.f","▼▼سيد","black"],
["img/8125.jpg","https://instagram.com/ka_cgi","▼▼كري","black"],


]
console.log (posts)
var content = document.getElementById("content")
posts.forEach(post =>{ 
    content.innerHTML = content.innerHTML +
     `<article>
     <h2 style ="background:linear-gradient(45deg, black, #973535)
      ${post[3]} ">${post[2]} </h2>
     <a href="${post[1]}"> <img src ="${post[0]}"width = "100%"/> </a> <article>`

})