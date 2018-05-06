export class LocationDetail {
	public animationDirection: string;
	public name: string;
	public vrImgName: string;
	public width: string;

	constructor(animationDirection: string, name: string, vrImgName: string, width: string) {
		this.animationDirection = animationDirection;
		this.name = name;
		this.vrImgName = vrImgName;
		this.width = width;
	}

	get vrImageUrl(): string {
		return require(`../assets/vr-shots/${this.vrImgName}.jpg`);
	}

	get previewImageUrl(): string {
		return require(`../assets/preview/${this.vrImgName}.jpg`);
	}
}