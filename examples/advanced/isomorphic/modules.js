import PropsModule from 'snabbdom/modules/props';
import AttrsModule from 'snabbdom/modules/attributes';
import ClassModule from 'snabbdom/modules/class';

import modulesForHTML from 'snabbdom-to-html/modules';
import { makeClientSideCssModule, serverSideCssModule } from 'snabbdom-typestyle';

const getModules = (server = false) => {
  if (server) {

    return [
      modulesForHTML.attributes,
      modulesForHTML.props,
      modulesForHTML.style,
      serverSideCssModule,
      modulesForHTML.class,
    ];
  } else {

    return [
      PropsModule,
      AttrsModule,
      makeClientSideCssModule('#styles'),
      ClassModule
    ];
  }
}

export default getModules;
