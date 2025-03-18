document.addEventListener("DOMContentLoaded", function () {
    updateCharts();
});

function updateCharts() {
    let selectedFish = document.getElementById("fish-select").value;

    if (selectedFish === "all") {
        populationChart.data = fishData;
        riskChart.data = riskData;
    } else {
        let index = fishData.labels.indexOf(selectedFish);
        if (index !== -1) {
            populationChart.data = {
                labels: [fishData.labels[index]],
                datasets: [{
                    label: "Population",
                    data: [fishData.datasets[0].data[index]],
                    backgroundColor: "rgba(173, 216, 230, 0.5)",
                    borderColor: "rgba(173, 216, 230, 1)",
                    borderWidth: 1
                }]
            };

            riskChart.data = {
                labels: [riskData.labels[index]],
                datasets: [{
                    label: "Overfishing Risk",
                    data: [riskData.datasets[0].data[index]],
                    backgroundColor: "rgba(255, 182, 193, 0.5)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1
                }]
            };
        }
    }

    populationChart.update();
    riskChart.update();
}
