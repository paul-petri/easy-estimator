import './canvas.scss';

export const Canvas: React.FC<{}> = () => {
  let canvas: HTMLCanvasElement | null;

  return (
    <div className="canvas">
      <canvas id="canvas-ref"></canvas>
    </div>
  );
};
