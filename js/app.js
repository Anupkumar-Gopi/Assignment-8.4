"use strict";

var yurl = "http://www.yahoo.com"; // url
var ytitle = "Go to Yahoo.com website"; // title
var yariaL = "Click or Enter to proceed to Yahoo.com website"; // aria-label
var yahoo = "Yahoo"; // text
$(document).ready(
	$("#chngurl").on("click",function(){ // change url function
		$("#link").attr("href",yurl)
				  .attr("title",ytitle)
				  .attr("aria-label",yariaL)
				  .text(yahoo);
	}));