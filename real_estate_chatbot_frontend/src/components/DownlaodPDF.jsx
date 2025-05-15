import React from 'react'
import jsPDF from "jspdf";
import { autoTable } from 'jspdf-autotable'

function DownlaodPDF({tableData}) {
  const importantColumns = [
    "year",
    "final location",
    "total_sales - igr",
    "flat_sold - igr",
    "flat - most prevailing rate - range",
    "total units",
    "total carpet area supplied (sqft)"
  ];
  const handleDownloadPDF = () => {
  if (!tableData.length) return;

  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Filtered Real Estate Data", 14, 20);

  const headers = importantColumns;
  const dataRows = tableData.map(row =>
    headers.map(h => String(row[h] ?? "").replace(/\n/g, " "))
  );

  autoTable(doc,{
    startY: 30,
    head: [headers],
    body: dataRows,
    styles: {
      fontSize: 7,
      cellPadding: 2,
      overflow: "lineBreak", // ensures wrapping within cells
    },
    headStyles: {
      fillColor: [22, 160, 133],
      textColor: 255,
      fontStyle: 'bold',
    },
    columnStyles: {
      // Optional: limit width for very wide columns
      0: { cellWidth: 30 },
      1: { cellWidth: 25 },
      // You can add more fixed widths by index as needed
    },
  });

  doc.save("filtered_data.pdf");
  };

  return (
    <button
        onClick={handleDownloadPDF}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
    >
        Download PDF
    </button>
  )
}

export default DownlaodPDF