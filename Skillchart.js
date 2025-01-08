import React from "react";
import { Radar } from "react-chartjs-2";

export default function Skillchart(){
  const data = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Java", "SQL"],
    datasets: [
      {
        label: "Skill Proficiency",
        data: [95, 90, 85, 80, 75, 70, 65],
        backgroundColor: "rgba(0, 188, 212, 0.2)",
        borderColor: "#00bcd4",
        borderWidth: 2,
        pointBackgroundColor: "#00bcd4",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          color: "white",
        },
        grid: {
          color: "#555",
        },
        angleLines: {
          color: "#555",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "2rem 0", backgroundColor: "#1f1f1f", borderRadius: "10px" }}>
      <h2 style={{ color: "white", textAlign: "center" }}>Skills</h2>
      <Radar data={data} options={options} />
    </div>
  );
};


