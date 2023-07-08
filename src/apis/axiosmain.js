import axios from "axios";

const axiosmain = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MiIsIkhldEhhblN0cmluZyI6IjExLzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjI1MjgwMDAwMCIsIm5iZiI6MTY2NzA2MjgwMCwiZXhwIjoxNzAyNDAwNDAwfQ.WRTj_6tr0SSgX4a_yoloJ5KyL5DGv9E21DyHyblms2A",
  },
});


export default axiosmain;