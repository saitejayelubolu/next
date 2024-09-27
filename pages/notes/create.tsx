// pages/notes/create.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const CreateNotePage: React.FC = () => {
  const [note, setNote] = useState("");
  const router = useRouter();

  const handleNoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save the note to local storage
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    existingNotes.push(note);
    localStorage.setItem("notes", JSON.stringify(existingNotes));

    setNote(""); // Reset the note input
    router.push("/notes/show"); // Redirect to the show notes page
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Create a Note</h1>
        <form onSubmit={handleNoteSubmit} className="flex flex-col space-y-4">
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Write your note here..."
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Save Note
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateNotePage;
