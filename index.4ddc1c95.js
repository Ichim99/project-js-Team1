$(document).ready((function(){function e(e){return new Promise((function(t,n){fetch("https://app.ticketmaster.com/discovery/v2/events/".concat(e,".json?apikey=N7FCeNuTwKBillrRlUtN6okNTN2WqI0N")).then((function(e){if(e.ok)return e.json();throw new Error("Failed to fetch additional details")})).then((function(e){t(e)})).catch((function(e){n(e)}))}))}MicroModal.init(),$(document).on("click",".event",(function(){e($(this).data("event-id")).then((function(t){!function(t){if($(".modal__top_image").html('<img src="'+t.images[0].url+'">'),$("#modal-1-content .event__image").html('<img src="'+t.images[0].url+'">'),$(".event__info_tilte").text(t.name),$(".event__info").text(t.info),$(".event__start_date").text(t.dates.start.localDate),$(".event__place").text(t._embedded.venues[0].name),t._embedded&&t._embedded.attractions&&t._embedded.attractions.length>0){var n=t._embedded.attractions.map((function(e){return e.name})).join(", ");$(".event__who").text(n)}else $(".event__who").text("Information not available");if(t.priceRanges&&t.priceRanges.length>0){var i="";t.priceRanges.forEach((function(e){i+="".concat(e.type,": ").concat(e.min," - ").concat(e.max," ").concat(e.currency,", ")})),$(".event__prices").text(i.slice(0,-2))}else $(".event__prices").text("Prices information not available");e(t.id).then((function(e){$(".event__additional_details").html("<p>"+e.additionalDetails+"</p>")})).catch((function(e){console.error("Error fetching additional event details:",e)})),MicroModal.show("modal-1")}(t)})).catch((function(e){console.error("Error fetching event details:",e)}))}))}));
//# sourceMappingURL=index.4ddc1c95.js.map