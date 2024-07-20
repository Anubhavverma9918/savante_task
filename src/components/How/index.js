import React from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { how } from '../../data/constants';
import HowCard from '../Cards/HowCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px  0px 0px 0px;

  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0;
  width: 100%;
  gap: 12px;
  @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
  }
`;

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const How = () => {
  return (
    <Container id="how">
      <Wrapper>
        <Title>HOW DOES IT WORK?</Title>
        <Desc>Savante uses advanced AI to identify and connect brands with ideal influencers, ensuring perfect matches. Our platform manages every step, from discovery to performance tracking, providing transparent and efficient campaign management. Achieve measurable results and maximize ROI with Savante's intelligent influencer marketing solution.</Desc>
        <TimeLineSection>
            <Timeline>
                {how.map((experience, index) => (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary"/>
                            {index !== how.length - 1 && <TimelineConnector style={{ background: '#854CE6' }}/>}
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: "12px", px:2}}>
                            <HowCard experience={experience}/>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  )
}

export default How
