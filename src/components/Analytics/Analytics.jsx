import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Barchart from "../BarChart/Barchart";
import { Select, Box, Text, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function Analytics() {
  const baseUrl = "http://localhost:4000/api/v1";

  const [category, setCategory] = useState();
  const [subCat, setSubCat] = useState();
  const [data, setData] = useState([]);

  function goBack() {
    window.history.back();
  }

  const handleGenerate = () => {
    axios
      .post(baseUrl + "/report/intialize", {
        companyName: "Test",
        categoryName: category,
        subCategoryName: subCat,
        lowerRange: 100,
        upperRange: 5000,
      })
      .then((res) => {
        const arrayOfObj = Object.entries(res.data.data).map((e) => ({
          [e[0]]: e[1],
        }));
        console.log(arrayOfObj);
        let refinedArray = [];
        arrayOfObj.forEach((ele) => {
          let obj = Object.values(ele);
          console.log(obj[0].start, obj[0].end);
          if (obj[0].end != -1) refinedArray.push(obj.end);
          else refinedArray.push(0);
        });
        setData(refinedArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <div className="dashboard__content__header">
          <div>
            <div className="h2">
              <button className="btn" onClick={() => goBack()}>
                <i className="fas fa-arrow-left" />
              </button>
              <strong>Analytics</strong>
            </div>
            <span>Get the right predictions </span>
          </div>
          <input type="text" name="" id="" placeholder="Search Here" />
        </div>
        <Box
          p={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border="1px"
          borderRadius={"2xl"}
          gap={"10px"}
          marginY={"1"}
        >
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select Category"
          >
            <option value="1">Technology</option>
            <option value="2">Furniture</option>
            <option value="3">Office</option>
          </Select>
          <Select
            value={subCat}
            onChange={(e) => setSubCat(e.target.value)}
            placeholder="Select Sub-Category"
          >
            <option value="21">Phones</option>
            <option value="22">Storage</option>
            <option value="23">Machines</option>
            <option value="11">Furnishings</option>
            <option value="12">Chairs</option>
            <option value="13">Tables</option>
            <option value="24">Accessories</option>
            <option value="31">Fasteners</option>
            <option value="32">Paper</option>
            <option value="33">Envelopes</option>
            <option value="34">Art</option>
            <option value="35">Binders</option>
            <option value="36">Appliences</option>
            <option value="37">Labels</option>
            <option value="38">Copiers</option>
            <option value="39">BookCases</option>
          </Select>
          <Button
            onClick={handleGenerate}
            width={"100%"}
            colorScheme="messenger"
          >
            Generate
          </Button>
        </Box>
        <div width={"100%"} className="dashboard__content__main">
          <div className="chart">
            <div className="h2">Results</div>
            <Bar
              options={option}
              data={{
                labels,
                datasets: data,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
