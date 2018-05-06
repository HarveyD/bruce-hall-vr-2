import Constants from "../constants";
import { LocationDetail } from "./LocationDetail";

export default class LocationList {
	public static Locations: LocationDetail[] = [
		new LocationDetail(Constants.Left, 'North Quad', 'north-quad', Constants.Half),
		new LocationDetail(Constants.Right, 'Dining Hall', 'dining-hall', Constants.Half),
		new LocationDetail(Constants.Left, 'South Quad', 'south-quad', Constants.Half),
		new LocationDetail(Constants.Right, 'Reception', 'reception', Constants.Half),
		new LocationDetail(Constants.Left, 'Packard Quad', 'pac-quad', Constants.Half),
		new LocationDetail(Constants.Right, 'Extension Lawn', 'extension-lawn', Constants.Half),
		new LocationDetail(Constants.Down, 'Front of Bruce Hall', 'front', Constants.Full),
	];
}
