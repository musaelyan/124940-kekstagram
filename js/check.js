function getMessage(a,b) {
  if (a === true) {
    console.log("Переданное GIF-изображение анимировано и содержит " + b + " кадров");
  }
  if (a === false) {
    console.log("Переданное GIF-изображение не анимировано");
  }
  if (typeof(a) === "number") {
    console.log("Переданное SVG-изображение содержит " + a + " объектов и " + b*4 + " аттрибутов");
  }
  if (a instanceof Array === true && b instanceof Array === false) {
      var sum = 0;
      for (var i = 0; i < a.length; i++) {
        sum += a[i];
        };
    console.log("Количество красных точек во всех строчках изображения: " + sum);
  }
  if (a instanceof Array === true && b instanceof Array === true) {
    var square = 0;
    for (var i = 0; i < a.length; i++) {
      square += a[i]*b[i];
      };
  console.log("Общая площадь артефактов сжатия: " + square + " пикселей");
  }
} ;
