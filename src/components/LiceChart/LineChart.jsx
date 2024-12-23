import { LineChart as LChart, Line, XAxis } from 'recharts';
const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Student 1", Math: 78, Physics: 85, Chemistry: 80 },
        { id: 2, name: "Student 2", Math: 60, Physics: 65, Chemistry: 70 },
        { id: 3, name: "Student 3", Math: 82, Physics: 88, Chemistry: 84 },
        { id: 4, name: "Student 4", Math: 50, Physics: 55, Chemistry: 60 },
        { id: 5, name: "Student 5", Math: 92, Physics: 90, Chemistry: 95 },
        { id: 6, name: "Student 6", Math: 70, Physics: 75, Chemistry: 72 },
        { id: 7, name: "Student 7", Math: 62, Physics: 68, Chemistry: 65 },
        { id: 8, name: "Student 8", Math: 85, Physics: 80, Chemistry: 85 },
        { id: 9, name: "Student 9", Math: 45, Physics: 50, Chemistry: 55 },
        { id: 10, name: "Student 10", Math: 95, Physics: 92, Chemistry: 90 }
      ];

    return (
        <div className='m-32 mt-24 bg-white'>
            <LChart className='ml-12' width={500} height={400} data={studentMarks}>
            <XAxis dataKey="name"></XAxis>
                <Line  dataKey="Math" stroke='red'></Line>
                <Line  dataKey={"Physics"} stroke='black'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;