/**
 * Created by User on 8/27/15.
 */
$(document).ready(function(){
   $('.remove').on('click',function(){
      var id = (this).id ;
      id = id.substring(6);
      var travelID = "travel" + id ;
      console.log(travelID);
      (document).getElementById(travelID).remove();
//      $.remove(item);
       console.log("finish");
   });
});