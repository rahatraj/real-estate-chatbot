import { useState } from "react";

const QueryInput = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query (e.g. Analyze Akurdi)"
        className="p-2 border rounded w-3/4"
      />
      <button type="submit" className="p-2 ml-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default QueryInput;
