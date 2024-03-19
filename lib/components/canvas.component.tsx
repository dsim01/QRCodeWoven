import React, { ForwardedRef, forwardRef } from 'react';

const CanvasComponent = forwardRef(function CanvasComponent(
  _props,
  ref: ForwardedRef<HTMLCanvasElement>,
) {
  return <canvas ref={ref} />;
});

CanvasComponent.displayName = 'CanvasComponent';

export default CanvasComponent;
