  Template.goalUpdates.helpers({
    messages: function () {
      return Messages.find({}, {
        sort: { timestamp: -1 }
      });
    }
  });