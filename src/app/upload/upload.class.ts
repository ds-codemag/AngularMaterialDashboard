export class Upload {

  name: string;
  type: string;
  size: number;
  url: string;
  createdAt: Date;

  constructor(name: string, type: string, size: number, url: string) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.url = url;
    this.createdAt = new Date();
  }
}
