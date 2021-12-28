$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  });
$( document ).ready(function() {
  var arr = [];
while(arr.length < 20){
    var r = Math.floor(Math.random() * 20) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
  for(let i = 1; i <= 21;i++){
    var val = arr[i-1];
    var url = 'img/ui'+val+'.png'; 
    var image = new Image();
    image.src = url;
    var element = document.getElementById("gallery");
    image.setAttribute("alt",val);
    image.addEventListener("click", function test(){
      var t = $(this).attr("src");
      $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
      $("#myModal").modal();
    });
    element.appendChild(image);
   }
});


