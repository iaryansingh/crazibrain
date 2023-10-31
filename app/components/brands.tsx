import React from "react";
import styled, {css, keyframes} from "styled-components";
import {
    Amway,
    Bhel,
    Britannia,
    Cleartrip,
    Dabur,
    Hero,
    Honda,
    Icici, Kpmg,
    Mercedes,
    Nestle, Softdocs, Timesofindia, Ultratech,
} from "@/app/components/brands-logo";

export const Brands = () => {
    const row1 = [
        <Amway key={"icon-amway"}/>,
        <Dabur key={"icon-dabur"}/>,
        <Nestle key={"icon-nestle"}/>,
        <Britannia key={"icon-britannia"}/>,
        <Kpmg key={"icon-kpmg"}/>,
    ];





    return (
        <ScrollContainer>
            <Wrapper>
                <Marquee className=" w-[700px] md:w-[1000px]">
                    <MarqueeGroup>
                        {row1.map((el, index) => (
                            <ImageGroup key={index} >
                               {el}
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {row1.map((el, index) => (
                            <ImageGroup key={index}>
                                {el}
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                </Marquee>

            </Wrapper>
        </ScrollContainer>
    );
}

export default Brands;

const ScrollContainer = styled.div`
  width: 90vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
          to right,
          hsl(0 0% 0% / 0),
          hsl(0 0% 0% / 1) 10%,
          hsl(0 0% 0% / 1) 90%,
          hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;
