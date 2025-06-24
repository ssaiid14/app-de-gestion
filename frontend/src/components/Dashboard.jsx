import { useState } from "react";

function Dashboard() {
  const [stats] = useState([
    { label: "Usuarios", value: 120 },
    { label: "Proyectos", value: 8 },
    { label: "Tareas Pendientes", value: 23 },
    { label: "Mensajes", value: 5 },
  ]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Panel de Control</h1>
          <p className="text-gray-600 mt-2">
            Bienvenido a tu dashboard. Aquí puedes ver un resumen de tu aplicación.
          </p>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded shadow p-6 flex flex-col items-center"
            >
              <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
              <span className="text-gray-500 mt-2">{stat.label}</span>
            </div>
          ))}
        </section>
        <section className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Actividad Reciente</h2>
          <ul className="text-gray-700 space-y-2">
            <li>✔️ Usuario Juan creó un nuevo proyecto.</li>
            <li>✔️ Se completó la tarea "Actualizar documentación".</li>
            <li>✔️ María envió un mensaje al equipo.</li>
            <li>✔️ Se agregaron 3 nuevos usuarios.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
