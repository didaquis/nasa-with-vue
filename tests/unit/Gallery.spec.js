import { shallowMount } from '@vue/test-utils';
import Gallery from '@/components/Gallery';

describe('Gallery component', () => {
	test('Should not render anything if prop.images is an empty array', () => {
		const images = [];
		const component = shallowMount(Gallery, {
			propsData: { images }
		});

		expect(component.isEmpty()).toBe(true);
	});

	test('Should render images if prop.images is an array with data', () => {
		const images = [
			{
				links: [
					{
						href: 'fake-url-0'
					}
				],
				href: 'fake-url',
				data: [
					{
						title: 'fake-title-0',
						nasa_id: 'PIA18906',
					}
				]
			},
			{
				links: [
					{
						href: 'fake-url-1'
					}
				],
				href: 'fake-url',
				data: [
					{
						title: 'fake-title-1',
						nasa_id: 'PIA14729',
					}
				]
			}
		];

		const component = shallowMount(Gallery, {
			propsData: { images }
		});

		expect(component.isEmpty()).not.toBe(true);

		expect(component.findAll('img').at(0).attributes().src).toEqual('fake-url-0');
		expect(component.findAll('img').at(0).attributes().alt).toEqual('fake-title-0');

		expect(component.findAll('img').at(1).attributes().src).toEqual('fake-url-1');
		expect(component.findAll('img').at(1).attributes().alt).toEqual('fake-title-1');
	});
});
