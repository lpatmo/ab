Goals = new Mongo.Collection('goals');

Goals.attachSchema(new SimpleSchema({
  goal: {
    type: String,
    label: "Goal",
    max: 200
  },
  start: {
    type: Date,
    label: "Start Date"
  },
  end: {
    type: Date,
    label: "End Date"
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
      autoform: {
   		 rows: 6
  	}
  },
  cause: {
    type: String,
    label: "Please donate all pledges to:",
    optional: true,
    max: 200
  }
}));