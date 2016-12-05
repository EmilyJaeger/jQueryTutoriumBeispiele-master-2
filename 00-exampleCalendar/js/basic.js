$(document).ready(function() {
	
	$('#calendar').fullCalendar({
        weekends: false,
        dayClick: function() {
        	alert('HAALLOOO!');
    	}
    })

})