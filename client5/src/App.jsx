import React, { useMemo, useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "aiman", createdAt: new Date(Date.now() - 15_000), done: false },
  ]);
  const [filter, setFilter] = useState("all"); // all | active | done

  const now = useMemo(() => new Date(), []);
  const dateText = useMemo(() => formatFancyDate(now), [now]);
  const timeText = useMemo(() => formatTime(now), [now]);

  const remaining = useMemo(() => todos.filter((t) => !t.done).length, [todos]);

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "done") return todos.filter((t) => t.done);
    return todos;
  }, [todos, filter]);

  const addTodo = (e) => {
    e.preventDefault();
    const text = task.trim();
    if (!text) return;

    setTodos((prev) => [
      { id: Date.now(), text, createdAt: new Date(), done: false },
      ...prev,
    ]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const editTodo = (id) => {
    const current = todos.find((t) => t.id === id);
    const next = window.prompt("Edit task:", current?.text ?? "");
    if (next == null) return;
    const text = next.trim();
    if (!text) return;

    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const activeCount = todos.filter((t) => !t.done).length;
  const doneCount = todos.filter((t) => t.done).length;
  const allCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      {/* Top spacing + container */}
      <div className="mx-auto max-w-xl px-4 py-10">
        {/* Title-ish area (matches original "task remaining") */}
        <div className="mb-6 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-slate-500">{dateText}</div>
              <div className="mt-1 text-2xl font-semibold tracking-tight">{timeText}</div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-xs text-slate-500">({remaining}) task remaining.</div>
              <div className="mt-1 h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full bg-slate-900/80"
                  style={{
                    width:
                      allCount === 0 ? "0%" : `${Math.round((doneCount / allCount) * 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={addTodo} className="mt-5 flex gap-2">
            <input
              type="text"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
              placeholder="Add your tasks for the day."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Add
            </button>
          </form>
        </div>

        {/* Todo list */}
        <ul id="todos" className="space-y-2">
          {filteredTodos.map((t) => (
            <li
              key={t.id}
              draggable
              className="group flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
            >
              {/* Check */}
              <button
                type="button"
                onClick={() => toggleTodo(t.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
                aria-label={t.done ? "Mark as not done" : "Mark as done"}
                title={t.done ? "Undo" : "Done"}
              >
                <span
                  className={[
                    "inline-flex h-4 w-4 rounded",
                    t.done ? "bg-slate-900" : "bg-transparent ring-1 ring-slate-300",
                  ].join(" ")}
                />
              </button>

              {/* Task */}
              <div className="min-w-0 flex-1">
                <p
                  className={[
                    "truncate text-base font-medium",
                    t.done ? "text-slate-400 line-through" : "text-slate-900",
                  ].join(" ")}
                >
                  {t.text}
                </p>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {timeAgo(t.createdAt)}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
                <button
                  type="button"
                  onClick={() => editTodo(t.id)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteTodo(t.id)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
                  aria-label="Delete"
                  title="Delete"
                >
                  X
                </button>
              </div>
            </li>
          ))}

          {filteredTodos.length === 0 && (
            <li className="rounded-2xl bg-white p-6 text-center text-sm text-slate-500 shadow-sm ring-1 ring-slate-200">
              No tasks here.
            </li>
          )}
        </ul>

        {/* Footer */}
        <footer className="relative mt-10 overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          {/* Links */}
          <nav className="flex items-center justify-center gap-2">
            <FilterPill
              selected={filter === "all"}
              onClick={() => setFilter("all")}
              label={`${allCount}`}
            />
            <FilterPill
              selected={filter === "active"}
              onClick={() => setFilter("active")}
              label={`${activeCount}`}
            />
            <FilterPill
              selected={filter === "done"}
              onClick={() => setFilter("done")}
              label={`${doneCount}`}
            />
          </nav>

          {/* Donate */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://gumroad.com/jasonjstius"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Donate
              <span aria-hidden className="text-white/70">
                ↗
              </span>
            </a>
          </div>

          {/* Birds + clouds (simple Tailwind shapes to mimic the decoration) */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-40">
            {/* Clouds */}
            <div className="absolute left-6 bottom-10 h-10 w-28 rounded-full bg-slate-200/70 blur-[0.5px]" />
            <div className="absolute left-20 bottom-12 h-7 w-20 rounded-full bg-slate-200/60 blur-[0.5px]" />
            <div className="absolute right-8 bottom-12 h-10 w-28 rounded-full bg-slate-200/70 blur-[0.5px]" />
            <div className="absolute right-24 bottom-9 h-7 w-20 rounded-full bg-slate-200/60 blur-[0.5px]" />

            {/* Birds (3 small "V" marks) */}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 text-slate-400">
              <div className="flex items-center justify-center gap-6 text-xl">
                <span className="rotate-[-8deg]">˅</span>
                <span>˅</span>
                <span className="rotate-[8deg]">˅</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FilterPill({ selected, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl px-4 py-2 text-sm font-semibold shadow-sm ring-1 transition focus:outline-none focus:ring-4",
        selected
          ? "bg-slate-900 text-white ring-slate-900 focus:ring-slate-200"
          : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50 focus:ring-slate-200",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function formatTime(d) {
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours}:${minutes} ${ampm}`;
}

function formatFancyDate(d) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const day = d.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${months[d.getMonth()]} ${day}${suffix}, ${days[d.getDay()]}`;
}

function timeAgo(date) {
  const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
  if (seconds < 10) return "a few seconds ago";
  if (seconds < 60) return `${seconds} seconds ago`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return mins === 1 ? "a minute ago" : `${mins} minutes ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs === 1 ? "an hour ago" : `${hrs} hours ago`;
  const days = Math.floor(hrs / 24);
  return days === 1 ? "a day ago" : `${days} days ago`;
}
