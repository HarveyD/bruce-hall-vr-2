export class LocationDetail {
  constructor(
    public animationDirection: string,
    public name: string,
    public vrImgName: string,
  ) { }

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
