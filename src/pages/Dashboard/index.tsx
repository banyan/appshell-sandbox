import { asyncComponent } from 'react-async-component';

const AsyncDashboard = asyncComponent({
  name: 'AsyncDashboard',
  serverMode: 'resolve',
  resolve: async () => {
    const module = await import(/* webpackChunkName: "dashboard" */ './Dashboard');
    return module.default;
  },
});

export default AsyncDashboard;