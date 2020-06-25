import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Haiku } from './../src/haiku.js';

$(document).ready(function() {
  $("#haiku-form").submit(function(event) {
    event.preventDefault();
    const firstLine = $("#line1").val();
    const secondLine = $("#line2").val();
    const thirdLine = $("#line3").val();
    let haiku = new Haiku(firstLine, secondLine, thirdLine);
    if (haiku.checkSyllables("line1") === 5 && haiku.checkSyllables("line2") === 7 && haiku.checkSyllables("line3") === 5) {
      $("#results-container").append(`<div><h3>${firstLine}</h3></div>`);
      $("#results-container").append(`<div><h3>${secondLine}</h3></div>`);
      $("#results-container").append(`<div><h3>${thirdLine}</h3></div>`);
    } else {
      $("#results-container").text("Your entry is not a Haiku!");
    }
  });
});