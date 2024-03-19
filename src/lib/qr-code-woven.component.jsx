import React, { createRef, useEffect } from 'react';
import QRious from 'qrious';
import ImageComponent from './components/image.component.jsx';
import CanvasComponent from './components/canvas.component.jsx';

/**
 * QR code component.
 *
 * @param {object} props - The options for generating the QR code.
 * @param {string} props.value - The value for QR code.
 * @param {("canvas"|"image")} props.type - The type of QR code to generate.
 * @param {object?} props.options - The styles for QRious, see [api reference](https://github.com/neocotic/qrious?tab=readme-ov-file#api)
 * @param {string?} props.options.background - Background color of the QR code. Default: "white"
 * @param {number?} props.options.backgroundAlpha - Background alpha of the QR code. Default: 1.0
 * @param {string?} props.options.foreground - Foreground color of the QR code. Default: "black"
 * @param {number?} props.options.foregroundAlpha - Foreground alpha of the QR code. Default: 1.0
 * @param {string?} props.options.level - Error correction level of the QR code (L, M, Q, H). Default: "L"
 * @param {string?} props.options.mime - MIME type used to render the image for the QR code. Default: "image/png"
 * @param {number?} props.options.padding - Padding for the QR code (pixels). Default: null (automatic sets paddings)
 * @param {number?} props.options.size - Size of the QR code (pixels). Default: 100
 */
export default function QrCodeWovenComponent({
  value,
  type = 'canvas',
  options,
}) {
  const qrRef = createRef();

  useEffect(() => {
    const qr = new QRious({
      element: qrRef.current,
      value,
    });
    qr.set(options);
  }, []);

  const componentToRender = {
    image: <ImageComponent ref={qrRef} />,
    canvas: <CanvasComponent ref={qrRef} />,
  };

  return <>{componentToRender[type]}</>;
}
