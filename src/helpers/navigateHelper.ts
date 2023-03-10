import { NavigateFunction } from "react-router-dom";

export class NavigateHelper {
  private _navigator: NavigateFunction

  constructor(navigator: NavigateFunction) {
    this._navigator = navigator;
  }

  public useNavigator(path: string) {
    this._navigator(path)
  }
}