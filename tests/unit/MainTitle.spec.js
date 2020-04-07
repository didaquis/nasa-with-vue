import { shallowMount } from '@vue/test-utils';
import MainTitle from '@/components/MainTitle.vue';

describe('MainTitle.vue', () => {
	test('renders props.text when passed', () => {
		const text = 'new message';
		const wrapper = shallowMount(MainTitle, {
			propsData: { text }
		});
		expect(wrapper.text()).toMatch(text);
	});
});
