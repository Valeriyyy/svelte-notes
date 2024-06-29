export type Note = {
  id: number;
  header: string;
  body: string;
  isDeleted: boolean;
  createdDate?: Date;
  lastModifiedDate?: Date;
  deletedDate?: Date;
}
