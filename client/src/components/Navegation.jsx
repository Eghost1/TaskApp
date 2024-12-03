import { Link } from 'react-router-dom';

export function Navegation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="front-bold text-3xl mb-4">Task APP</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to="/tasks-create">Create task</Link>
      </button>
    </div>
  );
}
