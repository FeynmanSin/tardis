declare namespace API.System {
  type TrackDTO = {
    x: number;
    y: number;
    t: number;
    type: string;
  };
  type ImageCaptchaTrackDTO = {
    uuid: string;
    bgImageWidth: number;
    bgImageHeight: number;
    sliderImageWidth: number;
    sliderImageHeight: number;
    startSlidingTime: string;
    endSlidingTime: string;
    trackList: TrackDTO[];
  };

  type ImageCaptchaDTO = {
    type: string;
  };

  type ImageCaptchaVO = {
    id: string;
    backgroundImageWidth: number;
    backgroundImageHeight: number;
    sliderImageWidth: number;
    sliderImageHeight: number;
    startSlidingTime: number;
    entSlidingTime: number;
    data: any;
    backgroundImage: string;
    sliderImage: string;
  };
}
