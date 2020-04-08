import { shallowMount } from '@vue/test-utils';
import ResultsCounter from '@/components/ResultsCounter';

describe('ResultsCounter component', () => {
	test('Should render "No items found" message if props.counter is 0', () => {
		const counter = 0;
		const component = shallowMount(ResultsCounter, {
			propsData: { counter }
		});

		expect(component.text()).toContain('No items found');
	});

	test('should render "Number of images found: 42" message if props.counter is 42', () => {
		const counter = 42;
		const component = shallowMount(ResultsCounter, {
			propsData: { counter }
		});

		expect(component.text()).toContain('Number of images found: 42');
	});
});
