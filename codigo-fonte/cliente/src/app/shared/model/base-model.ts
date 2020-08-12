export interface BaseModel<T> {
  data: T;
  message: string;
  success?: boolean;
}
