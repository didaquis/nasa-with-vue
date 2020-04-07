import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search';

import axios from 'axios';
jest.mock('axios');

describe('Search component', () => {
	test('Renders a Found Image message', () => {
		const component = shallowMount(Search);
		expect(component.text()).toContain('Found Images(0)');
	});
	
	test('Renders a Found Image message with the provided value', async () => {
		const component = shallowMount(Search);
		const currentNumberOfImages = 32;
	
		component.setData({
			numberOfImages: currentNumberOfImages
		});
	
		await component.vm.$nextTick;
	
		expect(component.text()).toContain('Found Images(' + currentNumberOfImages + ')');
	});

	test('Should call the API on submit', async () => {

		//axios.get.mockResolvedValue({ data: { collection: { items: [] }} });

		axios.get.mockImplementation((url) => {
			expect(url).toBeDefined();
			expect(url).toBe('https://images-api.nasa.gov/search?media_type=image&q=moon');

			return Promise.resolve({ data: { collection: { items: [] }} });
		});

		const component = shallowMount(Search);
		const query = 'moon';

		component.setData({ query });
		await component.find('form').trigger('submit');

		//expect(axios.get).toBeCalledWith('https://images-api.nasa.gov/search?media_type=image&q=' + query);
	});
});
