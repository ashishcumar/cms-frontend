import React, { useEffect, useRef, useState } from "react";
// import JoditEditor from "jodit-react";

const RichTextEditor = ({ initialValue, getValue }) => {
  const editor = useRef(null);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  useEffect(() => {
    let JoditEditor;
    const initTerminal = async () => {
      JoditEditor = await import("jodit-react");
    };
    initTerminal();
    if (typeof window !== "undefined") {
      setIsDomLoaded(true);
    }
  }, []);

  return (
    <>
      {isDomLoaded ? (
        <JoditEditor
          ref={editor}
          value={initialValue}
          // config={config}
          tabIndex={1}
          //   onBlur={(newContent) => getValue(newContent)}
          onChange={(newContent) => getValue(newContent)}
        />
      ) : null}
    </>
  );
};

export default RichTextEditor;
