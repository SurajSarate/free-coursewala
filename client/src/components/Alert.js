import React,{useContext} from "react";
import CourseContext from "../context/course/courseContext";

function Alert() {
    const context = useContext(CourseContext);
    const { alert } = context;
  return (
    <div style={{height:'auto'}}>
     {alert && <div className={`alert alert-${alert.type} show" role="alert" `}>
        <strong>{alert.msg}</strong>
      </div>}
    </div>
    
  );
}

export default Alert;
