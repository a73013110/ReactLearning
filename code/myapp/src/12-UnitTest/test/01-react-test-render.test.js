import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils'

describe("react-test-render", function () {
    it("app的名字是yikai-todolist", function () {
        const render = new ShallowRender()
        render.render(<App />)
        // console.log(render.getRenderOutput().props.children[0].type)
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
        expect(render.getRenderOutput().props.children[0].props.children).toBe("yikai-todolist")
    })

    it("刪除功能", function () {
        const app = ReactTestUtil.renderIntoDocument(<App />)
        let todoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li")
        console.log(todoItems)

        // let deleteButton = todoItems[0].querySelector("button")
        // ReactTestUtil.Simulate.click(deleteButton)

        // let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li")
        
        // expect(todoItems.length - 1).toBe(todoItemsAfterClick.length)
    })
})