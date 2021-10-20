import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useSpring, animated } from "react-spring";
import "./styles.css";

function useDelayClose(searchSwip) {
  const [delayClose, setDelayClose] = React.useState(false);
  const [everOpen, setEverOpen] = React.useState(false);
  React.useEffect(() => {
    if (!searchSwip) {
      setDelayClose(true);
      const timeout = setTimeout(() => {
        setDelayClose(false);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setEverOpen(true);
      setDelayClose(true);
    }
  }, [searchSwip]);
  return delayClose && everOpen;
}

export default function Sidebar(props) {
  const { right } = useSpring({ right: props.searchSwip ? 0 : -300 });
  const delayClose = useDelayClose(props.searchSwip);
  return (
    <DialogOverlay
      isOpen={props.searchSwip || delayClose}
      onDismiss={props.onDismiss}
    >
      <DialogContent
        aria-label="Search"
        style={{
          width: 0,
          height: 0,
          padding: 0,
          margin: 0,
        }}
      >
        <animated.div
          style={{
            right: 0,
            left: 0,
            position: "fixed",
            width: "100%",
            top: right,
            height: "50vh",
            padding: 0,
            margin: 0,
            backgroundColor: "white",
            zIndex: 100,
          }}
        >
          {props.children}
        </animated.div>
      </DialogContent>
    </DialogOverlay>
  );
}
