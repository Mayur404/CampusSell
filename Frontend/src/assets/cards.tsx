import styled from 'styled-components';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

const Card = ({ image, title, subtitle }: CardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={image} alt="card-image" className="card-img" />
        <p className="heading">{title}</p>
        <p className="description">{subtitle}</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 10px;
    cursor: pointer;
  }

  img.card-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    border: 2px solid #1A1A1A;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 310px;
    height: 410px;
    border-radius: 12px;
    background: #1A1A1A;
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(18px);
  }

  .card:hover::after {
    filter: blur(28px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }

  .heading {
    font-size: 28px;
    font-weight: 700;
    color: #1A1A1A;
  }

  .description {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Card;