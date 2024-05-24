import React from "react";
import "../css/course.css";

const tableData = [
  { type: 'Quiz', scores: ['8/10', '9/10', '17/20', '-'] },
  { type: 'Surprise Quiz', scores: ['3.5/5', '3.5/5', '-', '-'] },
];

const columnTitles = ['', 'Quiz 1', 'Quiz 2', 'Quiz 3', 'Total'];

function App() {
  return (
    <div className="App">
      <main>
        <div className="main-container">
          <aside className="course-details">
            <h2>IT 202 - Web Technology</h2>
            <div className="course-links">
              <a href="#">Open Moodle Page</a>
              <a href="#">Open Classroom</a>
              <a href="#">Open Meet Link</a>
            </div>
          </aside>
          <div className="course-content">
            <h3>Schedule</h3>
            <p>Every Monday - 9:00-12:00 @ 9114</p>
            <p>Every Wednesday - 15:45-17:15 @ 9114</p>

            <h3>Attendance</h3>
            <p>Continuous Evaluation</p>
            <table>
              <thead>
                <tr>
                  {columnTitles.map((title, index) => (
                    <th key={index}>{title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.type}</td>
                    {row.scores.map((score, scoreIndex) => (
                      <td key={scoreIndex}>{score}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
