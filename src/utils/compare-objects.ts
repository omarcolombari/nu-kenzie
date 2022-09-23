import { IFinance } from "@/types/finances";

interface IPropsCompareObjects {
  firstObject: IFinance;
  secondObject: IFinance;
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
      firstObject[key as keyof IFinance] !== secondObject[key as keyof IFinance]
    ) {
      return false;
    }
  }
  return true;
};
