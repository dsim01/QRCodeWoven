import React, { forwardRef } from 'react';

const CanvasComponent = forwardRef<HTMLCanvasElement, unknown>(
  function CanvasComponent(_props, ref) {
    return <canvas ref={ref} />;
  },
);

CanvasComponent.displayName = 'CanvasComponent';

export default CanvasComponent;
