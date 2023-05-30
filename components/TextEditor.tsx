import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import RichTextEditor from "react-rte";

const MyStatefulEditor = ({ onChange }: { onChange: any }) => {
  const [value, setValue] = useState<string>("");
  const [isDomLoaded, setIsDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    const importModule = async () => {
      const rtePackage = await import("react-rte");
      setValue(rtePackage.createEmptyValue());
    };
    importModule();
    setIsDomLoaded(true);
  }, []);

  const handleOnChange = (value: any) => {
    setValue(value);
    if (onChange) {
      onChange(value.toString("html"));
    }
  };

  return (
    <>
      {isDomLoaded ? (
        <RichTextEditor value={value} onChange={handleOnChange} />
      ) : null}
    </>
  );
};

MyStatefulEditor.propTypes = {
  onChange: PropTypes.func,
};

export default MyStatefulEditor;
