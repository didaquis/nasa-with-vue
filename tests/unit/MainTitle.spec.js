import { shallowMount } from '@vue/test-utils';
import MainTitle from '@/components/MainTitle.vue';

describe('MainTitle.vue', () => {
	test('renders props.text when passed', () => {
		const text = 'new message';
		const component = shallowMount(MainTitle, {
			propsData: { text }
		});

		expect(component.is('h1')).toBe(true);
		expect(component.text()).toMatch(text);
	});
});
