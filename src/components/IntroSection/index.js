import React, { useState } from 'react'
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/savante.png';
import HeroBgAnimation from '../IntroBgAnimation';
import Modal from 'react-modal'
import { Button } from '@mui/material';


const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px){
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px){
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0,100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px){
    padding: 0 0px;
    justify-content: center;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order:  1;
  @media screen and (max-width: 960px){
    order: 2;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px){
    order: 2;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order:  2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px){
    order: 1;
    margin-bottom: 80px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 640px){
    margin-bottom: 30px;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px){
    text-align: center;
  }
  @media screen and (max-width: 640px){
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 68px;
  gap: 12px;
  display: flex;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 960px){
    text-align: center;
  }
  @media screen and (max-width: 640px){
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary+95};
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px){
    text-align: center;
  }
  @media screen and (max-width: 640px){
    font-size: 16px;
    line-height: 32px;
  }  
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  10px 10px 10px #1F2634,
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
const ResumesButton = styled.a`
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

const Intro = () => {
  const [visible, setvisible] = useState(false);
  const [visibly, setvisibly] = useState(false);
  return (
    <div id='about'>
       <HeroContainer>

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
                        <option>Start-up</option>
                        <option>Small-Scale</option>
                        <option>Mid-Scale</option>
                        <option>Large-Scale</option>
                        </select>
                    
                        <input type="insta" class="form-control" id="exampleFormControlInsta" placeholder="Instagram Handle" style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"12px", borderRadius:"25px"}}/>
                    
                        <textarea class="form-control" id="exampleFormControlDesc" rows="2" placeholder="Our brand, Acme Fashion, is dedicated to creating stylish, sustainable clothing for modern women. We believe in eco-friendly practices and ethical production, ensuring that our products not only look good but also do good." style={{marginBottom:"5px", border:"none", background:"#f2f2f2", padding:"5px", borderRadius:"25px"}}></textarea>

                        <ResumesButton style={{marginTop:"5px", marginBottom:"5px"}} target="display">SignUp</ResumesButton>
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

                        <ResumesButton style={{marginTop:"5px", marginBottom:"5px"}} target="display">SignUp</ResumesButton>
                        {/* <a  onClick={() => setvisible(true)} style={{color: "white",marginBottom:"20px", fontFamily:"poppins",cursor:"pointer", fontSize:"15px", fontWeight:"bold", width:"250px", marginLeft:"85px"}}>Brand? SignUp here!</a>
                   */}
            </Modal>
          <HeroBg>
                <HeroBgAnimation/>
          </HeroBg>
          <HeroInnerContainer>
              <HeroLeftContainer>
                    <Title>Hello there! <br/>Savantees</Title>
                    <TextLoop>We are a  
                      <Span>
                        <Typewriter
                          options= {{
                            strings: Bio.roles,
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </Span>
                    </TextLoop>
                    <SubTitle>"Welcome to Savante, the future of influencer marketing. We are a cutting-edge AI tech company dedicated to revolutionizing the influencer marketing industry by solving its two biggest challenges: Influencer Discovery and Return on Investment (ROI)."</SubTitle>
                    <ResumeButton onClick={() => setvisible(true)} target="display">Get Started</ResumeButton>
              </HeroLeftContainer>
              <HeroRightContainer>
                          <Image src={HeroImg} alt="Hero"/>
              </HeroRightContainer>
          </HeroInnerContainer>
       </HeroContainer>
    </div>
  )
}

export default Intro;
