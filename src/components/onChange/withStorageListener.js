import React from "react";

function withStorageListener(WrappedComponent) {
  return function Wrapper(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if(change.key === "todos_v1") {
        setStorageChange(true);
      }
    })

    const showToggle = () => {
      props.sincronizedToggle();
      setStorageChange(false)
    }

    return <WrappedComponent show={storageChange} showToggle={showToggle} />;
  };
}

export default withStorageListener;
