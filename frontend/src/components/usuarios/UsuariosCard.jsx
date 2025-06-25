import React from 'react'

const UsuariosCard = ({ usuario, onEdit, onDelete }) => {
  if (!usuario) return null

  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div
          style={{
            background: 'var(--color-primary)',
            color: '#fff'
          }}
          className="h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold"
        >
          {usuario.nombre.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{usuario.nombre}</h3>
          <div className="flex gap-2 mt-1">
            <span
              style={{
                background: 'var(--color-secondary)',
                color: '#fff',
                borderRadius: '0.5rem',
                padding: '0.2rem 0.7rem',
                fontSize: '0.85rem'
              }}
            >
              {usuario.rol}
            </span>
            <span
              style={{
                background: usuario.estado === 'Activo'
                  ? 'var(--color-success)'
                  : 'var(--color-danger)',
                color: '#fff',
                borderRadius: '0.5rem',
                padding: '0.2rem 0.7rem',
                fontSize: '0.85rem'
              }}
            >
              {usuario.estado}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <div>{usuario.email}</div>
        <div>{usuario.telefono}</div>
      </div>
      <div className="flex gap-2 justify-end pt-2 border-t">
        <button className="btn" onClick={() => onEdit(usuario)}>
          Editar
        </button>
        <button
          className="btn"
          style={{ background: 'var(--color-danger)' }}
          onClick={() => onDelete(usuario.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default UsuariosCard