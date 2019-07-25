export class Upload {

  displayedName: string;
  name: string;
  type: string;
  size: number;
  url: string;
  createdAt: Date;

  constructor(displayedName: string, name: string, type: string, size: number, url: string) {
    this.displayedName = displayedName;
    this.name = name;
    this.type = type;
    this.size = size;
    this.url = url;
    this.createdAt = new Date();
  }
}
