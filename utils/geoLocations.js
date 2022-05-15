var axios = require('axios');

async function getLatAndLong(locationName){
    var config = createConfigForGeoCode(locationName);
    var info = {};
    await axios(config).then(function (response) {
        if (response.status == 200 || response.status == 'OK'){ 
            info.lat = JSON.stringify(response.data.results[0].geometry.location.lat);
            info.lng = JSON.stringify(response.data.results[0].geometry.location.lng);
        }
        return info;

    })
    .catch(function (error) {
      console.log(error);
    });
    return info;
}

function createConfigForGeoCode(locationName) {
    var apikey2 = "AIzaSyDfCPwO4aeF83XaXbykVIUSGcwKjCLtWgg";
    return config = {
        method: 'get',
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${apikey2}`,
        headers: { }
      };

}
module.exports = {
    getLatAndLong
}