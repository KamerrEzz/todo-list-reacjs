import React from "react";

function useStorageListener(sincronizedToggle) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "todos_v1") {
      setStorageChange(true);
    }
  });

  const showToggle = () => {
    sincronizedToggle();
    setStorageChange(false);
  };

  return { storageChange, showToggle };
}

export default useStorageListener;
