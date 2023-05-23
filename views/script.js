document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('chart').getContext('2d');

    // Datos del gráfico (solo como ejemplo)
    var data = {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7', 'Día 8', 'Día 9', 'Día 10', 'Día 11', 'Día 12', 'Día 13', 'Día 14', 'Día 15', 'Día 16', 'Día 17', 'Día 18', 'Día 19', 'Día 20', 'Día 21', 'Día 22', 'Día 23', 'Día 24', 'Día 25', 'Día 26', 'Día 27', 'Día 28', 'Día 29', 'Día 30'],
        datasets: [{
            label: 'Datos',
            data: [10, 20, 30, 25, 15, 35, 40, 28, 32, 38, 20, 30, 25, 15, 35, 40, 28, 32, 38, 20, 30, 25, 15, 35, 40, 28, 32, 38, 20, 30],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});
