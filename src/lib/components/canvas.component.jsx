import { forwardRef } from 'react';

const CanvasComponent = forwardRef(function CanvasComponent(props, ref) {
  return <canvas ref={ref} />;
});

CanvasComponent.displayName = 'CanvasComponent';

export default CanvasComponent;
