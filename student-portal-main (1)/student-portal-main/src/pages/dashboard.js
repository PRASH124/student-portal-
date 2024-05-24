import React, { useState } from 'react';

const containerStyle = {
  width: '80%',
  maxWidth: '1000px',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  margin: '0 auto',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#e0e0e0',
  borderBottom: '1px solid #ddd',
};

const logoStyle = {
  width: '100px',
  height: 'auto',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  marginRight: '1rem',
};

// const mainContentStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//   // gap: '1rem',
// };

const announcementStyle = {
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const tableHeaderStyle = {
  backgroundColor: '#f0f0f0',
  fontWeight: 'bold',
};

const cellStyle = {
  padding: '0.5rem',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const presentStyle = {
  color: 'green',
};

const absentStyle = {
  color: 'red',
};

const pendingStyle = {
  color: 'orange',
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search Announcements..."
        style={{ padding: '0.5rem', flexGrow: 1 }}
        value={searchTerm}
        onChange={handleChange}
      />
      <button style={{ padding: '0.5rem' }}>Search</button>
    </div>
  );
};

const Announcement = ({ announcement }) => {
  return <div key={announcement.title} style={announcementStyle}>{announcement.title}</div>;
};

const AttendanceRecord = ({ record }) => {
  const attendanceCells = record.days.map((day) => (
    <td
      key={day.day}
      style={{
        ...cellStyle,
        ...(day.status === '0' ? presentStyle : day.status === 'X' ? absentStyle : pendingStyle),
      }}
    >
      {day.status}
    </td>
  ));

  return (
    <tr key={record.week}>
      <td style={cellStyle}>{record.week}</td>
      {attendanceCells}
    </tr>
  );
};

const UpcomingClass = ({ clas }) => {
  const renderRecurringClasses = () => {
    if (!clas.recurring) {
      return <li key={`${clas.time}-${clas.title}`}>{clas.time} - {clas.title}</li>;
    } else {
      const recurringClasses = [];
      for (let i = 0; i < clas.recurringDays.length; i++) {
        recurringClasses.push(
          <li key={`${clas.time}-${clas.title}-${i}`}>
            {clas.recurringDays[i]} - {clas.title}
          </li>
        );
      }
      return recurringClasses;
    }
  };

  return (
    <ul>
      {renderRecurringClasses()}
    </ul>
  );
};

const Dashboard = () => {
  const announcementsData = [
    { title: 'CS204(4/2/2024) is swapped  with HS202(5/2/2024)' },
    { title: 'SPORTS CLUB Chess Event Winners' },
    { title: 'New Mess-Menu for April' },
    { title: 'Friday(5/4/2024) is to be treated as Monday' },
  ];

  const attendanceData = [
    {
      week: 'Week 1',
      days: [
        { day: 'Monday', status: '0' },
        { day: 'Tuesday', status: 'X' },
        { day: 'Wednesday', status: '-' },
        { day: 'Thursday', status: '0' },
        { day: 'Friday', status: 'X' },
      ],
    },
    {
      week: 'Week 2',
      days: [
        { day: 'Monday', status: 'X' },
        { day: 'Tuesday', status: '0' },
        { day: 'Wednesday', status: '0' },
        { day: 'Thursday', status: '-' },
        { day: 'Friday', status: '0' },
      ],
    },
  ];

  const upcomingClassesData = [
    { time: '09:00 AM', title: 'Class 1' },
    { time: '11:00 AM', title: 'Class 2', recurring: true, recurringDays: ['Monday', 'Wednesday'] },
    { time: '02:00 PM', title: 'Class 3' },
  ];

  return (
    <div style={containerStyle}>
      <SearchBar />
      <div>
        <div>
          <h2>Announcements</h2>
          {announcementsData.map((announcement) => (
            <Announcement key={announcement.title} announcement={announcement} />
          ))}
        </div> <br />
        <div>
          <h2>Attendance</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Week</th>
                <th style={tableHeaderStyle}>Monday</th>
                <th style={tableHeaderStyle}>Tuesday</th>
                <th style={tableHeaderStyle}>Wednesday</th>
                <th style={tableHeaderStyle}>Thursday</th>
                <th style={tableHeaderStyle}>Friday</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record) => (
                <AttendanceRecord key={record.week} record={record} />
              ))}
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <br />
        </div> <br />
        <div>
          <h2>Upcoming Classes</h2>
          {upcomingClassesData.map((clas) => (
            <UpcomingClass key={`${clas.time}-${clas.title}`} clas={clas} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
