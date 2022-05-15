# Proiect-CloudComputing

## Saizu Alexandra
## Grupa 1119
## Link youtube: https://youtu.be/4tgsDXGh65k
## Link GitHub (FrontEnd+Backend) :https://github.com/SaizuAlexandra
## Link Publicare: https://main.dh86i5331h6tv.amplifyapp.com/

# **Time zone for a specific location**
Time zone for a specific location este o aplicație care permite utilizatorului să adauge o locație și ii este returnat fusul orar pentru locația introdusă.


## **Cuprins**
* [I. Introducere](#I.-Introducere)
* [II. Descriere problemă](#II.-Descriere-problemă)
* [III. Descriere API](#III.-Descriere-API)
    * [1. Geolocation API](#1.- Geocoding-API)
    * [2. TimeZone API](#2.- TimeZone-API)
* [IV. Flux de date](#IV.-Flux-de-date)
   
* [V. Capturi de ecran aplicație](#V.-Capturi-de-ecran-aplicație)
* * [VI. Referințe](#V.-Referințe)


## **I. Introducere**
Aplicația este de tip Single-Page Application. Accesul la date este permis prin partea de backend prin intermediul celor două API (Geocoding și TimeZone). Scopul aplicației este de a afișa fusul orar pentru locația introdusă de utilizator.

## **II. Descriere problemă**
M-am gândit ca prin intermediul acestei aplicații să putem afla mai repede fusul orar pentru locațiile care ne interesează. Această aplicație ne ajută să urmărim ușor toate regiunile din lume. Prin intermediul acestei aplicații putem rezolva probleme cotidiene existente, cum ar fi cea a decalajului fusului orar. Astfel, ne putem plănui vacanțele mult mai bine și ne putem contacta prietenii din diferite zone cu fus orar diferit de cel al nostru.

## **III. Descriere API**

### [**1. Geocoding API**]

Acesta este un serviciu web care convertește locația în coordonate de latitudine/longitudine și invers. 

Call API: "AIzaSyDfCPwO4aeF83XaXbykVIUSGcwKjCLtWgg"
 
Response API: `"https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${apikey2}"`

### [**2.TimeZone API**]

Time Zone API oferă o interfață simplă pentru a solicita fusul orar pentru locațiile de pe suprafața pământului, precum și decalajul orar față de UTC pentru fiecare dintre acele locații. 

Call API: "AIzaSyDfCPwO4aeF83XaXbykVIUSGcwKjCLtWgg"

Response API: `"https://maps.googleapis.com/maps/api/timezone/json?location=' + loc + '&timestamp=' + timestamp + '&key=' + apikey"`

## **IV. Flux de date**

Request API: `" https://maps.googleapis.com/maps/api/geocode/json?address=Paris&key=AIzaSyDfCPwO4aeF83XaXbykVIUSGcwKjCLtWgg"`

Response: "{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "Paris",
               "short_name" : "Paris",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Paris",
               "short_name" : "Paris",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Île-de-France",
               "short_name" : "IDF",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Franţa",
               "short_name" : "FR",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Paris, Franţa",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 48.9021475,
                  "lng" : 2.4698509
               },
               "southwest" : {
                  "lat" : 48.8155622,
                  "lng" : 2.2242191
               }
            },
            "location" : {
               "lat" : 48.856614,
               "lng" : 2.3522219
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.9021475,
                  "lng" : 2.4698509
               },
               "southwest" : {
                  "lat" : 48.8155622,
                  "lng" : 2.2242191
               }
            }
         },
         "place_id" : "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
         "types" : [ "locality", "political" ]
      }
   ],
   "status" : "OK"
}
"


	##Aceste Api-uri sunt preluate de pe platforma GoogleCloud, pentru a avea acces la aceste key a trebuit sa imi creez un cont de utilizator.

##Capturi de ecran:
(Pagina de intampinare)
  
![CC_1](https://user-images.githubusercontent.com/105069983/168489202-2ce51924-ddae-449e-8199-e6490f34be81.png)

(Rezultat)
 
![CC_2](https://user-images.githubusercontent.com/105069983/168489235-a5537ac9-1895-4390-a5b0-cff3d6c8a0e4.png)

###Referinte

`"https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com?project=plated-field-349507"`
`"https://console.cloud.google.com/apis/library/timezone-backend.googleapis.com?project=plated-field-349507"`


