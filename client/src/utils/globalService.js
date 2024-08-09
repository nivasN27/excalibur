import Axios from "axios";
import { restbaseurl } from "./constant";

class GlobalService {
  static apiHit = async (callback, url, value = {}, method = "get") => {
    console.log(url, value)
    try {
      const response = await Axios.request({
        baseURL: restbaseurl,
        method,
        url,
        value,
      });
      console.log(response);
      callback(response.data);
    } catch (error) {
      console.log('call error:', error.message);
    }
  };
}

export default GlobalService;
