import { useRef } from "react";

const useRenderCount = () => {
  const renders = useRef(0);

  let rendersCount = renders.current++;

  return [rendersCount];
};

export default useRenderCount;
