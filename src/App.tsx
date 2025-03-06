import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Home from './components/Home.tsx'
import Education from './components/Education.tsx'
import Employment from './components/Employment.tsx'
import Leadership from './components/Leadership.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Footer from "./components/Footer.tsx";
import styled from "styled-components";

export default function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

const Wrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    height: auto;
`

const Columns = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    position: relative;
    @media screen and (max-width: 800px){
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
`

const router = createBrowserRouter(
    [{path:'*', Component: Root}]
)

function Root(){
    return (
        <Wrapper>
            <Header/>
            <Columns>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/education" element={<Education/>}></Route>
                    <Route path="/work" element={<Employment/>}></Route>
                    <Route path="/leadership" element={<Leadership/>}></Route>
                    <Route path="/skills" element={<Skills/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                </Routes>
            </Columns>
            <Footer/>
        </Wrapper>
    )
}
