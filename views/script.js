document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('chart').getContext('2d');

    // Datos del gráfico (solo como ejemplo)
    var data = {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7', 'Día 8', 'Día 9', 'Día 10', 'Día 11', 'Día 12', 'Día 13', 'Día 14', 'Día 15', 'Día 16', 'Día 17', 'Día 18', 'Día 19', 'Día 20', 'Día 21', 'Día 22', 'Día 23', 'Día 24', 'Día 25', 'Día 26', 'Día 27', 'Día 28', 'Día 29', 'Día 30'],
        datasets: [{
            label: 'Agua Llovida',
            data: [10, 20, 30, 25, 15, 35, 40, 28, 2, 38, 20, 5, 25, 15, 35, 40, 28, 32, 38, 9, 30, 25, 15, 35, 11, 28, 32, 38, 20, 30],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
            fill: 'start' // Rellenar el área bajo la línea
        }, {
            label: 'Humedad',
            data: [70, 65, 60, 55, 50, 45, 42, 40, 35, 30, 32, 34, 37, 40, 45, 48, 50, 52, 55, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: 'start' // Rellenar el área bajo la línea
        }, {
            label: 'Temperatura',
            data: [28, 26, 24, 25, 27, 30, 31, 29, 28, 27, 26, 25, 23, 22, 24, 26, 28, 30, 32, 31, 30, 28, 27, 25, 24, 23, 25, 26, 27, 29],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            fill: 'start' // Rellenar el área bajo la línea
        }]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top', // Cambiar la posición de la leyenda a la parte superior
                labels: {
                    boxHeight: 12,
                    boxWidth: 12,
                    font: {
                        size: 12
                    }
                }
            }
        }
    };

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});
