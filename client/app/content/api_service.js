// TODO: Write tests for this service!!!!!

angular.module('womenWorkingWithWomenApp')
  .factory('Api', ['$http', function($http){
    var API_BASE_URL = 'http://women-working-with-women.herokuapp.com/api/';
    return {
      // Contact Requests
      partnerRequest: function(partner){
        return $http.post(API_BASE_URL + 'partners/submit-request', partner);
      },
      contactRequest: function(request){
        return $http.post(API_BASE_URL + 'contact/submit-request', request);
      },


      // TODO: The endpoints below have not yet been tested.
      // Event Stuff
      getAllEvents: function(){
        return $http.get(API_BASE_URL + 'events/');
      },
      getOneEvent: function(_id){
        return $http.get(API_BASE_URL + 'events/' + _id);
      },
      createEvent: function(event){
        return $http.post(API_BASE_URL + 'events/', event);
      },
      updateEvent: function(_id, event){
        return $http.put(API_BASE_URL + 'events/' + _id, event);
      },
      addAttendeeToEvent: function(_id, attendee){
        return $http.put(API_BASE_URL + 'events/' + _id + '/addAttendee', attendee);
      },
      addVendorToEvent: function(_id, vendor){
        return $http.put(API_BASE_URL + 'events/' + _id + '/addVendor', vendor);
      },
      addVolunteerToEvent: function(_id, volunteer){
        return $http.put(API_BASE_URL + 'events/' +_id + '/addVolunteer', volunteer);
      },
      deleteEvent: function(_id){
        return $http.delete(API_BASE_URL + 'events/' + _id);
      },

      // Volunteer Stuff
      getAllVolunteers: function(){
        return $http.get(API_BASE_URL + 'volunteers/');
      },
      getOneVolunteer: function(_id){
        return $http.get(API_BASE_URL + 'volunteers/' + _id);
      },
      getOneVolunteerByProperties: function(properties){
        var params = properties.firstName + "/" + properties.lastName + "/" + properties.email;
        return $http.get(API_BASE_URL + 'volunteers/properties/' + params);
      },
      createVolunteer: function(volunteer){
        return $http.post(API_BASE_URL + 'volunteers/', volunteer);
      },
      updateVolunteer: function(_id, volunteer){
        return $http.put(API_BASE_URL + 'volunteers/' + _id, volunteer);
      },
      deleteVolunteer: function(_id){
        return $http.delete(API_BASE_URL + 'volunteers/' + _id);
      },

      // Volunteer Stuff
      getAllTutors: function(){
        return $http.get(API_BASE_URL + 'tutors/');
      },
      getOneTutor: function(_id){
        return $http.get(API_BASE_URL + 'tutors/' + _id);
      },
      getOneTutorByProperties: function(properties){
        var params = properties.firstName + "/" + properties.lastName + "/" + properties.email;
        return $http.get(API_BASE_URL + 'tutors/properties/' + params);
      },
      createTutor: function(tutor){
        return $http.post(API_BASE_URL + 'tutors/', tutor);
      },
      updateTutor: function(_id, tutor){
        return $http.put(API_BASE_URL + 'tutors/' + _id, tutor);
      },
      deleteTutor: function(_id){
        return $http.delete(API_BASE_URL + 'tutors/' + _id);
      },

      // Attendee Stuff
      getAllAttendees: function(){
        return $http.get(API_BASE_URL + 'attendees/');
      },
      getOneAttendee: function(_id){
        return $http.get(API_BASE_URL + 'attendees/' + _id);
      },
      getOneAttendeeByProperties: function(properties){
        var params = properties.firstName + "/" + properties.lastName + "/" + properties.email;
        return $http.get(API_BASE_URL + 'attendees/properties/' + params);
      },
      createAttendee: function(attendee){
        return $http.post(API_BASE_URL + 'attendees/', attendee);
        // return $http({
        //   url: API_BASE_URL + 'attendees/',
        //   method: "POST",
        //   data: attendee
        // });
      },
      updateAttendee: function(_id, attendee){
        return $http.put(API_BASE_URL + 'attendees/' + _id, attendee);
      },
      deleteAttendee: function(_id){
        return $http.delete(API_BASE_URL + 'attendees/' + _id);
      },
      emailAttendee: function(attendee){
        return $http.post(API_BASE_URL + 'attendees/email-confirmation', attendee);
      },

      // Vendor Stuff
      getAllVendors: function(){
        return $http.get(API_BASE_URL + 'vendors/');
      },
      getOneVendor: function(_id){
        return $http.get(API_BASE_URL + 'vendors/' + _id);
      },
      getOneVendorByProperties: function(properties){
        var params = properties.email;
        return $http.get(API_BASE_URL + 'vendors/properties/' + params);
        console.log("Works");
      },
      createVendor: function(vendor){
        return $http.post(API_BASE_URL + 'vendors/', vendor);
      },
      updateVendor: function(_id, vendor){
        return $http.put(API_BASE_URL + 'vendors/' + _id, vendor);
      },
      deleteVendor: function(_id){
        return $http.delete(API_BASE_URL + 'vendors/' + _id);
      },
      emailVendor: function(vendor){
        return $http.post(API_BASE_URL + 'vendors/email-confirmation', vendor);
      },

      // Donation Stuff
      getAllDonations: function(){
        return $http.get(API_BASE_URL + 'donations/');
      },
      getOneDonation: function(_id){
        return $http.get(API_BASE_URL + 'donations/' + _id);
      },
      createDonation: function(donation){
        return $http.post(API_BASE_URL + 'donations/', donation);
      },
      updateDonation: function(_id, donation){
        return $http.put(API_BASE_URL + 'donations/' + _id, donation);
      },
      deleteDonation: function(_id){
        return $http.delete(API_BASE_URL + 'donations/' + _id);
      }
    }
}]);
