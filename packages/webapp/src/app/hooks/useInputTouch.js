import { useState } from 'react';

function useInputTouch(value) {
  const [touch, setTouch] = useState(false);

  if (touch) {
    return true;
  }

  if (value) {
    setTouch(true);
  }

  return touch;
}

export default useInputTouch;
