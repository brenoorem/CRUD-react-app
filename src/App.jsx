import { useEffect, useState } from "react";
import NoteCard from "./components/NoteCard";

import { getNotes, createNote, updateNote, deleteNote } from "./services/api";

function App() {
  const [notes, setNotes] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const [editingId, setEditingId] = useState(null);

  async function loadNotes() {
    const data = await getNotes();
    setNotes(data);
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!titulo || !texto) {
      alert("Preencha todos os campos");
      return;
    }

    const noteData = {
      titulo,
      texto,
    };

    if (editingId) {
      await updateNote(editingId, noteData);
      setEditingId(null);
    } else {
      await createNote(noteData);
    }

    setTitulo("");
    setTexto("");

    loadNotes();
  }

  function handleEdit(note) {
    setTitulo(note.titulo);
    setTexto(note.texto);
    setEditingId(note.id);
  }

  async function handleDelete(id) {
    const confirmDelete = confirm("Deseja excluir essa nota?");

    if (!confirmDelete) return;

    await deleteNote(id);
    loadNotes();
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Sistema de Notas
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-6 rounded-2xl shadow-lg mb-10 border border-slate-700"
        >
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Título</label>

            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white outline-none"
              placeholder="Digite o título da nota"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Texto</label>

            <textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white outline-none h-32 resize-none"
              placeholder="Digite o conteúdo da nota"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            {editingId ? "Atualizar Nota" : "Criar Nota"}
          </button>
        </form>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
