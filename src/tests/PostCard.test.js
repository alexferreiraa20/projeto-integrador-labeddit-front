import { render, screen, waitFor } from "@testing-library/react"
import PostCard from "../components/PostCard/PostCard"
import axios from "axios"

jest.mock("axios")

const axiosResponseMock = {
    data: {
        id: "id-mock-p",
        content: "content-mock",
        likes: 5,
        dislikes: 2,
        replies: 2,
        createdAt: 1,
        updatedeAt: 1,
        creator: {
            id: "id-mock-c",
            nickName: "nickName-mock",
        }
    }
}

describe("PostCard", () => {
    test("render", async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<PostCard/>)
        screen.debug()

        await waitFor(() => {})
        screen.debug()
    })
    
    
    
    
    
    // test("deve verificar se renderiza", async () => {
    //     axios.get.mockResolvedValueOnce(axiosResponseMock)

    //     render(<PostCard/>)
    //     screen.debug()

    //     await waitFor(() => {})
    //     screen.debug()
    // })

    // test("renderiza inicialmente o carregamento", async () => {
    //     axios.get.mockResolvedValueOnce(axiosResponseMock)

    //     render(<PostCard/>)
    //     // screen.logTestingPlaygroundURL()

    //     const loading = screen.getByText(/loading\.\.\./i)
    //     expect(loading).toBeInTheDocument()

    //     expect(screen.queryByText(/oleta/i)).not.toBeInTheDocument()
    //     //daqui para cima é a renderização inicial (Loading...)
    //     await waitFor(() => {})
    //     //daqui para baixo é logo após a renderização do mock
    // })

    
})