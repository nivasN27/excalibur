import Axios from "axios";
import { restbaseurl } from "./constant";

class GlobalService {
  static apiHit = async (callback, url, value = {}, method = "get") => {
    try {
      const response = await Axios.request({
        baseURL: restbaseurl,
        method,
        url,
        value,
      });
      callback(response.data);
    } catch (error) {
      console.log('call error:', error.message);
    }
  };
}

export default GlobalService;
