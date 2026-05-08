function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 shadow-lg border border-slate-700">
      <h2 className="text-xl font-bold text-white mb-2">{note.titulo}</h2>

      <p className="text-slate-300 mb-4 whitespace-pre-wrap">{note.texto}</p>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(note)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
