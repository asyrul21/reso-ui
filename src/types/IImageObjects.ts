export type ImageType = "temp" | "remote";

export interface IImageObjects {
  path: string;
  alt: string;
  type: ImageType;
}
