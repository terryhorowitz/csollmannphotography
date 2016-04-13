'use strict';

app.factory("Photos", function (){

    var Photos = {};

    Photos.getAll = function () {
        return { places: ['1','2','3','4','5','6','7','8','9','10','11','12']}
    }

    Photos.nextPhoto = function(currentPhoto){
        var indexOfCurrentPhoto = Photos.getAll().places.indexOf(currentPhoto);
        if (indexOfCurrentPhoto !== Photos.getAll().places.length - 1){
            return Photos.getAll().places[indexOfCurrentPhoto + 1]
        } else {
            return Photos.getAll().places[0];
        }
    }

    Photos.prevPhoto = function(currentPhoto) {
        var indexOfCurrentPhoto = Photos.getAll().places.indexOf(currentPhoto);
        if (indexOfCurrentPhoto !== 0){
            return Photos.getAll().places[indexOfCurrentPhoto - 1]
        } else {
            return Photos.getAll().places[Photos.getAll().places.length - 1];
        }
    }

    return Photos;

});
