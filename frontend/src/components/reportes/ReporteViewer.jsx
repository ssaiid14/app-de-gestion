import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Eye, Share2 } from 'lucide-react';

// Componente ReporteViewer
export const ReporteViewer = ({ reporte }) => {
  if (!reporte) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Selecciona un reporte para visualizar</p>
      </div>
    );
  }

  const handleDownload = () => {
    // Lógica para descargar el reporte
    console.log('Descargando reporte:', reporte.titulo);
  };

  const handleShare = () => {
    // Lógica para compartir el reporte
    console.log('Compartiendo reporte:', reporte.titulo);
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <FileText className="h-5 w-5" />
          {reporte.titulo}
        </CardTitle>
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Descargar"
          >
            <Download className="h-4 w-4" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Compartir"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Fecha de creación</p>
              <p className="font-medium">{reporte.fecha}</p>
            </div>
            <div>
              <p className="text-gray-500">Última actualización</p>
              <p className="font-medium">{reporte.ultimaActualizacion || reporte.fecha}</p>
            </div>
            <div>
              <p className="text-gray-500">Tipo</p>
              <p className="font-medium">{reporte.tipo}</p>
            </div>
            <div>
              <p className="text-gray-500">Estado</p>
              <p className="font-medium">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  reporte.estado === 'Completado' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {reporte.estado}
                </span>
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Resumen</h4>
            <p className="text-sm text-gray-600">
              {reporte.resumen || 'Este reporte contiene información detallada sobre las actividades del proyecto.'}
            </p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Contenido del Reporte</h4>
            <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
              {/* Aquí iría el contenido real del reporte */}
              <p className="text-sm text-gray-600">
                {reporte.contenido || 'El contenido detallado del reporte se mostraría aquí...'}
              </p>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <Eye className="h-4 w-4" />
            Ver Reporte Completo
          </button>
        </div>
      </CardContent>
    </Card>
  );
};