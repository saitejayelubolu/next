// pages/notes/show.tsx
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const ShowNotesPage: React.FC = () => {
  const [notesList, setNotesList] = useState<string[]>([]);

  // Fetch notes from local storage when the component mounts
  useEffect(() => {
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotesList(existingNotes);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
        {notesList.length === 0 ? (
          <p>No notes available. Please create some notes.</p>
        ) : (
          <ul className="space-y-2">
            {notesList.map((note, index) => (
              <li key={index} className="p-4 border border-gray-300 rounded-md">
                {note}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default ShowNotesPage;
