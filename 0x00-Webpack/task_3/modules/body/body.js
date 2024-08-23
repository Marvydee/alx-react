import $ from "jquery";
import _ from "lodash";
import "./body.css";

$("body").append(
  "<button>Click here to get started</button><p id='count'></p>"
);

let count = 0;
function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
  console.log(count);
}

$("button").on("click", _.debounce(updateCounter, 300));
