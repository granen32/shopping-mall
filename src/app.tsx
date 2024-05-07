import { QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';
import { getClient } from './queryClient';
import { routes } from './routes';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '@/components/common/layout';

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        {elem}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Layout>
  );
};

export default App;
