import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const msg = 'new message'
  const wrapper = shallowMount(HelloWorld, {
    props: { msg }
  })
  wrapper.vm.$emit('foo')
  wrapper.vm.$emit('foo', 123)
  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg)
  })
  it('Check shapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('Check increase method', () => {
    expect(wrapper.vm.$data.counter).toBe(0)
    wrapper.vm.increase()
    expect(wrapper.vm.$data.counter).toBe(1)
  })
  it('Check MoreThenTen computed', () => {
    expect(wrapper.vm.$data.counter).toBe(0)
    wrapper.setData({ counter: 10 })
    expect(wrapper.vm.moreThenTen).toBe(false)
    wrapper.setData({ counter: 12 })
    expect(wrapper.vm.moreThenTen).toBe(true)
  })
  it('Check object', () => {
    expect(wrapper.vm.$data.user).toStrictEqual({ name: 'Harry', surname: 'Potter', patronus: 'deer' })
  })
  it('Check find selector', () => {
    expect(wrapper.find('h1').exists()).toBe(true)
  })
  it('Check emitted', () => {
    expect(wrapper.emitted().foo).toBeTruthy()
  })
})
