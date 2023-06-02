import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const RichTextEditor = ({ initialValue, getValue }) => {
  const editor = useRef(null);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  useEffect(() => {
    if(typeof window !== 'undefined'){
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