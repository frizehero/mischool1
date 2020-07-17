"use strict";

// Shared Colors Definition
const primary = '#6993FF';
const success = '#1BC5BD';
const info = '#8950FC';
const warning = '#FFA800';
const danger = '#F64E60';

// Class definition
function generateBubbleData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

var KTApexChartsDemo = function () {
	// Private functions
	var _demo1 = function () {
		const apexChart = "#chart_1";
		var options = {
			series: [{
				name: "Desktops",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}],
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				curve: 'straight'
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5
				},
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
			},
			colors: [primary]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo2 = function () {
		const apexChart = "#chart_2";
		var options = {
			series: [{
				name: 'series1',
				data: [31, 40, 28, 51, 42, 109, 100]
			}, {
				name: 'series2',
				data: [11, 32, 45, 32, 34, 52, 41]
			}],
			chart: {
				height: 350,
				type: 'area'
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				type: 'datetime',
				categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
			colors: [primary, success]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo3 = function () {
		const apexChart = "#chart_3";
		var options = {
			series: [{
				name: 'Net Profit',
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
			}, {
				name: 'Revenue',
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
			}, {
				name: 'Free Cash Flow',
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
			}],
			chart: {
				type: 'bar',
				height: 350
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded'
				},
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			},
			yaxis: {
				title: {
					text: '$ (thousands)'
				}
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return "$ " + val + " thousands"
					}
				}
			},
			colors: [primary, success, warning]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo4 = function () {
		const apexChart = "#chart_4";
		var options = {
			series: [{
				name: 'Marine Sprite',
				data: [44, 55, 41, 37, 22, 43, 21]
			}, {
				name: 'Striking Calf',
				data: [53, 32, 33, 52, 13, 43, 32]
			}, {
				name: 'Tank Picture',
				data: [12, 17, 11, 9, 15, 11, 20]
			}, {
				name: 'Bucket Slope',
				data: [9, 7, 5, 8, 6, 9, 4]
			}, {
				name: 'Reborn Kid',
				data: [25, 12, 19, 32, 25, 24, 10]
			}],
			chart: {
				type: 'bar',
				height: 350,
				stacked: true,
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			title: {
				text: 'Fiction Books Sales'
			},
			xaxis: {
				categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
				labels: {
					formatter: function (val) {
						return val + "K"
					}
				}
			},
			yaxis: {
				title: {
					text: undefined
				},
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val + "K"
					}
				}
			},
			fill: {
				opacity: 1
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
				offsetX: 40
			},
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo5 = function () {
		const apexChart = "#chart_5";
		var options = {
			series: [{
				name: 'Income',
				type: 'column',
				data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
			}, {
				name: 'Cashflow',
				type: 'column',
				data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
			}, {
				name: 'Revenue',
				type: 'line',
				data: [20, 29, 37, 36, 44, 45, 50, 58]
			}],
			chart: {
				height: 350,
				type: 'line',
				stacked: false
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: [1, 1, 4]
			},
			title: {
				text: 'XYZ - Stock Analysis (2009 - 2016)',
				align: 'left',
				offsetX: 110
			},
			xaxis: {
				categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			},
			yaxis: [
				{
					axisTicks: {
						show: true,
					},
					axisBorder: {
						show: true,
						color: primary
					},
					labels: {
						style: {
							colors: primary,
						}
					},
					title: {
						text: "Income (thousand crores)",
						style: {
							color: primary,
						}
					},
					tooltip: {
						enabled: true
					}
				},
				{
					seriesName: 'Income',
					opposite: true,
					axisTicks: {
						show: true,
					},
					axisBorder: {
						show: true,
						color: success
					},
					labels: {
						style: {
							colors: success,
						}
					},
					title: {
						text: "Operating Cashflow (thousand crores)",
						style: {
							color: success,
						}
					},
				},
				{
					seriesName: 'Revenue',
					opposite: true,
					axisTicks: {
						show: true,
					},
					axisBorder: {
						show: true,
						color: warning
					},
					labels: {
						style: {
							colors: warning,
						},
					},
					title: {
						text: "Revenue (thousand crores)",
						style: {
							color: warning,
						}
					}
				},
			],
			tooltip: {
				fixed: {
					enabled: true,
					position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
					offsetY: 30,
					offsetX: 60
				},
			},
			legend: {
				horizontalAlign: 'left',
				offsetX: 40
			}
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo6 = function () {
		const apexChart = "#chart_6";
		var options = {
			series: [
				{
					data: [
						{
							x: 'Analysis',
							y: [
								new Date('2019-02-27').getTime(),
								new Date('2019-03-04').getTime()
							],
							fillColor: primary
						},
						{
							x: 'Design',
							y: [
								new Date('2019-03-04').getTime(),
								new Date('2019-03-08').getTime()
							],
							fillColor: success
						},
						{
							x: 'Coding',
							y: [
								new Date('2019-03-07').getTime(),
								new Date('2019-03-10').getTime()
							],
							fillColor: info
						},
						{
							x: 'Testing',
							y: [
								new Date('2019-03-08').getTime(),
								new Date('2019-03-12').getTime()
							],
							fillColor: warning
						},
						{
							x: 'Deployment',
							y: [
								new Date('2019-03-12').getTime(),
								new Date('2019-03-17').getTime()
							],
							fillColor: danger
						}
					]
				}
			],
			chart: {
				height: 350,
				type: 'rangeBar'
			},
			plotOptions: {
				bar: {
					horizontal: true,
					distributed: true,
					dataLabels: {
						hideOverflowingLabels: false
					}
				}
			},
			dataLabels: {
				enabled: true,
				formatter: function (val, opts) {
					var label = opts.w.globals.labels[opts.dataPointIndex]
					var a = moment(val[0])
					var b = moment(val[1])
					var diff = b.diff(a, 'days')
					return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
				},
				style: {
					colors: ['#f3f4f5', '#fff']
				}
			},
			xaxis: {
				type: 'datetime'
			},
			yaxis: {
				show: false
			},
			grid: {
				row: {
					colors: ['#f3f4f5', '#fff'],
					opacity: 1
				}
			}
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo7 = function () {
		const apexChart = "#chart_7";
		var options = {
			series: [10,60,10],
			chart: {
				width: 380,
				type: 'donut',
			},
			labels: ['Dibawah 2Km','2Km - 5Km','Diatas 5Km'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 150
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo8 = function () {
		const apexChart = "#chart_8";
		var options = {
			series: [10,60,60,10],
			chart: {
				width: 500,
				type: 'donut',
			},
			labels: ['Dibawah Rp 1.000.000','Rp 1.000.000 - Rp 2.000.000','Rp 2.000.000 - Rp 3.000.000','Diatas Rp 3.000.000'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 150
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo9 = function () {
		const apexChart = "#chart_9";
		var options = {
			series: [40,20,60,10],
			chart: {
				width: 500,
				type: 'donut',
			},
			labels: ['Dibawah Rp 1.000.000','Rp 1.000.000 - Rp 2.000.000','Rp 2.000.000 - Rp 3.000.000','Diatas Rp 3.000.000'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 150
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo10 = function () {
		const apexChart = "#chart_10";
		var options = {
			series: [40,20],
			chart: {
				width: 380,
				type: 'donut',
			},
			labels: ['SMPN 1 LAWANG','SMPN 1 SINGOSARI'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo11 = function () {
		const apexChart = "#chart_11";
		var options = {
			series: [60, 30, 41, 17, 15],
			chart: {
				width: 380,
				type: 'donut',
			},
			labels: ['Islam', 'Kristen', 'Hindu', 'Budha', 'Konghucu'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo12 = function () {
		const apexChart = "#chart_12";
		var options = {
			series: [44, 55, 13, 43, 22],
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo13 = function () {
		const apexChart = "#chart_13";
		var options = {
			series: [44, 55, 67, 83],
			chart: {
				height: 350,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '22px',
						},
						value: {
							fontSize: '16px',
						},
						total: {
							show: true,
							label: 'Total',
							formatter: function (w) {
								// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
								return 249
							}
						}
					}
				}
			},
			labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
			colors: [primary, success, warning, danger]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo14 = function () {
		const apexChart = "#chart_14";
		var options = {
			series: [{
				name: 'Series 1',
				data: [80, 50, 30, 40, 100, 20],
			}, {
				name: 'Series 2',
				data: [20, 30, 40, 80, 20, 80],
			}, {
				name: 'Series 3',
				data: [44, 76, 78, 13, 43, 10],
			}],
			chart: {
				height: 350,
				type: 'radar',
				dropShadow: {
					enabled: true,
					blur: 1,
					left: 1,
					top: 1
				}
			},
			stroke: {
				width: 0
			},
			fill: {
				opacity: 0.4
			},
			markers: {
				size: 0
			},
			xaxis: {
				categories: ['2011', '2012', '2013', '2014', '2015', '2016']
			},
			colors: [primary, success, warning]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	return {
		// public functions
		init: function () {
			_demo1();
			_demo2();
			_demo3();
			_demo4();
			_demo5();
			_demo6();
			_demo7();
			_demo8();
			_demo9();
			_demo10();
			_demo11();
			_demo12();
			_demo13();
			_demo14();
		}
	};
}();

jQuery(document).ready(function () {
	KTApexChartsDemo.init();
});
