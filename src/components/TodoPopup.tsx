import { X, Plus, Check } from "lucide-react";
import { useState } from "react";

const defaultTodos = [
  { id: 1, text: "Review pending CVIP renewals", done: false },
  { id: 2, text: "Upload Q1 PM reports", done: false },
  { id: 3, text: "Send warning letter to Driver #102", done: true },
  { id: 4, text: "Update IRP registration for Unit 45", done: false },
];

export function TodoPopup({ onClose }: { onClose: () => void }) {
  const [todos, setTodos] = useState(defaultTodos);
  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (id: number) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: newTodo.trim(), done: false }]);
    setNewTodo("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">📋 Staff To-Do List</h2>
          <button onClick={onClose} className="rounded-md p-1 hover:bg-secondary transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
          {todos.map((todo) => (
            <label
              key={todo.id}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 hover:bg-secondary cursor-pointer transition-colors"
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ${
                  todo.done ? "bg-accent border-accent" : "border-muted-foreground"
                }`}
              >
                {todo.done && <Check className="h-3 w-3 text-accent-foreground" />}
              </button>
              <span className={`text-sm flex-1 ${todo.done ? "line-through text-muted-foreground" : ""}`}>
                {todo.text}
              </span>
            </label>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Add a new task..."
            className="flex-1 rounded-md border bg-secondary px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={addTodo}
            className="rounded-md bg-accent px-3 py-2 text-accent-foreground hover:opacity-90 transition-opacity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
