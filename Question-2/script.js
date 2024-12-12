
function start() {
    gapi.client.init({
      'apiKey': 'AIzaSyA-ExampleApiKey1234567890abcd', //API key
      'clientId': '1234567890-abcdefg12345678.apps.googleusercontent.com', //client ID
      'scope': 'https://www.googleapis.com/auth/calendar.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
    }).then(function () {

      if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        listBusyIntervals();
      } else {
        gapi.auth2.getAuthInstance().signIn().then(listBusyIntervals);
      }
    });
  }
  
  function loadClient() {
    gapi.load('client:auth2', start);
  }
  
  function listBusyIntervals() {
    var calendarId = 'primary'; 
  
    var startTime = new Date('2024-12-01T00:00:00Z').toISOString(); 
    var endTime = new Date('2024-12-10T23:59:59Z').toISOString(); 
  
    var request = gapi.client.calendar.freebusy.query({
      "timeMin": startTime,
      "timeMax": endTime,
      "timeZone": "UTC",
      "items": [{"id": calendarId}]
    });
  
    request.execute(function(response) {

      if (response.error) {
        console.error('Error fetching calendar data:', response.error);
      } else {
        var busyIntervals = response.calendars[calendarId].busy;
        console.log('Busy Intervals:', busyIntervals);
        displayBusyIntervals(busyIntervals);
      }
    });
  }
  
 
  function displayBusyIntervals(intervals) {
    if (intervals && intervals.length > 0) {
      intervals.forEach(function(interval) {
        console.log('Start:', interval.start, 'End:', interval.end);
      });
    } else {
      console.log('There is No busy intervals found.');
    }
  }
  