import { onMounted, onUnmounted } from 'vue';
import $ from 'jquery';
import Raphael from 'raphael';
import 'morris.js/morris.css';

// GẮN jQuery và Raphael vào global để Morris dùng được
(window as any).jQuery = $;
(window as any).$ = $;
(window as any).Raphael = Raphael;

// Import Morris SAU khi gắn global
import 'morris.js/morris.js';
import * as Morris from 'morris.js/morris.js';

export function useMorrisChart() {
  const charts: any[] = [];

  const initCharts = () => {
    // === Bar Chart ===
    const barElement = document.getElementById('morris-bar-example');
    if (barElement) {
      const barChart = (Morris as any).Bar({
        element: 'morris-bar-example',
        barColors: ['#ebeef1', '#20b799'],
        data: [
          { y: '2010', a: 80, b: 100 },
          { y: '2011', a: 110, b: 130 },
          { y: '2012', a: 90, b: 110 },
          { y: '2013', a: 80, b: 100 },
          { y: '2014', a: 110, b: 130 },
          { y: '2015', a: 90, b: 110 },
          { y: '2016', a: 120, b: 140 },
          { y: '2017', a: 110, b: 125 },
          { y: '2018', a: 170, b: 190 },
          { y: '2019', a: 120, b: 140 },
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        gridLineColor: '#eef0f250',
        resize: true,
        barSizeRatio: 0.4,
        labels: ['iPhone 8', 'Samsung Galaxy'],
      });
      charts.push(barChart);
    }

    // === Donut Chart ===
    const donutElement = document.getElementById('morris-donut-example');
    if (donutElement) {
      const donutChart = (Morris as any).Donut({
        element: 'morris-donut-example',
        resize: true,
        backgroundColor: 'transparent',
        colors: ['#20b799', '#346ee0', '#e9ecef'],
        data: [
          { label: 'Samsung Company', value: 12 },
          { label: 'Apple Company', value: 30 },
          { label: 'Vivo Mobiles', value: 20 },
        ],
      });
      charts.push(donutChart);
    }

    // === Line Chart ===
    const lineElement = document.getElementById('morris-line-example');
    if (lineElement) {
      const lineChart = (Morris as any).Line({
        element: 'morris-line-example',
        gridLineColor: '#eef0f250',
        lineColors: ['#f15050', '#e9ecef'],
        data: [
          { y: '2013', a: 80, b: 100 },
          { y: '2014', a: 110, b: 130 },
          { y: '2015', a: 90, b: 110 },
          { y: '2016', a: 120, b: 140 },
          { y: '2017', a: 110, b: 125 },
          { y: '2018', a: 170, b: 190 },
          { y: '2019', a: 120, b: 140 },
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        resize: true,
        labels: ['Series A', 'Series B'],
      });
      charts.push(lineChart);
    }
  };

  onMounted(() => {
    // Delay nhỏ để DOM render xong
    setTimeout(initCharts, 100);
  });

  onUnmounted(() => {
    charts.forEach((chart) => {
      if (chart && chart.el) chart.el.innerHTML = '';
    });
  });

  return { initCharts };
}
