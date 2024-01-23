var link = "";
function val(id){
	return $("#"+id).val();
}
function senddata(data){
	//$("iframe").attr("src",$("#webhookurl").val()+data);
	$.get($("#webhookurl").val()+data);
}
$(document).ready(function(){
	$(".title").append("<br>");
	$("button").before("<br>");
	$(".xy").trigger("click");
	$("#simple").trigger("click");
	$("iframe").hide();
})
$(".xy").click(function(){
	$("section").hide();
	$("#xy").show();
	$("[type='button']").removeClass("selected");
	$(this).addClass("selected");
})
$(".text").click(function(){
	$("section").hide();
	$("#text").show();
	$("[type='button']").removeClass("selected");
	$(this).addClass("selected");
})
$(".gesture").click(function(){
	$("section").hide();
	$("#gesture").show(); 
	$("[type='button']").removeClass("selected");
	$(this).addClass("selected");
})
$(".id").click(function(){
	$("section").hide();
	$("#id").show();
	$("[type='button']").removeClass("selected");
	$(this).addClass("selected");
})
$("#advanced").click(function(){
	$("#advancedvar").show();
	$("#simplevar").hide();
})
$("#simple").click(function(){
	$("#simplevar").show();
	$("#advancedvar").hide();
})



$("#webhookurl").keypress(function(event) {
    if (event.which === 13) { // 13 is the keycode for the Enter key
        event.preventDefault();
        $("#websaver").click();
    }
});



$("#websaver").click(function () {
    if ($("#webhookurl").val()) {
        var enteredUrl = $("#webhookurl").val();
        var desiredStart = "https://trigger.macrodroid.com/";
        var desiredEnd = "Enablethewebhook";

        if (enteredUrl.startsWith(desiredStart) && enteredUrl.endsWith(desiredEnd)) {
            // The entered URL is valid, proceed with your logic
            link = enteredUrl;
            $(".modalDialog").hide(150);
        } else {
            // The entered URL is not valid
            $("#warning").css("color", "black");
            $("#warning").css("text-shadow", "0px 2px 4px red");
            $("#warning").text("Invalid Webhook URL. It should start with 'https://trigger.macrodroid.com' and end with 'Enablethewebhook'.");
        }
    } else {
        $("#warning").css("color", "black");
        $("#warning").css("text-shadow", "0px 2px 4px red");
        $("#warning").text("Please Enter Webhook URL Before Proceeding...");
    }
})


function confirmUnlock() {
	var confirmation = confirm("Are you sure you want to unlock Your Phone?");
	if (confirmation) {
	  senddata('?Tempvar=ZUNLOCK');
	} else {nothing
	  // User clicked Cancel, do 
	}
  }


