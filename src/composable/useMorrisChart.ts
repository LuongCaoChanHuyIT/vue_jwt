import { onMounted, onUnmounted, ref } from 'vue';
import Morris from 'morris.js';
import 'morris.js/morris.css';

export function useMorrisChart() {
  const charts = ref<any[]>([]);

  // Line Chart
  const createLineChart = (elementId: string, data: any[], config?: any) => {
    onMounted(() => {
      const chart = Morris.Line({
        element: elementId,
        data: data,
        xkey: config?.xkey || 'y',
        ykeys: config?.ykeys || ['a'],
        labels: config?.labels || ['Series A'],
        lineColors: config?.lineColors || ['#5470c6', '#91cc75', '#fac858'],
        resize: true,
        gridTextSize: 12,
        hideHover: 'auto',
        ...config,
      });
      charts.value.push(chart);
    });
  };

  // Area Chart
  const createAreaChart = (elementId: string, data: any[], config?: any) => {
    onMounted(() => {
      const chart = Morris.Area({
        element: elementId,
        data: data,
        xkey: config?.xkey || 'y',
        ykeys: config?.ykeys || ['a'],
        labels: config?.labels || ['Series A'],
        lineColors: config?.lineColors || ['#5470c6', '#91cc75'],
        fillOpacity: 0.6,
        resize: true,
        hideHover: 'auto',
        ...config,
      });
      charts.value.push(chart);
    });
  };

  // Bar Chart
  const createBarChart = (elementId: string, data: any[], config?: any) => {
    onMounted(() => {
      const chart = Morris.Bar({
        element: elementId,
        data: data,
        xkey: config?.xkey || 'y',
        ykeys: config?.ykeys || ['a'],
        labels: config?.labels || ['Series A'],
        barColors: config?.barColors || ['#5470c6', '#91cc75', '#fac858'],
        resize: true,
        hideHover: 'auto',
        ...config,
      });
      charts.value.push(chart);
    });
  };

  // Donut Chart
  const createDonutChart = (elementId: string, data: any[], config?: any) => {
    onMounted(() => {
      const chart = Morris.Donut({
        element: elementId,
        data: data,
        colors: config?.colors || ['#5470c6', '#91cc75', '#fac858', '#ee6666'],
        resize: true,
        ...config,
      });
      charts.value.push(chart);
    });
  };

  // Cleanup on unmount
  onUnmounted(() => {
    charts.value.forEach((chart) => {
      if (chart && typeof chart.destroy === 'function') {
        chart.destroy();
      }
    });
    charts.value = [];
  });

  return {
    createLineChart,
    createAreaChart,
    createBarChart,
    createDonutChart,
  };
}
