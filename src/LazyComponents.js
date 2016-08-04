const components = {
  Landing: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./modules/Landing/containers/LandingPageContainer').default);
    });
  },
  Info: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./modules/Info/containers/InfoPageContainer').default);
    });
  },
};


/**
 * Function which return component for router
 *
 * @param  {String} name
 *
 * @return {Function}
 */
export function asyncComponent(name) {
  return components[name];
}
