function untilarr(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          console.log("the number repeats many times", arr[i]);
          console.log("number position repeated many times", i);
        }
      }
    }
    console.log("length of array:", arr.length);
  }
  var arr = [9, 4, 2, 5, 5, 6, 7];
  untilarr(arr);