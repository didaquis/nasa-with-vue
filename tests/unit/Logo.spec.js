import { shallowMount } from '@vue/test-utils';
import Logo from '@/components/Logo';

describe('Logo component', () => {
	test ('should render an image with src and alt attribute', async () => {
		const component = shallowMount(Logo);

		const fakeURL = './assets/fake-file.png';
		const fakeAlt = 'fake-text';
		component.setData({
			alt: fakeAlt,
			src: fakeURL
		});

		await component.vm.$nextTick;

		expect(component.attributes('src')).toBe(fakeURL);
		expect(component.attributes('alt')).toBe(fakeAlt);
	});
});