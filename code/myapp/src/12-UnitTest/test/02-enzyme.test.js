import App from '../App'
import Enzyme, { shallow, mount } from 'enzyme'
import adapter from '@cfaester/enzyme-adapter-react-18'

Enzyme.configure({ adapter: new adapter() })

describe("react-test-render", function () {
    it("app的名字是yikai-todolist", function () {
        let app = shallow(<App />)

        expect(app.find("h1").text()).toEqual("yikai-todolist")
    })

    it("刪除功能", function () {
        let app = mount(<App />)
        let todoItems = app.find("li")
        app.find("button.del").at(0).simulate("click")
        let todoItemsAfterClick = app.find("li")

        expect(todoItemsAfterClick.length).toEqual(todoItems.length - 1)
    })

    it("新增功能", function () {
        let app = mount(<App />)
        let todoItems = app.find("li")
        let addInput = app.find("input")
        addInput.simulate("change", { target: { value: "yikai" } })
        app.find(".add").simulate("click")
        let todoItemsAfterClick = app.find("li")

        expect(todoItemsAfterClick.length).toEqual(todoItems.length + 1)
    })
})