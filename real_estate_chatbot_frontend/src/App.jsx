import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import SummaryBox from "./components/summaryBox";
import PriceChart from "./components/PriceChart";
import DataTable from "./components/DataTable";
import QueryInput from "./components/QueryInput";
import DownlaodPDF from "./components/DownlaodPDF";
import DownloadCSV from "./components/DownloadCSV";


function App() {
  const { data,loading, handleQuerySubmit } = useContext(DataContext)
  const { summary,tableData, chartData} = data?.data;
  const error  = data?.error
  
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">Real Estate Chatbot</h1>
      <QueryInput onSubmit={handleQuerySubmit} />

      {loading && <p>Loading...</p>}

      {error && (
        <div className="bg-red-100 text-red-700 border border-red-300 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {!error && !loading && summary && (
        <>
          <SummaryBox summary={summary} />
          {chartData?.length > 0 && <PriceChart data={chartData} />}
          {tableData?.length > 0 &&(
            <>
               <div className="flex items-center justify-between">
                  <DownloadCSV tableData={tableData} />
                  <DownlaodPDF tableData={tableData} />
               </div>
              <DataTable data={tableData} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;

// Give me analysis of Wakad
