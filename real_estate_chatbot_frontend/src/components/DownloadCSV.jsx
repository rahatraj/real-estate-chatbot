import React from 'react'

function DownloadCSV({tableData}) {
    
  const handleDownloadCSV = () => {
    if (!tableData.length) return;

    const headers = Object.keys(tableData[0]);
    const csvRows = [];

    // Add header row
    csvRows.push(headers.join(","));

    // Add data rows
    tableData.forEach(row => {
        const values = headers.map(h => JSON.stringify(row[h] ?? ""));
        csvRows.push(values.join(","));
    });

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "filtered_data.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <button
        onClick={handleDownloadCSV}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
        Download CSV
    </button>
  )
}

export default DownloadCSV