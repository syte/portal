import { mount } from "@vue/test-utils";
import Input from "@/components/Input.vue";

describe("Input.vue", () => {
  it("renders a textarea when type is set to textarea", () => {
    const wrapper = mount(Input, {
      propsData: { type: "textarea" }
    });

    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("renders a input when type is set to textarea", () => {
    const wrapper = mount(Input, {
      propsData: { type: "textarea" }
    });

    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("renders a error component if a error message is passed in", () => {
    const wrapper = mount(Input, {
      propsData: { type: "text", error: "Sample Error" }
    });

    expect(wrapper.find(".error").exists()).toBe(true);
  });

  it("renders input without placeholder when its excluded as a prop", () => {
    const wrapper = mount(Input, {
      propsData: { type: "text" }
    });

    expect(wrapper.find(".floating-placeholder").exists()).toBe(false);
  });

  it("renders a placeholder when its included as a prop", () => {
    const wrapper = mount(Input, {
      propsData: { type: "text", placeholder: "Include me!" }
    });

    expect(wrapper.find(".floating-placeholder").exists()).toBe(true);
  });
});
