/*  chart 01
-------------------------------------------------------*/
var ctx = document.getElementById("myLineChart01");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['0:00', '2:00',　'4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    datasets: [{
        label: 'BTC',
        data: [3500000,3700000,3800000,4100000,4000000,3900000,4200000,4000000,3900000,4000000,4200000,4000000,4300000],
        borderColor: "#00c068",
        backgroundColor: "rgba(175,237,221,0.2)", 
        lineTension: 0,
        borderWidth: 3
      }
    ]
  },
  options: {
       legend: {
          display: false
       },
       elements: {
        point:{
        radius: 0
        }
      }
  }
});
/*  chart 02
-------------------------------------------------------*/
var ctx = document.getElementById("myLineChart02");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['08/01', '08/02', '08/03', '08/04', '08/05', '08/06', '08/07'],
    datasets: [{
        label: 'BTC',
        data: [3500000,3200000,4000000,4500000,4000000,3700000,4200000,4300000],
        borderColor: "#00c068",
        backgroundColor: "rgba(175,237,221,0.2)", 
        lineTension: 0,
        borderWidth: 3
      }
    ]
  },
  options: {
    legend: {
       display: false
    },
    elements: {
     point:{
     radius: 0
     }
   }
}
});
/*  chart 03
-------------------------------------------------------*/
var ctx = document.getElementById("myLineChart03");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['8/1', '8/3', '8/6', '8/9', '8/12', '8/15', '8/18', '8/21', '8/24', '8/27', '8/30'],
    datasets: [{
        label: 'BTC',
        data: [3200000,3100000,4000000,4200000,4000000,3700000,4200000,4300000,4000000,3700000,4200000],
        borderColor: "#00c068",
        backgroundColor: "rgba(175,237,221,0.2)", 
        lineTension: 0,
        borderWidth: 3
      }
    ]
  },
  options: {
    legend: {
       display: false
    },
    elements: {
     point:{
     radius: 0
     }
   }
}
});
/*  chart 04
-------------------------------------------------------*/
var ctx = document.getElementById("myLineChart04");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2021/01', '2021/02', '2021/03', '2021/04', '2021/05', '2021/06', '2021/07', '2021/08', '2021/09', '2021/10', '2021/11', '2021/12'],
    datasets: [{
        label: 'BTC',
        data: [3500000,3200000,4000000,4500000,4000000,3700000,4200000,4300000,4000000,3700000,4200000,4300000],
        borderColor: "#00c068",
        backgroundColor: "rgba(175,237,221,0.2)", 
        lineTension: 0,
        borderWidth: 3
      }
    ]
  },
  options: {
    legend: {
       display: false
    },
    elements: {
     point:{
     radius: 0
     }
   }
}
});