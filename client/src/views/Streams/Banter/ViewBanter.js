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


class ViewBanter extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { feed } = this.props
    const {name, text, date, avatarURL, flagURL } = this.props.data

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
                    <th className="text-center">Customer</th>
                    <th className="text-center">Country</th>
                    <th>Message</th>
                    <th>Watson Response</th>
                    <th>Analysis</th>
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
                      <td className="text-left">
                        <div className="clearfix">
                          <div className="float-left" style={{width: 400 + 'px'}}>
                            {message.text}
                          </div>
                        </div>
                      </td>
                      <td className="text-left">
                        <div className="float-left" style={{width: 400 + 'px'}}>
                          {message.analysis}
                        </div>
                      </td>
                      <td>
                        <div className="small text-muted">
                          {message.analysis}
                        </div>
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
