import axios from "axios";

// getting data from api
export default {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};