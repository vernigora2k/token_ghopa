import styled from "styled-components";

// Герой секция
export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to right, #1e3a8a, #6d28d9);
  color: white;
  position: relative;
  overflow: hidden;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: auto;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const HeroButton = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #facc15;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #eab308;
  }
`;

// Родмап секция
export const RoadmapContainer = styled.section`
  padding: 100px 20px;
  background-color: #111;
  color: white;
  text-align: center;
  position: relative;
`;

export const RoadmapTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const RoadmapGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const RoadmapCard = styled.div`
  padding: 30px;
  background-color: #222;
  font-size: 1.5rem;
  border-radius: 10px;
  border: 2px solid #444;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Секция "Как купить GHOPA?"
export const Section = styled.section`
  padding: 80px 20px;
  background-color: #222;
  color: white;
  text-align: center;
`;

export const StepTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const StepText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #facc15;

  .white-link {
  color: white;
  text-decoration: none;
}

`;

  
