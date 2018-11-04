export class LocationDetail {
  public animationDirection: string;
  public name: string;
  public vrImgName: string;
  public width: string;

  constructor(
    animationDirection: string,
    name: string,
    vrImgName: string,
    width: string
  ) {
    this.animationDirection = animationDirection;
    this.name = name;
    this.vrImgName = vrImgName;
    this.width = width;
  }

  get vrImageUrl(): string {
    return this.isMobile()
      ? require(`../assets/vr-shots/mobile/${this.vrImgName}.jpg`)
      : require(`../assets/vr-shots/desktop/${this.vrImgName}.jpg`);
  }

  private isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  get previewImageUrl(): string {
    return require(`../assets/preview/${this.vrImgName}.jpg`);
  }
}
