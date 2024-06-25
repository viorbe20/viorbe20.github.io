am5.ready(function() {
    
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("languages-graph");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      layout: root.verticalLayout
    }));
    
    
    // Data
    var colors = chart.get("colors");
    
    var data = [{
      country: "Español",
      visits: 100,
      icon: "https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428_1280.png",
      columnSettings: { fill: colors.next() }
    }, {
        country: "Inglés",
        visits: 98,
        icon: "https://cdn.pixabay.com/photo/2022/06/01/16/18/kingdom-7236145_1280.png",
        columnSettings: { fill: colors.next() }
    }, {
      country: "Portugués",
      visits: 99,
      icon: "https://cdn.pixabay.com/photo/2013/07/13/14/16/portugal-162394_1280.png",
      columnSettings: { fill: colors.next() }
    }];
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "country",
      renderer: xRenderer,
      bullet: function (root, axis, dataItem) {
        return am5xy.AxisBullet.new(root, {
          location: 0.5,
          sprite: am5.Picture.new(root, {
            width: 24,
            height: 24,
            centerY: am5.p50,
            centerX: am5.p50,
            src: dataItem.dataContext.icon,
          })
        });
      }
    }));
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xRenderer.labels.template.setAll({
      paddingTop: 20
    });
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "visits",
      categoryXField: "country"
    }));
    
    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      tooltipY: 0,
      strokeOpacity: 0,
      templateField: "columnSettings"
    });
    
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);
    
    }); // end am5.ready()