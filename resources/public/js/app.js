function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

function startPeriodicMapUpdate() {
    setInterval(function() {
        document.getElementById('worldMap').src = '/map.png?rand=' + Math.random();
    }, 18000);
}
function startPeriodicNewsUpdate() {
    setInterval(function() {
        addNews("n"+Math.random());
    }, 3000);
}

function initApp() {
    startPeriodicMapUpdate();
    startPeriodicNewsUpdate();
}

var lastNewsNumber = 0;
function addNews(message) {
  newsSelect = document.getElementById('newsList');
  var toSelectLast = false
  if (newsSelect.options[newsSelect.options.length-1].selected) {
      toSelectLast=true
  }
  $.getJSON('/history/since/' + lastNewsNumber, function(jsonData) {
    lastNewsNumber = jsonData[0]
    for (i=0; i<jsonData[1].length; i++) {
        data = jsonData[1][i];
        newsSelect.options[newsSelect.options.length] = new Option(data.msg, 'v_' + message);
    }
    if (toSelectLast) {
        newsSelect.options[newsSelect.options.length-1].selected = true
    }
  });
}
