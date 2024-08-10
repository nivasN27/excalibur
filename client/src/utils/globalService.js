import Axios from "axios";
import { restbaseurl } from "./constant";

class GlobalService {
  static apiHit = async (callback, url, data = {}, method = "GET") => {
    try {
      const response = await Axios.request({
        baseURL: restbaseurl,
        method,
        url,
        data,
      });
      callback(response.data);
    } catch (error) {
      console.log('call error:', error.message);
    }
  };
}

export default GlobalService;
