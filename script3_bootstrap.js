// Sample data for detection and alert log
const detectionLog = [
    { type: "Face Detected", time: "20:05" },
    { type: "Weapon Detected", time: "20:10" },
    { type: "Fire Detected", time: "20:12" }
];

const alerts = [
    { message: "Fire detected at 20:12", confidence: "95%" },
    { message: "Weapon detected at 20:10", confidence: "90%" }
];

// Function to populate detection log
function populateDetectionLog() {
    const logList = document.getElementById('log-list');
    logList.innerHTML = '';
    detectionLog.forEach(log => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item";
        listItem.textContent = `${log.type} - ${log.time}`;
        logList.appendChild(listItem);
    });
}

// Function to populate real-time alerts
function populateAlerts() {
    const alertsList = document.getElementById('alerts-list');
    alertsList.innerHTML = '';
    alerts.forEach(alert => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item list-group-item-danger";
        listItem.textContent = `${alert.message} (Confidence: ${alert.confidence})`;
        alertsList.appendChild(listItem);
    });
}

// Acknowledge all alerts
document.getElementById('acknowledge-btn').addEventListener('click', () => {
    const alertsList = document.getElementById('alerts-list');
    alertsList.innerHTML = '';
    alerts.length = 0;
    alert("All alerts acknowledged!");
});

// Download detection log
document.getElementById('download-logs-btn').addEventListener('click', () => {
    const logText = detectionLog.map(log => `${log.type} at ${log.time}`).join("\n");
    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'detection_log.txt';
    a.click();
    URL.revokeObjectURL(url);
});

// Initialize the dashboard
window.onload = () => {
    populateDetectionLog();
    populateAlerts();
};
