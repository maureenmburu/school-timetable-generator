export class Period {
  constructor(
    public id: number,    
    public name: string,
    public short: string,
    public start: string,
    public end: string,
    public length: number,
    public print: boolean,
    public bell: string
  ) {}
}
