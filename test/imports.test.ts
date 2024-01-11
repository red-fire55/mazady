import { mount } from "@vue/test-utils"

import LeftSection from "../components/main-page/left-section.vue"

//firtst test shall be upon importing components
describe("import any component in our app", () => {
    test("import is working smoothly", async () => {
        //here we are checking if the component is created 
        const profile_card_component = await import('../components/main-page/left-section-content/profile-card.vue')
        expect(profile_card_component).toBeDefined()
    })
})


//seconed test shall be to test if our component is used within the section it meant to be imported within
describe("render my component", () => {
    test("profile card component is rendering successfully", async () => {
        const pageContent = mount(LeftSection)
        expect(pageContent.find('#profile')).toBeTruthy()
    })
})