const ctx = document.getElementById('skillsRadar');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['AI / Machine Learning', 'Unity C#', 'Python', 'Robotics', 'Web Dev'],
    datasets: [
      {
        label: 'My experience',
        data: [70, 90, 95, 70, 80],
        fill: true,
        backgroundColor: 'rgba(0, 150, 255, 0.2)',
        borderColor: 'rgba(0, 150, 255, 0.8)',
        pointBackgroundColor: 'rgba(0, 150, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 150, 255, 1)'
      }
    ]
  },
  options: {
    elements: {
      line: { borderWidth: 4 }
    },
    scales: {
      r: {
        angleLines: { color: '#ccc' },
        grid: { color: '#ddd' },
        pointLabels: {
          color: 'white',
          font: { size: 16, family: 'Public Sans' , weight: 'bold' }
        },
        ticks: {
            display: false,
            stepSize: 20
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});