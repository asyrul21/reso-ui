import React, { useEffect, useState } from "react";
import classnames from "classnames";

const ALLOWED_FILE_TYPES = /jpg|jpeg|png/; // regex

const InputFile = ({
  value = "",
  id = "inputFileComponent",
  disabled = false,
  placeholder,
  required = false,
  inputFileText = "Select",
  onFileChange = () => {},
  onError = () => {},
  onReset = () => {},
}) => {
  const [tempFileName, setTempFileName] = useState(value);
  const [fileChanged, setFileChanged] = useState(false);
  const [inputError, setInputError] = useState(null);

  useEffect(() => {
    setTempFileName(value);
  }, [value]);

  const containerClasses = classnames({
    component_inputfile_container: true,
  });

  const inputClasses = classnames({
    input_text: true,
    component_inputfile_inputfield: true,
    component_inputfile_inputfield_error: inputError,
  });

  const fileInputClasses = classnames({
    no_select: true,
    button: true,
    component_inputfile_button: true,
  });

  const resetButtonClasses = classnames({
    no_select: true,
    button: true,
    component_disabled: !tempFileName || !fileChanged,
    component_inputfile_button: true,
    component_inputfile_resetButton: true,
  });

  const validateInput = (e) => {
    setInputError(null);
    const filename = e.target.files[0].name;
    const spl = filename.split(".");
    const mimeType = spl[spl.length - 1];
    const typeOK = ALLOWED_FILE_TYPES.test(mimeType.toLowerCase());

    let pass = false;
    let err = null;

    if (typeOK) {
      pass = true;
      err = null;
    } else {
      pass = false;
      err = "Please choose image files only.";
    }

    setInputError(err);
    if (err) {
      onError();
    }
    return pass;
  };

  return (
    <div className={containerClasses}>
      <div className="component_inputfile_rowGroup">
        <input
          id={id}
          type="text"
          value={tempFileName}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
          disabled
        ></input>
        <label className={fileInputClasses}>
          <input
            type="file"
            disabled={disabled}
            onChange={(event) => {
              if (event && event.target && event.target.files[0]) {
                if (validateInput(event)) {
                  setTempFileName(event.target.files[0].name);
                  onFileChange(event);
                  setFileChanged(true);
                }
              }
            }}
          ></input>
          {inputFileText}
        </label>
        <div
          className={resetButtonClasses}
          onClick={() => {
            setTempFileName(value || "");
            setInputError(null);
            setFileChanged(false);
            onReset();
          }}
          disabled={!tempFileName || !fileChanged}
        >
          Reset
        </div>
      </div>
      <div className="component_inputfile_errorContainer">
        {inputError && (
          <p className="component_inputfile_error">{inputError}</p>
        )}
      </div>
    </div>
  );
};

export default InputFile;
