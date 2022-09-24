import { ITransaction } from "@/types/transactions";

interface IPropsCompareObjects {
  firstObject: ITransaction;
  secondObject: ITransaction;
}

export const compareObjects = ({
  firstObject,
  secondObject,
}: IPropsCompareObjects) => {
  const firstObjectKeys = Object.keys(firstObject);
  const secondObjectKeys = Object.keys(secondObject);
  if (firstObjectKeys.length !== secondObjectKeys.length) {
    return false;
  }
  for (let key of firstObjectKeys) {
    if (
      firstObject[key as keyof ITransaction] !==
      secondObject[key as keyof ITransaction]
    ) {
      return false;
    }
  }
  return true;
};
