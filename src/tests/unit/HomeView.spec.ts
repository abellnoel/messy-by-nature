import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import { describe, expect, test } from 'vitest';

describe('HomeView.vue', () => {
	test('renders home page with header level 1', () => {
		const wrapper = mount(HomeView);
		const h1s = wrapper.findAll('h1');
		expect(h1s.length).to.equal(1);
		expect(h1s[0].text()).to.equal('Messy by Nature');
	});
});
