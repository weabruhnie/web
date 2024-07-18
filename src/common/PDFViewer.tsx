// PDFViewer.tsx
import React from 'react';
import { Worker, Viewer, ScrollMode } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const workerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

  return (
    <div style={{ width: '40vw', height: '90vh' }}>
      <Worker workerUrl={workerUrl}>
        <Viewer theme="dark" scrollMode={ScrollMode.Vertical} fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PDFViewer;