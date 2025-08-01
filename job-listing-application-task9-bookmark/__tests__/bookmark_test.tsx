import Bookmark from '@/components/boomark';
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe("bookmark display",()=>{
    it("render button for user role state",()=>{
        render(<Bookmark id='65509e9353a7667de6ef5a6' authenticator={true}/>)
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it("render button for not user role state",()=>{
        render(<Bookmark id='65509e9353a7667de6ef5a6' authenticator={false}/>)
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    })
});
beforeEach(()=>{
      localStorage.setItem('eventIds', JSON.stringify([])); 
      localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODhmYzJmZTZhYjMwNTY5MWI3OTJjZiIsInJvbGUiOiJ1c2VyIiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3NTQyOTI3Njd9.BefNN2EM-DT7n-a9CgBUItGeYsiKXRsmy77VZ0e-0l0'); 
    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json:()=>Promise.resolve({
                        success: true,
        message: "Bookmark created successfully",
        data: null,
        errors: null,
        count: 0
            })
        })
    })
})
afterEach(()=>{
    localStorage.clear();
    jest.resetAllMocks()
})
describe("bookmark functionality",()=>{
    it("render toggling state",async ()=>{
        render(<Bookmark id='65509e9353a7667de6ef5a60' authenticator={true}/>)
        const image = screen.getByRole('img')
        const intialattr = image.getAttribute('src')
        fireEvent.click(screen.getByRole('button'))
  await waitFor(() => {
    expect(screen.getByRole('img').getAttribute('src')).not.toBe(intialattr);
  });
        
    })

});

