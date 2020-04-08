import { shallowMount } from '@vue/test-utils';
import Gallery from '@/components/Gallery';

describe('Gallery component', () => {
	test('Renders No items found message if props.results.length is 0', () => {
		const results = [];
		const component = shallowMount(Gallery, {
			propsData: { results }
		});

		expect(component.text()).toContain('No items found');
	});
});
