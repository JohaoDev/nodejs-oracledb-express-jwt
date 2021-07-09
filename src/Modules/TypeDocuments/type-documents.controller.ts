import { selectAll, selectByID } from "../../Database/db-request";

export const getAll = async () => {
  return selectAll("docu");
};

export const getByID = async (id: number) => {
  return selectByID("docu", id);
};
