import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search';

import axios from 'axios';
jest.mock('axios');

describe('Search component', () => {
	test('Should call the API on submit', async () => {
		axios.get.mockImplementation((url) => {
			expect(url).toBeDefined();
			expect(url).toBe('https://images-api.nasa.gov/search?media_type=image&q=moon');

			return Promise.resolve({ data: { collection: { items: [] }} });
		});

		const component = shallowMount(Search);
		const query = 'moon';

		component.setData({ query });
		await component.find('form').trigger('submit');
	});

	test('Should update the results array when the API returns data', async () => {
		const fakeResponse = {
			collection: {
				items: [
					{
						links: [
							{
								href: 'fake-url'
							}
						],
						href: 'fake-url',
						data: [
							{
								title: 'fake-title',
								nasa_id: 'PIA18906',
							}
						]
					},
					{
						links: [
							{
								href: 'fake-url'
							}
						],
						href: 'fake-url',
						data: [
							{
								title: 'fake-title',
								nasa_id: 'PIA14729',
							}
						]
					}
				]
			}
		};

		axios.get.mockResolvedValue(
			{ 
				data: fakeResponse
			}
		);

		const component = shallowMount(Search);
		const query = 'sun';
		const results = [];

		component.setData({ query, results });
		await component.find('form').trigger('submit');

		expect(component.vm.numberOfImages).toBe(2);
		expect(axios.get).toBeCalledWith('https://images-api.nasa.gov/search?media_type=image&q=' + query);
	});
});
