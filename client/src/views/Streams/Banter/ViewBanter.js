import React, {Component} from "react";
import {Bar, Line} from "react-chartjs-2";
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBlock,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

// Social Box Chart
const socialBoxData = [
  {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
  {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
  {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
  {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'}
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients'
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic'
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR'
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate'
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label
      }
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}


class ViewBanter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    const { feed } = this.props
    const {name, text, date, avatarURL, flagURL } = this.props.data
    console.log(feed)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBlock className="card-body">
                <br/>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-default">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                  {feed.map((message) => (
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={message.avatarURL} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>{message.name}</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={message.flagURL} alt="USA" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{message.text}</strong>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="50"/>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-cc-mastercard" style={{fontSize: 24 + 'px'}}></i>
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                  ))}

                  </tbody>
                </Table>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ViewBanter;
