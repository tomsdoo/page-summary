export class Util {
  public static getTimes($: Function){
    const times: any[] = [];
    $("body time").each((index: number, element: any) => {
      times.push(
        $(element)
          .attr("datetime")
      );
    });
    return times;
  }
}
