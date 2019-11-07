

// $(document).ready(function(){
//     $("#btn").click(function () { 
//         var item = $("#text").val();
//         if(item == 1){
//             $('#mydiv').html("<h1>Fruits</h1><ul><li>mango</li><li>apple</li></ul>")
//         }
//        else if(item == 2){
//             $('#mydiv').html("<h1>car</h1><ul><li>hyundai</li><li>maruti</li></ul>")
//         }else if(item == 3)
//         {
//             $("#mydiv").html("<h2>Bikes</h2><ul><li>Ducati</li><li>Apprilea</li><li>Hond</li></ul>")
//         }
//         else{
//             $("#mydiv").html("not found in list")
//         }
//      })


// });


// $(document).ready(function () {
//     $("input").change(function () { 
//         if($("#chkbox1").is(':checked')==true){
//             $('#mydiv').html("<h1>Fruits</h1><ul><li>mango</li><li>apple</li></ul>");
//         }
//         else if($('#chkbox2').is(':checked') ==true){
//             $('#mydiv').html("<h1>car</h1><ul><li>hyundai</li><li>maruti</li></ul>");
//         }
//         else{
//             $("#mydiv").html("not found in list");
//         }
//     });
// });
       
      
$(document).ready(function(){
    $("input[type = 'radio']").change(function(){
        mydiv($(this).val());

    })

  
})