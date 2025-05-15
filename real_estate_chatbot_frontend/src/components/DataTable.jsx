const DataTable = ({ data }) => {
  if (!data.length) return null;

  const headers = Object.keys(data[0]);

  return (
    <div>
      <h2 className="font-bold mb-2">Data Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} className="border p-2 text-sm">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {headers.map((h) => (
                  <td key={h} className="border p-2 text-sm">{row[h]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
