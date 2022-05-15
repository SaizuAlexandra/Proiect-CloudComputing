const { getLatAndLong } = require("./geoLocations");

var axios = require('axios');

function createConfig(loc, timestamp) {
    //var apikey = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    var apikey2 = "AIzaSyDfCPwO4aeF83XaXbykVIUSGcwKjCLtWgg";
    return config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/timezone/json?location=' + loc + '&timestamp=' + timestamp + '&key=' + apikey2,
        headers: { }
      };

}

async function getTimeZome(loc) {
    var geoInfo = await getLatAndLong(loc);
    var locationForTimeZoneRequest = geoInfo.lat + ", "+ geoInfo.lng;
    var targetDate = new Date() 
    var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60
    var config = createConfig(locationForTimeZoneRequest, timestamp);
    var currentTime;
    await axios(config).then(function (response) {
        if (response.status == 200){ 
            var offsets = response.data.dstOffset * 1000 + response.data.rawOffset * 1000 
            currentTime = new Date(timestamp * 1000 + offsets)
        }
        return currentTime;
    })
    .catch(function (error) {
      console.log(error);
    });

    return currentTime.toLocaleString();
}

module.exports = {
    getTimeZome
}

