import { asyncComponent } from 'react-async-component';

const AsyncLogin = asyncComponent({
  name: 'AsyncLogin',
  serverMode: 'resolve',
  resolve: async () => {
    const module = await import(/* webpackChunkName: "login" */ './Login');
    return module.default;
  },
});

export default AsyncLogin;
