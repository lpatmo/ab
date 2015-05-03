Meteor.startup(function () {
Template.submit.events({'submit #submit-goals': function() {
       Router.go('home');
}
});
});