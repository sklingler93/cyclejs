import PropsModule from 'snabbdom/modules/props';
import AttrsModule from 'snabbdom/modules/attributes';

import modulesForHTML from 'snabbdom-to-html/modules';
import { makeClientSideCssModule, serverSideCssModule } from 'snabbdom-typestyle';

const getModules = (server = false) => {
  if (server) {

    return [
      modulesForHTML.attributes,
      modulesForHTML.props,
      modulesForHTML.class,
      modulesForHTML.style,
      serverSideCssModule
    ];
  } else {

    return [
      PropsModule,
      AttrsModule,
      makeClientSideCssModule('#styles')
    ];
  }
}

export default getModules;
