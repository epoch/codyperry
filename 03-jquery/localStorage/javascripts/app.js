// check if database exist, if not, create one
if (!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', JSON.stringify([]));
}

function newTask(text) {
  var tasks = JSON.parse( localStorage.getItem('tasks') );
  tasks.push(text);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  var $tasks = $('#tasks');
  var $newTask = $('<li>').html(text);
  $tasks.append($newTask);
}

function toggleComplete(taskElem) {
  var $taskElem = $(taskElem);
  var $completedTask = $('<li>').html($taskElem.html());
  $taskElem.remove();   
  $('.completed-tasks').append($completedTask);
}

$(document).ready(function(){

  console.log('good to go');

  var tasks = JSON.parse( localStorage.getItem('tasks') );

  $.each(tasks, function(index, elem) {
    var $tasks = $('#tasks');
    var $newTask = $('<li>').html(elem);
    $tasks.append($newTask);
  });

  // addEventListener()
  $('form').on('submit', function(event) {
    event.preventDefault();
    
    var $newTask = $('form input');
    newTask($newTask.val());
    $newTask.val('');
  }); 

  // event delegation
  $('#tasks').on('click', 'li', function() {
    // grab inner text of the clicked li
    var grabbedText = $(this).html();  // this.innerHTML

    // remove list item from #tasks
    $(this).remove();

    // create a new list item elem and set the html
    // to the grabbed text
    var $newListItem = $('<li></li>').html(grabbedText);

    // append $newListItem to .completed-task
    $newListItem.appendTo('.completed-tasks');

    // $('.completed-task').append($newListItem);  if this makes you happy

  }); 

});