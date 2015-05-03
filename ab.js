if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.goalsList.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.goalsList.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  //npm
  getSimplify = function getSimplify() {
    Meteor.call('getSimplify');
  }



}

if (Meteor.isServer) {
 

  Meteor.methods({
    'getSimplify': function getSimplify() {
      var Simplify = Meteor.npmRequire('simplify-commerce');
            client = Simplify.getClient({
                publicKey: 'sbpb_NTM4N2M1NzgtNDEzNC00OGE4LWFiZmQtNDRhZGY0NGM0NmUy',
                privateKey: 'gfGti6SoN1L1H3O7R9qprli32tIE+4Dy5KlHh588QPp5YFFQL0ODSXAOkNtXTToq'
            }); 
            client.payment.create({
                amount : "1000",
                token : data["id"],
                description : "payment description",
                reference : "7a6ef6be31",
                currency : "USD"
            }, function(errData, data){
             
                if(errData){
                    console.error("Error Message: " + errData.data.error.text);
                    // handle the error
                    return;
                }
             
                console.log("Payment Status: " + data.paymentStatus);
            });
    }
  });
}



