import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 300);

$(document).ready(function() {
  $('#startButton').on('click', debouncedUpdateCounter);
});
