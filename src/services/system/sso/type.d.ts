declare namespace API.System {
  type LoginDTO = {
    username: string;
    password: string | false;
    loginMode: string;
    uuid?: string;
    imageVerificationCode?: string;
    phone?: string;
    phoneVerificationCode?: string;
    email?: string;
    emailVerificationCode?: string;
    bgImageWidth?: number;
    bgImageHeight?: number;
    sliderImageWidth?: number;
    sliderImageHeight?: number;
    startSlidingTime?: string;
    endSlidingTime?: string;
    trackList?: TrackDTO[];
  };

  type TokenInfoVO = {
    access_token: string;
    token_type: string;
    refresh_token: string;
    scope: string;
    expires_in: number;
    additionalInfo: Map;
  };
  type RefreshTokenDTO = {
    refresh_token: string;
  };
  type Captcha = {
    code: number,
  }
}
