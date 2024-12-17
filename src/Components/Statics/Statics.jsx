import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";
const Statics = () => {
  const jobsdata = [
    {
      job_id: 1,
      job_title: "Software Engineer",
      job_type: "remote",
      salary: 60000,
    },
    {
      job_id: 2,
      job_title: "Frontend Developer",
      job_type: "onsite",
      salary: 50000,
    },
    {
      job_id: 3,
      job_title: "Backend Developer",
      job_type: "remote",
      salary: 65000,
    },
    {
      job_id: 4,
      job_title: "Data Analyst",
      job_type: "onsite",
      salary: 48000,
    },
    {
      job_id: 5,
      job_title: "DevOps Engineer",
      job_type: "remote",
      salary: 70000,
    },
    {
      job_id: 6,
      job_title: "UX/UI Designer",
      job_type: "onsite",
      salary: 50000,
    },
    {
      job_id: 7,
      job_title: "QA Engineer",
      job_type: "remote",
      salary: 55000,
    },
    {
      job_id: 8,
      job_title: "Product Manager",
      job_type: "onsite",
      salary: 75000,
    },
    {
      job_id: 9,
      job_title: "Systems Administrator",
      job_type: "remote",
      salary: 58000,
    },
    {
      job_id: 10,
      job_title: "Technical Support Specialist",
      job_type: "onsite",
      salary: 45000,
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex gap-20 ml-20">
        <div>
          <BarChart width={400} height={400} data={jobsdata}>
            <Bar dataKey="salary" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </div>
        <div>
          {" "}
          <PieChart width={500} height={500}>
            <Pie
              dataKey="salary"
              startAngle={360}
              endAngle={0}
              data={jobsdata}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
        </div>
      </div>
      <div className="mb-10 flex justify-center">
        <LineChart
          width={500}
          height={300}
          data={jobsdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="job_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="salary"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Statics;
