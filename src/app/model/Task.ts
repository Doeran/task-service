export class Task {
  get userImageId(): number {
    return this._userImageId;
  }

  set userImageId(value: number) {
    this._userImageId = value;
  }
  constructor() {
  }
  private _id: number;
  private _userName: string;
  private _userEmail: string;
  private _userText: string;
  private _userImageId: number;
  private _taskStatus: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get userEmail(): string {
    return this._userEmail;
  }

  set userEmail(value: string) {
    this._userEmail = value;
  }

  get userText(): string {
    return this._userText;
  }

  set userText(value: string) {
    this._userText = value;
  }

  get taskStatus(): boolean {
    return this._taskStatus;
  }

  set taskStatus(value: boolean) {
    this._taskStatus = value;
  }
}
