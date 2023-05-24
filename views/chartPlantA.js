document.addEventListener("DOMContentLoaded", function () {
    // Obtener el contexto del lienzo del gráfico
    var ctx = document.getElementById('chartPlantaA').getContext('2d');

    // Datos de ejemplo
    var data = {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
        datasets: [
            {
                label: 'Agua llovida',
                data: [9, 5, 10, 12, 15, 10, 14, 11],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderWidth: 1,
                fill: 'start' // Relleno de área desde la parte inferior del gráfico
            },
            {
                label: 'Temperatura',
                data: [32, 29, 27, 24, 25, 23, 21, 19],
                borderColor: 'orange',
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderWidth: 1,
                fill: 'origin' // Relleno de área desde el eje y = 0
            },
            {
                label: 'Humedad',
                data: [83, 79, 61, 71, 78, 65, 74, 65],
                borderColor: 'green',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderWidth: 1,
                fill: 'start' // Relleno de área hasta el siguiente dataset
            }
        ]
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
