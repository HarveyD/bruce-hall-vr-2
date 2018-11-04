import Constants from "../constants";
import { LocationDetail } from "./LocationDetail";

export default class LocationList {
	public static Locations: LocationDetail[] = [
		new LocationDetail(Constants.Left, 'North Quad', 'north-quad'),
		new LocationDetail(Constants.Right, 'Dining Hall', 'dining-hall'),
		new LocationDetail(Constants.Left, 'South Quad', 'south-quad'),
		new LocationDetail(Constants.Right, 'Reception', 'reception'),
		new LocationDetail(Constants.Left, 'Packard Quad', 'pac-quad'),
		new LocationDetail(Constants.Right, 'Extension Lawn', 'extension-lawn'),
		new LocationDetail(Constants.Down, 'Front of Bruce Hall', 'front'),
	];
}
