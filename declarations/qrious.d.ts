declare module 'qrious' {
  import { QrCodeOptions } from '../types/qr-code.types';
  export default class QRious {
    constructor(options: {
      element: HTMLImageElement | HTMLCanvasElement | null;
      value: string;
    });
    set: (options?: QrCodeOptions) => void;
  }
}
