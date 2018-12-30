import { mount } from "@vue/test-utils";
import Dropdown from "@/components/Dropdown.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBolt,
  faPencilAlt,
  faTimes,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";

// Since the main app registers the font awesome icons and not the dropdown
// in order to avoid registration warnings, I have to re-register for tests ;(
library.add(faBolt);
library.add(faUser);
library.add(faPencilAlt);
library.add(faTimes);
library.add(faSignOutAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

describe("Dropdown.vue", () => {
  it("ensure callback gets fired when a dropdown item gets selected", () => {
    const mockFunc = jest.fn();
    const wrapper = mount(Dropdown, {
      propsData: {
        items: [{ icon: "sign-out-alt", name: "Sign Out", onClick: mockFunc }]
      }
    });

    wrapper.find("li").trigger("click");
    expect(mockFunc).toHaveBeenCalled();
  });

  it("ensure dropdown is closed when prop specifies it to be closed", () => {
    const mockFunc = jest.fn();
    const wrapper = mount(Dropdown, {
      propsData: {
        items: [{ icon: "sign-out-alt", name: "Sign Out", onClick: mockFunc }],
        isOpen: false
      }
    });

    expect(wrapper.find(".isOpen").exists()).toBe(false);
  });
});
