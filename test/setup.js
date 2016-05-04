import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'jsdom';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

chai.use(sinonChai);

global.expect = chai.expect;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.React = React;
global.document = jsdom.jsdom(`
<!DOCTYPE html>
<html>
    <body>
    </body>
</html>
`);
global.window = document.defaultView;
