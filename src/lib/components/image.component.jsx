import { forwardRef } from 'react';

const ImageComponent = forwardRef(function ImageComponent(props, ref) {
  return <img ref={ref} alt={`qr-code-${window.crypto.randomUUID()}`} />;
});

ImageComponent.displayName = 'ImageComponent';

export default ImageComponent;
