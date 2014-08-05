'use strict';

app.factory('Post', function($resource) {
  return $resource('https:blinding-fire-99999.firebaseIO.com/posts/:id.json');
});