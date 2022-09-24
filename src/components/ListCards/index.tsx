import { ITransaction } from "@/types/transactions";
import { Card } from "../Card";
import { CardEmpty } from "../CardEmpty";
import { List, TitleH3 } from "./styles";

interface IPropsListCards {
  transactions: ITransaction[];
}

export const ListCards: React.FC<IPropsListCards> = ({ transactions }) => {
  return (
    <List>
      {transactions.length ? (
        transactions.map((transaction) => <Card card={transaction} />)
      ) : (
        <>
          <TitleH3>Você ainda não possui nenhum lançamento</TitleH3>
          <CardEmpty />
          <CardEmpty />
          <CardEmpty />
        </>
      )}
    </List>
  );
};
