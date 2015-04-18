<<<<<<< Updated upstream
Template.postsDaily.helpers({
=======
  Template.postsDaily.helpers({
>>>>>>> Stashed changes
	getDay:function(date) {
		var time = new Date();
		var diff = (time - date)/(24*60*60*1000);
		if (diff <= 1) {
<<<<<<< Updated upstream
			return 'THE SKUX OF THE DAY';
=======
			return 'COMICS OF THE DAY';
>>>>>>> Stashed changes
		} else if (diff <=2 ) {
			return 'YESTERDAY';
		}
		return moment(date).format("dddd").toUpperCase();
	}
})