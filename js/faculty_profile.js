function faculty(name)
	{
$.ajax({

data: {name:name},
beforeSend: function()
  {
    $('#adder').load("./Faculty/ajax-loader.php");  
  },
success: function()
  { 
   $("#adder").load(name+".php");
  }
});
		
	}


function profile(name)
{
  $.ajax({

data: {name:name},
beforeSend: function() 
  {
    $('#adder').load("./Faculty/ajax-loader.php");  
  },
success: function()
  { 
  $("#adder").load("./Faculty/"+name+".php"); 
  }
});
}


$('#mymembership').click(function() {
	$('#research, #responsibility ,#project , #presentation , #publication').hide();
  $('#membership').show('slow', function() {
	  
    // Animation complete.
  });
});

$('#myresearch').click(function() {
	$('#membership, #responsibility ,#project , #presentation ,#publication').hide();
  $('#research').show('slow', function() {
    // Animation complete.
  });
});

$('#myresponsibility').click(function() {
	$('#research, #membership ,#project , #presentation ,#publication').hide();
  $('#responsibility').show('slow', function() {
    // Animation complete.
  });
});

$('#myproject').click(function() {
	$('#research, #responsibility ,#membership , #presentation ,#publication').hide();
  $('#project').show('slow', function() {
    // Animation complete.
  });
});

$('#mypresentation').click(function() {
	$('#research, #responsibility ,#project , #membership ,#publication').hide();
  $('#presentation').show('slow', function() {
    // Animation complete.
  });
});

$('#mypublication').click(function() {
	$('#research, #responsibility ,#membership , #presentation ,#project').hide();
  $('#publication').show('slow', function() {
    // Animation complete.
  });
});

