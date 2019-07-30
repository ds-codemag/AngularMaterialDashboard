export class Upload {

  name: string;
  type: string;
  size: number;
  url: string;
  date: string;

  constructor(name: string, type: string, size: number, url: string) {
    const date = new Date();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    this.name = name;
    this.type = type;
    this.size = size;
    this.url = url;
    this.date = `${day}-${month}-${year} ${time}`;
  }
}
