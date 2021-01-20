$(document).ready(function(){
	var slno = 1;
  $(".btn-green").click(function(e){
  	e.preventDefault();
  	
  	if($("#firstname").val()!=""||$("#lastname").val()!=""){
  		$(".table tbody").append('<tr> <td></td> <td class="firstnamedata">'+$("#firstname").val()+'</td> <td class="lastnamedata">'+$("#lastname").val()+'</td> <td> <a href="#" class="btn btn-blue">Edit</a> <a href="#" class="btn btn-red">Delete</a> </td> </tr>');
  		$("#firstname").val("")
  		$("#lastname").val("")
  		updateNumbers()
  		slno = slno + 1;
  	}
  })
  $(document).on("click",".btn-red", function(e){
  	e.preventDefault();
  	$(this).closest("tr").remove()
  	updateNumbers()
  	slno = slno - 1;
  })
  function updateNumbers(){
  	for(i=1;i<=slno;i++){
  		$(".table tbody tr:nth-child("+i+")").attr("id", i);
  		$(".table tbody tr:nth-child("+i+") td:nth-child(1)").html(i)
  	}
  }
  $(document).on("click", ".btn-blue", function(e){
  	e.preventDefault();
  	$(".overlay-section").removeClass("hide");
  	var rownumber = $(this).closest("tr").attr("id")
  	var firstnamevalue = $("#"+rownumber+" .firstnamedata").html();
  	var lastnamevalue = $("#"+rownumber+" .lastnamedata").html();
  	$("#firstnameedit").val(firstnamevalue)
  	$("#lastnameedit").val(lastnamevalue)
  	$(".btn-orange").attr("target", rownumber)
  })
  $(document).on("click", ".btn-lblue", function(e){
  	e.preventDefault();
  	$(".overlay-section").addClass("hide");
  	$("#firstnameedit").val("")
  	$("#lastnameedit").val("")
  })
  $(document).on("click", ".btn-orange", function(e){
  	e.preventDefault();
  	if($("#firstnameedit").val()!=""||$("#lastnameedit").val()!=""){
  		$(".overlay-section").addClass("hide");
	  	var rownumber = $(this).attr("target");
	  	$("#"+rownumber+" .firstnamedata").html($("#firstnameedit").val());
	  	$("#"+rownumber+" .lastnamedata").html($("#lastnameedit").val());
	  	$("#firstnameedit").val("")
	  	$("#lastnameedit").val("")
  	}
  	
  })
  $(document).on("keyup", "#search", function(){
  	var val = $(this).val().toLowerCase();
  	$(".table tbody tr").filter(function(){
  		$(this).toggle($(this).text().toLowerCase().indexOf(val) > -1);
  	})
  })
});