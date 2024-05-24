 import React from "react";
import "../css/attendance.css";

function Attendance() {
  const attendanceData = [
    { course: "IT202", weeks: [1, 0, -1, 1, 0, 1] },
    { course: "CS204", weeks: [1, 0, -1, 1, 0, 1] },
    { course: "CS206", weeks: [1, 0, -1, 1, 0, 1] },
    { course: "CS208", weeks: [1, 0, -1, 1, 0, 1] },
    { course: "HS202", weeks: [1, 0, -1, 1, 0, 1] },
  ];

  const getStatusSymbol = (attended) => {
    switch (attended) {
      case 1:
        return "✅";
      case 0:
        return "❌";
      case -1:
        return "H";
      default:
        return "";
    }
  };

  return (
    <div className="attendance-table">
      <h1>Attendance Table:</h1>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            {attendanceData[0].weeks.map((_, weekIndex) => (
              <th key={weekIndex}>Week {weekIndex + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data, index) => (
            <tr key={index}>
              <td>{data.course}</td>
              {data.weeks.map((attended, weekIndex) => (
                <td key={weekIndex}>{getStatusSymbol(attended)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
