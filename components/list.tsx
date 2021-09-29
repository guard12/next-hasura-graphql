import { useQuery } from 'urql';

const ListQuery = `
  query {
    payment {
      id
      currency
      state
      amount
      deposit {
        quotes {
          id
          payment_amount
        }
        customer_email
      }
    }
  }
`;

export const List = () => {
  const [ result ] = useQuery({
    query: ListQuery,
    requestPolicy: 'cache-and-network',
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {data.payment.map((payment:any) => (
        <ul>
          <li key={payment.id}>
            {payment.amount}
            {payment.state}
          </li>
          <li>
          {payment.currency}
          </li>
          Deposit:
          <ul>
            <li>
            Email: {payment.deposit.customer_email}
            </li>
            {payment.deposit.quotes.map((quote:any) => (
                  <><div>
                  id: {quote.id}
                  </div>
                  <div>
                  payment amount: {quote.payment_amount}
                  </div></>
            ))}
          </ul>   
        </ul>
      ))}
    </div>
  );
};