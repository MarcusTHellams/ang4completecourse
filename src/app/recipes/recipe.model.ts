export class Recipe {
  public name: String;
  public description: String;
  public imagePath: String;
  constructor(name: string, desciption: string, imagePath: string) {
    this.name = name;
    this.description = desciption;
    this.imagePath = imagePath;
  }
}
