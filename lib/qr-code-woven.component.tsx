import React, { createRef, RefObject, useEffect } from 'react';
import QRious from 'qrious';
import ImageComponent from './components/image.component';
import CanvasComponent from './components/canvas.component';
import { QrCodeOptions } from '../types/qr-code.types';

type QrCodeWovenComponentProps = {
  value: string;
  type: 'canvas' | 'image';
  options?: QrCodeOptions;
};

export default function QrCodeWovenComponent({
  value,
  type = 'canvas',
  options,
}: QrCodeWovenComponentProps) {
  const qrRef = createRef<HTMLImageElement | HTMLCanvasElement>();

  useEffect(() => {
    const qr = new QRious({
      element: qrRef.current,
      value,
    });
    qr.set(options);
  }, [options, qrRef, value]);

  const componentToRender = {
    image: <ImageComponent ref={qrRef as RefObject<HTMLImageElement>} />,
    canvas: <CanvasComponent ref={qrRef as RefObject<HTMLCanvasElement>} />,
  };

  return <>{componentToRender[type]}</>;
}
