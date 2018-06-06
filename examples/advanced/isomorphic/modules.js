import PropsModule from 'snabbdom/modules/props';
import AttrsModule from 'snabbdom/modules/attributes';
import CssModule from 'snabbdom-typestyle';

import modulesForHTML from 'snabbdom-to-html/modules';
import { serverSideCssModule } from 'snabbdom-typestyle';

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
      CssModule
    ];
  }
}

export default getModules;
