import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { JSDOM } from 'jsdom';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

chai.use(sinonChai);

const dom = new JSDOM(`
<!DOCTYPE html>
<html>
    <body>
    </body>
</html>
`);

global.expect = chai.expect;
global.sinon = sinon;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.React = React;
global.window = dom.window;
global.document = dom.window.document;
