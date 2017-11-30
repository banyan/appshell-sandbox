import { asyncComponent } from 'react-async-component';

const AsyncAbout = asyncComponent({
  name: 'AsyncAbout',
  serverMode: 'resolve',
  resolve: async () => {
    const module = await import(/* webpackChunkName: "about" */ './About');
    return module.default;
  },
});

export default AsyncAbout;
