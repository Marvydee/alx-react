import $ from "jquery";
import _ from "lodash";

const elements = [
  "<p>Holberton Dashboard</p>",
  "<p>Dashboard data for the students</p>",
  "<button>Click here to get started</button>",
  "<p id='count'></p>",
  "<p>Copyright - Holberton School</p>",
];
$("body").append.apply($("body"), elements);

let count = 0;
function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
  console.log(count);
}

$("button").on("click", _.debounce(updateCounter, 300));
