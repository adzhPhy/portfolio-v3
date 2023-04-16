import Image from "next/image";

const Header = ({}) => {
  const circleImages = ["react", "tailwind", "django"];
  return (
    <div
      id="header"
      className="xxs:max-md:w-full w-3/4 flex flex-col md:flex-row p-6 mt-5 justify-center items-center gap-4 border-b border-th-tertiary rounded-xl"
    >
      <div className="min-w-fit flex flex-col justify-center items-center md:justify-end md:items-end gap-3 p-4 xxs:max-md:p-0">
        <div className="min-w-fit w-full flex flex-row flex-wrap justify-center md:justify-end items-center gap-3 pt-1">
          <div className="border font-mono flex justify-center items-center min-w-fit p-2.5 xxs:max-md:p-1 rounded-2xl bg-gradient-to-br from-th-secondary via-th-primary to-th-background">
            <span className="text-3xl xs:text-xl">🤙</span>
            <div className="ml-5 text-th-tertiary">
              <p className="text-lg text-left leading-6">Hello, I am </p>
              <h1>
                <span className="text-3xl font-extrabold"> Ali-Dzhan</span>
              </h1>
            </div>
          </div>
          <div className="max-w-fit mr-1 hover-animation transition-all ease-out shadow-xl shadow-th-primary hover:shadow-2xl rounded-xl bg-gradient-to-br from-th-secondary via-th-primary to-th-background">
            <a href="https://drive.google.com/file/d/1VqBV_D9PtqLKJZ6VFYlIf5i6tw-RqpN6/view?usp=sharing">
              <Image
                src="/images/cvicon.png"
                width={42}
                height={42}
                alt="CV Icon"
              />
            </a>
          </div>
        </div>
        <div className="md:mx-1 mx-0 my-2 border font-mono flex flex-col justify-end items-end md:p-4 p-2.5 rounded-2xl gap-2.5 md:gap-0.5 bg-gradient-to-br from-th-secondary via-th-primary to-th-background">
          <p className="text-md md:text-lg text-left text-th-tertiary leading-3">
            🕸🧑‍💻Aspiring Web Developer
          </p>
          <p className="text-md md:text-lg text-th-tertiary leading-3 text-right">
            🔭Lifelong Explorer
          </p>
          <p className="text-md md:text-lg text-th-tertiary leading-3 text-right">
            🎸Guitar Player
          </p>
        </div>
        <div className="min-w-fit p-1 flex flex-row justify-start items-center gap-3.5">
          {circleImages.map((image) => (
            <div
              key={`${image}-icon`}
              className="min-w-fit w-20 md:w-24 h-20 md:h-24 flex justify-center items-center rounded-full bg-th-background shadow-lg hover:shadow-2xl shadow-th-tertiary hover-animation transition-all ease-out"
            >
              <Image
                src={`/images/${image}.png`}
                alt={`${image}`}
                width={52}
                height={52}
                style={{ borderRadius: "50%" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="min-w-fit flex justify-center items-center">
        <Image
          src="/images/profilepic.jpg"
          width={300}
          height={500}
          alt="My Headshot"
          className="p-2"
          style={{ borderRadius: "15%" }}
        />
      </div>
    </div>
  );
};

export default Header;
