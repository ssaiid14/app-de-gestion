import React from 'react';
import { FileText, Download, Eye, Share2 } from 'lucide-react';

const ReporteViewer = ({ reporte }) => {
  if (!reporte) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Selecciona un reporte para visualizar</p>
      </div>
    );
  }

  const handleDownload = () => {
    console.log('Descargando reporte:', reporte.nombre);
  };

  const handleShare = () => {
    console.log('Compartiendo reporte:', reporte.nombre);
  };

  return (
    <div className="border rounded-lg shadow-md h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <FileText className="h-5 w-5" />
          {reporte.nombre}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Descargar"
            type="button"
          >
            <Download className="h-4 w-4" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Compartir"
            type="button"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow overflow-auto space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Fecha de creación</p>
            <p className="font-medium">{reporte.fechaCreacion}</p>
          </div>
          <div>
            <p className="text-gray-500">Fecha de generación</p>
            <p className="font-medium">{reporte.fechaGeneracion}</p>
          </div>
          <div>
            <p className="text-gray-500">Tipo</p>
            <p className="font-medium">{reporte.tipo}</p>
          </div>
          <div>
            <p className="text-gray-500">Estado</p>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                reporte.estado === 'Completado'
                  ? 'bg-green-100 text-green-800'
                  : reporte.estado === 'Programado'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {reporte.estado}
            </span>
          </div>
          <div>
            <p className="text-gray-500">Formato</p>
            <p className="font-medium">{reporte.formato}</p>
          </div>
          <div>
            <p className="text-gray-500">Tamaño</p>
            <p className="font-medium">{reporte.tamaño}</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Descripción</h4>
          <p className="text-sm text-gray-600">
            {reporte.descripcion || 'Este reporte contiene información detallada.'}
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Contenido del Reporte</h4>
          <div className="bg-gray-50 rounded-lg p-4 min-h-[100px]">
            <p className="text-sm text-gray-600">
              {/* Aquí podrías renderizar el contenido real si lo tienes */}
              El contenido detallado del reporte se mostraría aquí...
            </p>
          </div>
        </div>
      </div>

      {/* Footer button */}
      <button
        type="button"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-b-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Eye className="h-4 w-4" />
        Ver Reporte Completo
      </button>
    </div>
  );
};

export default ReporteViewer;