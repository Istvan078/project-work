export class Chat {
  public key: string = "";
  public participants: [string, string];
  public message: {
    senderId: string;
    message: string;
    timeStamp: string;
    displayName: string;
    profilePhoto: string;
    email: string;
    seen: boolean;
  };

  [indexS: string | number]: string | number | object;
  constructor() {
    this.participants = ['user_id_1', 'user_id_2'];
    this.message = {
      senderId: 'user_id_1',
      message: '',
      timeStamp: '',
      displayName: '',
      profilePhoto: '',
      email: '',
      seen: false,
    };
  }

  public set _setKey(key: string) {
    this.key = key;
  }
}
