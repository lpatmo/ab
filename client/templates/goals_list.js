Template.goalsList.helpers({
    goals: function() { 
		return Goals.find();
	},
	start: function() {
		return moment(this.start).format('dddd MMM D, YYYY')
	},
	end: function() {
		return moment(this.start).format('dddd MMM D, YYYY')
	}
});

