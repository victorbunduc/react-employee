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

   // API call for randomUser:
  componentDidMount() {
    API.search().then((res) =>
      this.setState({ results: res.data.results, filtered: res.data.results })
    );
  }
 // Handle input in search bar:
    handleSearchChange = () => {
    
    
    const searchInput = document.querySelector(".search").value.toLowerCase();

    
    const filteredEmployeeArray = this.state.results.filter(
      (employee) => employee.name.first.toLowerCase().indexOf(searchInput) > -1
    );
   
    this.setState({
      filtered: filteredEmployeeArray,
    });
  };
// Sort by Name:
  handleNameClick = () => {
    
   
   const employeesArray = this.state.results;
   
 
    if (this.state.order === 1) {
     
      employeesArray.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
  
      
      this.setState({
        results: employeesArray,
        order: -1,
      });
      console.log("ARRAY", employeesArray);
    } else {
 
      employeesArray.sort((a, b) => {
        return b.name.first.localeCompare(a.name.first);
      });
     
  
      this.setState({
        results: employeesArray,
        order: 1,
      });
    }
  };
  // Render items:
  render() {
    return (
     <table className="tableEmployee ">
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
                </tr>
            </thead>

            <tbody className= "">
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                     

                        <td> <img className="
                        "src={result.picture.medium} alt="" /></td>
                        
                        <td>{result.name.first + " " + result.name.last}  </td>

                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>

                    </tr>
                ))}
            </tbody>
        </table >
    )

}
export default Table;
