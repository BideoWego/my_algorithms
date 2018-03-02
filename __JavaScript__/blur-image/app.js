$(document).ready(function() {
  
  var $canvas = $('#canvas');
  var context = $canvas.get(0).getContext('2d');
  var $img = $('#image');

  $img.on('load', function() {
    
    context.drawImage($img.get(0), 0, 0 );
    
    var data = context.getImageData(0, 0, $img.width(), $img.height());
    var pixels = [];
    var i = 0;
    
    for (var i = 0; i < data.data.length; i += 4) {
      var row;
     
      if (i % $img.width() === 0) {
        row = [];
      }
     
      var r = data.data[i];
          g = data.data[i + 1],
          b = data.data[i + 2],
          a = data.data[i + 4];
      row.push([r, g, b, a])
     
      if (i % ($img.width() - 1) === 0) {
        pixels.push(row);
      }
    }

    console.log($img.width(), pixels.length);

    var imageData = context.createImageData($img.width(), $img.height());

    for (var y = 1; y < pixels.length; y++) {
      for (var x = 1; x < $img.width(); x += 3) {

        var center = pixels[y][x];
        var r = center[0],
            g = center[1],
            b = center[2],
            a = center[3];
        var average = (r + g + b + a) / 4;

        var p = function(x, y, rgba) {
          return ($img.width() * y) + x +
            ['r', 'g', 'b', 'a'].indexOf(rgba);
        };

        [
          [x - 1, y - 1],
          [x, y - 1],
          [x + 1, y - 1],
          [x + 1, y],
          [x + 1, y + 1],
          [x, y + 1],
          [x - 1, y + 1],
          [x - 1, y]
        ].forEach(function(coords) {
          ['r', 'g', 'b', 'a'].forEach(function(channel) {
            var ix = coords[0],
                iy = coords[1];
            imageData.data[p(ix, iy, channel)] = average;
          });
        });
      }
    }

    context.clearRect(0, 0, $img.width(), $img.height());

    console.log(imageData.data.length, data.data.length);

    context.putImageData(imageData, $img.width(), $img.height());
    // var id = context.createImageData(100, 100);
    // var i = 0;
    // while (i < id.data.length) {
    //   id.data[i + 0] = 255;
    //   id.data[i + 1] = 0;
    //   id.data[i + 2] = 0;
    //   id.data[i + 3] = 255;
    //   i += 4;
    // }
    // context.putImageData(id, 100, 100);
  });
});

