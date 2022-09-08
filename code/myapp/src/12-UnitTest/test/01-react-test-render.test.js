import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import ReactTestUtil, { act } from 'react-dom/test-utils'
import { fireEvent, render } from '@testing-library/react'

describe("react-test-render", function () {
    it("app的名字是yikai-todolist", function () {
        const render = new ShallowRender()
        render.render(<App />)
        // console.log(render.getRenderOutput().props.children[0].type)
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
        expect(render.getRenderOutput().props.children[0].props.children).toBe("yikai-todolist")
    })

    it("刪除功能", function () {
        const { container } = render(<App />)
        const todoItems = container.querySelectorAll("li")
        // console.log(todoItems.length)

        let deleteButton = todoItems[0].querySelector("button")
        // 任何改變狀態的動作，需要放置於act中
        act(() => {
            deleteButton.click()
        })

        const todoItemsAfterClick = container.querySelectorAll("li")
        // console.log(todoItemsAfterClick.length)

        expect(todoItemsAfterClick.length).toBe(todoItems.length - 1)
    })

    it("新增功能", function () {
        const { container } = render(<App />)
        const todoItems = container.querySelectorAll("li")
        // console.log(todoItems.length)

        let addInput = container.querySelector("input")
        fireEvent.change(addInput, { target: { value: "yikai" } })

        let addButton = container.querySelector(".add")
        act(() => {
            addButton.click()
        })

        const todoItemsAfterClick = container.querySelectorAll("li")
        // console.log(todoItemsAfterClick.length)

        expect(todoItemsAfterClick.length).toBe(todoItems.length + 1)
    })
})