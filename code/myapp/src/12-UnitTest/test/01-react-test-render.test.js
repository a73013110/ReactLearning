import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'

describe("react-test-render", function() {
    it("app的名字是yikai-todolist", function() {
        const render = new ShallowRender()
        render.render(<App />)
        // console.log(render.getRenderOutput().props.children[0].type)
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
        expect(render.getRenderOutput().props.children[0].props.children).toBe("yikai-todolist")
    })
})