import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  function handleclick(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
        onClick={handleclick}
          name="title"
          placeholder="Title"
          onChange={props.onInputChecked}
          value={props.value1}
        />
        {isExpanded&&
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?3:1}
          onChange={props.onTextareaChecked}
          value={props.value2}
        />}
        <Zoom in={isExpanded}>
          <Fab onClick={props.onButtonChecked}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
