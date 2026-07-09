import React from "react";

const logos = [
  "/assets/html.png",
  "/assets/css.png",
  "/assets/js.png",
  "/assets/react.png",
  "/assets/python.png",
  "/assets/cpp.png",
  "/assets/sql.png",
  "/assets/langchain.png",
  "/assets/n8n.png",
  "/assets/vscode.png",
  "/assets/jupyter.png",
  "/assets/pandas.png",
  "/assets/numpy.png",
  "/assets/sci.png",
  "/assets/mat.png"
];


const ToolsSlider = () => {
  return (
    <div className="tools-slider">
      <div className="tools-track">
        {[...logos, ...logos].map((logo, i) => (
          <div className="tool-logo" key={i}>
            <img src={logo} alt="tool" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSlider;
