import React, { forwardRef } from 'react';

const ImageComponent = forwardRef<HTMLImageElement, unknown>(
  function ImageComponent(_props, ref) {
    return <img ref={ref} alt={`qr-code-${window.crypto.randomUUID()}`} />;
  },
);

ImageComponent.displayName = 'ImageComponent';

export default ImageComponent;
