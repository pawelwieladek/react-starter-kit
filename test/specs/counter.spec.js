import { Counter } from '../../scripts/counter';

describe('<Counter /> should', () => {
    it('render header and two buttons', () => {
        const counter = mount(<Counter />);
        expect(counter.find('h1')).to.have.length(1);
        expect(counter.find('button')).to.have.length(2);
    });

    it('render default value', () => {
        const counter = mount(<Counter />);
        expect(counter.ref('value').text()).equal('0');
    });

    it('render initial value', () => {
        const counter = mount(<Counter initialValue={3} />);
        expect(counter.ref('value').text()).equal('3');
    });

    it('increment its state', () => {
        const counter = mount(<Counter />);
        counter.ref('increment').simulate('click');
        expect(counter.state().value).equal(1);
    });

    it('increment its state multiple times', () => {
        const counter = mount(<Counter />);
        counter.ref('increment').simulate('click');
        counter.ref('increment').simulate('click');
        counter.ref('increment').simulate('click');
        expect(counter.state().value).equal(3);
    });

    it('reset its state to default value', () => {
        const counter = mount(<Counter />);
        counter.ref('increment').simulate('click');
        counter.ref('reset').simulate('click');
        expect(counter.state().value).equal(0);
    });

    it('reset its state to initial value', () => {
        const counter = mount(<Counter initialValue={3} />);
        counter.ref('increment').simulate('click');
        counter.ref('reset').simulate('click');
        expect(counter.state().value).equal(3);
    });
});