import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import App from "../../components/App";
const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];

var data = [{
  id: 0,
  companyName: "Amazon",
  role: "SDE",
  location: "Seattle",
  status: "Sent"
}];
function createBlogPost() {
  return fetch("http://127.0.0.1:5000/getapplications", {
      method: 'GET',
      // body: JSON.stringify(data),
      // body:data,
      headers: {
          // 'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => {
      // if (response.status >= 200 && response.status < 300) {
        // console.log(response.json());  
        // response = response.json()
        // console.log(response);
        response["status"]=response["a_status"]
        // console.log(typeof(mock.table));
        // console.log(response);
        // console.log(typeof(response));
        // console.log(data);
        data.push(response);
        console.log("Data final:", data);
        Dashboard();
        // console.log(mock.table);
        // return mock.data;
        
        return response;
          
          window.location.reload();
        // } else {
          // console.log(response.status);
        //  console.log('Somthing happened wrong');
        // }
  }).catch(err => err);
  // console.log(data[0]);
  }
function refreshPage() {
  console.log("Refresging");
  window.location.reload(false);
}
export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");
  console.log("Logged1");
  return (
    <>
    <button onClick={createBlogPost}>Referesh</button>
            {/* refreshPage */}
      <PageTitle title="Dashboard"/>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget
            title="Support Requests"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={data} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
