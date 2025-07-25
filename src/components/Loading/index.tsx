import './index.scss';

export default () => {
  return (
    <>
      <div className="LoadingComponent fixed w-full h-full z-50 bg-[rgb(255,255,255,0.5)] dark:bg-[rgb(36,41,38,0.5)] rounded-lg flex justify-center items-center">
        <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
          <path
            className="track"
            strokeWidth="4"
            fill="none"
            pathLength="100"
            d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
          />
          <path
            className="car"
            strokeWidth="4"
            fill="none"
            pathLength="100"
            d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
          />
        </svg>
      </div>
    </>
  );
};
