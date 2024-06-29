export default class SomeService {
  async GetDatWeather(): Promise<any> {
    let sss: any = null;
    fetch("http://localhost:5100/weatherforecast", {
      method: "GET",
      mode: "cors",
    }).then(async (response: Response): Promise<any> => {
      sss = await response.json();
      console.log("got resonse from api", sss);
    });

    return sss;
  }
}
