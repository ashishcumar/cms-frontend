import MyStatefulEditor from "@/components/TextEditor";
import React, { useState } from "react";

function index() {
  const [stringVal, setString] = useState<string>("");

  const updateVal = (val: string) => {
    setString(val);
  };

  return <MyStatefulEditor onChange={updateVal} />;
}

export default index;
