import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from 'styled-components';
import { FaBars } from "react-icons/fa";
import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button } from "@mui/material";

const Nav = styled.div`
    background-color: ${({ theme }) => theme.text_primary};
    height: 75px;
    diplay: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
    transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and(max-width: 640px){
        padding: 0 0px;
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px){
        display: none
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    } 
`;

const GithubButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    padding: 0 20px;
    margin-left: 10px;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    &:hover{
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_secondary};
    }
        @media screen and (max-width: 748px){
        font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
    width: 80%;  
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;



const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    position: absolute;
    top: 80;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.text_primary};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: all 0.6s ease-in-out;
    border-radius 0 0 20 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({open}) => (open ? "100%" : "0")};
    z-index: ${({open}) => (open ? "1000" : "-1000")};
`;

const MobileLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 35%;
    max-width: 300px;
    text-align: center;
    padding: 4px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    margin-left: 100px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [visible, setvisible] = useState(false);
    const [visibly, setvisibly] = useState(false);
  return (
    <Nav>
        <NavContainer>
            <NavLogo to="/">
            <Button
                style={{
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontSize: "28px",
                    fontWeight:"600",
                }}
            > Savante </Button>
            </NavLogo>
            <MobileIcon>
                <FaBars color='aliceblue'
                    onClick = {() => {
                        setOpen(!open);
                    }}
                />
            </MobileIcon>

            {/* Brand */}
            <Modal isOpen={visible} onRequestClose={() => setvisible(false)} style={{
                overlay:{
                    background:"opaque",
                    transform: "translateY(0)",
                    
                },
                content:{
                    backgroundColor:"#111111",
                    width:"450px",
                    marginLeft:"30%",
                    borderRadius:"5%",
                    boxShadow:"10px 10px 10px #1F2634",
                    height:"500px",
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:"70px",
                    display:"grid",
                    transform: "translateY(10px)",
                    transition:"all 0.1s ease-in-out",
                }
            }}>
                <h1 style={{color: "white",marginBottom:"20px", fontFamily:"poppins", fontSize:"30px", fontWeight:"bold", width:"250px", marginLeft:"25px"}}>BRAND SIGNUP</h1>
                         <input type="brand-name" class="form-control" id="exampleFormControlBrand" placeholder="Brand Name" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px", WebkitAppearance:"none", appearance:"none"}}/>
                  
                         <input type="url" class="form-control" id="exampleFormControlUrl" placeholder="Website URL" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}/>
                   
                         <select class="form-control" id="exampleFormControlSelect1" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}>
                        <option>Company Niche</option>
                        <option>Fashion</option>
                        <option>Health</option>
                        <option>Beauty</option>
                        <option>Technology</option>
                        <option>Automotive</option>
                        <option>Medical</option>
                        <option>NGO</option>
                        </select>
                    
                        <select class="form-control" id="exampleFormControlSelect1" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}>
                        <option>Company Size</option>
                        <option>Start-up</option>
                        <option>Small-Scale</option>
                        <option>Mid-Scale</option>
                        <option>Large-Scale</option>
                        </select>
                    
                        <input type="insta" class="form-control" id="exampleFormControlInsta" placeholder="Instagram Handle" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}/>
                    
                        <textarea class="form-control" id="exampleFormControlDesc" rows="2" placeholder="Our brand, Acme Fashion, is dedicated to creating stylish, sustainable clothing for modern women. We believe in eco-friendly practices and ethical production, ensuring that our products not only look good but also do good." style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"5px", borderRadius:"25px"}}></textarea>

                        <ResumeButton style={{marginTop:"5px", marginBottom:"5px"}} target="display">SignUp</ResumeButton>
                        <Button onClick={() => setvisibly(true)} style={{border:"none", color: "white",marginBottom:"5px", fontFamily:"poppins",cursor:"pointer", fontSize:"15px", fontWeight:"bold", width:"250px", marginLeft:"15px"}}>Influencer? SignUp here!</Button>
                    
            </Modal>

            {/* influencer */}
            <Modal isOpen={visibly} onRequestClose={() => setvisibly(false)} style={{
                overlay:{
                    background:"opaque",
                    transform: "translateY(0)",
                    
                },
                content:{
                    backgroundColor:"#111111",
                    width:"450px",
                    marginLeft:"30%",
                    borderRadius:"5%",
                    boxShadow:"10px 10px 10px #1F2634",
                    height:"500px",
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:"70px",
                    display:"grid",
                    transform: "translateY(10px)",
                    transition:"all 0.1s ease-in-out",
                }
            }}>
                <h1 style={{color: "white",marginBottom:"30px", fontFamily:"poppins", fontSize:"25px", fontWeight:"bold", width:"300px", marginLeft:"35px"}}>INFLUENCER SIGNUP</h1>
                
                        <input type="name" class="form-control" id="exampleFormControlName" placeholder="Your Name" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px", WebkitAppearance:"none", appearance:"none"}}/>
                  
                        <input type="followers" class="form-control" id="exampleFormControlFollowers" placeholder="Followers Count" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}/>
                   
                        <select class="form-control" id="exampleFormControlSelect1" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}>
                        <option>Content Niche</option>
                        <option>Fashion</option>
                        <option>Health</option>
                        <option>Beauty</option>
                        <option>Technology</option>
                        <option>Automotive</option>
                        </select>
                    
                        <input type="insta" class="form-control" id="exampleFormControlInsta" placeholder="Instagram Handle" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}/>
                    
                        <textarea class="form-control" id="exampleFormControlDesc" rows="2" placeholder="The majority of my audience consists of women aged 18-34, primarily from New York City, USA. My niche focuses on sustainable fashion and beauty." style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"5px", borderRadius:"25px"}}></textarea>

                        <ResumeButton style={{marginTop:"5px", marginBottom:"5px"}} target="display">SignUp</ResumeButton>
                        {/* <a  onClick={() => setvisible(true)} style={{color: "white",marginBottom:"20px", fontFamily:"poppins",cursor:"pointer", fontSize:"15px", fontWeight:"bold", width:"250px", marginLeft:"85px"}}>Brand? SignUp here!</a>
                     */}
            </Modal>

            <NavItems>
                <NavLink href='#about'>About</NavLink>
                <NavLink href='#benefit'>Benefits</NavLink>
                <NavLink href='#how'>How?</NavLink>
                <NavLink href='#influencer'>Influencer</NavLink>
                <NavLink href='#brands'>Brands</NavLink>                
            </NavItems>
            <ButtonContainer>
                <GithubButton onClick={() => setvisible(true)} target="_blank">Brand Login</GithubButton>
                <GithubButton onClick={() => setvisibly(true)} target="_blank">Influencer Login</GithubButton>
            </ButtonContainer>
        </NavContainer>
        {
            open &&
            <MobileMenu open={open}>
              <MobileLink href="#about" onClick={() => {
                setOpen(!open)
              }}>About</MobileLink>
              <MobileLink href='#benefit' onClick={() => {
                setOpen(!open)
              }}>Benefits</MobileLink>
              <MobileLink href='#how' onClick={() => {
                setOpen(!open)
              }}>How?</MobileLink>
              <MobileLink href='#brands' onClick={() => {
                setOpen(!open)
              }}>Brands</MobileLink>
              <MobileLink href='#influencer' onClick={() => {
                setOpen(!open)
              }}>Influencer</MobileLink>
            <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} onClick={() => setvisible(true)} target="_blank">Brand Login</GithubButton>
            <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} onClick={() => setvisibly(true)} target="_blank">Influencer Login</GithubButton>
            </MobileMenu>
        }
    </Nav>
  );
};

export default Navbar;
