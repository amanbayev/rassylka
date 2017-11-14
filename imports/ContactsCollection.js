import { Mongo } from 'meteor/mongo'

export const ContactsCollection = new Mongo.Collection("ContactsCollection");

if(Meteor.isServer){
  ContactsCollection.allow({
    insert: function(){
      return false;
    },
    update: function(){
      return false;
    },
    remove: function(){
      return false;
    }
  });
  ContactsCollection.deny({
    insert: function(){
      return true;
    },
    update: function(){
      return true;
    },
    remove: function(){
      return true;
    }
  });
  Meteor.publish("ContactsCollection", function(){
    return ContactsCollection.find()
  });
  Meteor.methods({
    'contacts.add':function(newContact){
       return ContactsCollection.insert(newContact);
    }
  });
}
