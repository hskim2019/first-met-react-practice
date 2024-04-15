import React from "react";

const students = [
    {
        id: 1,
        name: "James",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {/* {students.map((student) => {
                // return <li key={student.id}>{student.name}</li>;
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })} */}
            {students.map((student,idx) => {
                // return <li key={student.id}>{student.name}</li>;
                return <li key={`student-id-${idx}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;