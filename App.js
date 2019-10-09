import React from 'react';
import {View, Text} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const PAGAMENTOS = gql`
  {
    pagamentos(skip: 0, take: 5) {
      id nome clienteId
    }
  }
`;

export default App = () => {
  const { data, error, loading } = useQuery(PAGAMENTOS);
  if (loading) {
    return <View><Text>Loading...</Text></View>;
  };
  if (error) {
    return <View><Text>{error.message}</Text></View>;
  };

  return (
    <View>
      {data.pagamentos.map(pagamento => (
        <View key={pagamento.id}>
          <Text>{pagamento.id}</Text>
          <Text>{pagamento.nome}</Text>
          <Text>{pagamento.clienteId}</Text>
        </View>
      ))}
    </View>
  );
};