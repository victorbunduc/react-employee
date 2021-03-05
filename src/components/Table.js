import { Component } from "react";
import Data from "./Data";
import Search from "./Search";
import API from "../utils/API";

export default class Table extends Component {
  state = {
    results: [],
    order: 1,
    filtered: [],
  };

  // get data from api
  componentDidMount() {
    API.search().then((res) =>
      this.setState({ results: res.data.results, filtered: res.data.results })
    );
  }

  //filter the table data so that it matches search string
  handleSearchChange = () => {
    //replenish the search. get the state of employees and the input string
    const searchInput = document.querySelector(".search").value.toLowerCase();

    //filter the array
    const filteredEmployeeArray = this.state.results.filter(
      (employee) => employee.name.first.toLowerCase().indexOf(searchInput) > -1
    );
    //set the sate to trigger a rerender
    this.setState({
      filtered: filteredEmployeeArray,
    });
  };

  handleNameClick = () => {
    //get the state of emplyees
    const employeesArray = this.state.results;
    //check if accending
    if (this.state.order === 1) {
      //sort the array
      employeesArray.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
      //set the data of the results
      //set order state to decending
      this.setState({
        results: employeesArray,
        order: -1,
      });
      console.log("ARRAY", employeesArray);
    } else {
      //sort the array
      employeesArray.sort((a, b) => {
        return b.name.first.localeCompare(a.name.first);
      });
      //set the data of the results
      //set order state to decending
      this.setState({
        results: employeesArray,
        order: 1,
      });
    }
  };

  render() {
    return (
      <div>
       <Search handleSearchChange={this.handleSearchChange}/>
        <table className="table mt-2">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                Name<button className="btn btn-outline-primary btn-sm ml-1" onClick={this.handleNameClick}>Sort</button>
              </th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            <Data employees={this.state.filtered} />
          </tbody>
        </table>
      </div>
    );
  }
}
