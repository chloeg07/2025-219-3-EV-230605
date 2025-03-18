document.addEventListener("DOMContentLoaded", function () {
    // Fish Population Graph
    const populationCtx = document.getElementById("populationGraph").getContext("2d");
    new Chart(populationCtx, {
        type: "bar",
        data: {
            labels: ["Tuna", "Salmon", "Cod", "Herring", "Mackerel"],
            datasets: [{
                label: "Fish Population",
                data: [5000, 7000, 4000, 6000, 3000],
                backgroundColor: ["blue", "green", "red", "purple", "orange"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Region Population Graph
    const regionCtx = document.getElementById("regionGraph").getContext("2d");
    new Chart(regionCtx, {
        type: "pie",
        data: {
            labels: ["Pacific", "Atlantic", "Indian", "Arctic", "Southern"],
            datasets: [{
                data: [40, 30, 15, 10, 5],
                backgroundColor: ["blue", "green", "red", "yellow", "purple"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Overfishing Risk Graph
    const overfishingCtx = document.getElementById("overfishingGraph").getContext("2d");
    new Chart(overfishingCtx, {
        type: "line",
        data: {
            labels: ["2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "Overfishing Risk",
                data: [10, 20, 30, 40, 50],
                borderColor: "red",
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
