import { logos } from "../data";

const CompanyLogos = () => {
  return (
    <div className="max-w-[1640px] p-10 flex justify-center flex-wrap gap-5 mx-auto">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-[240px] h-[100px] flex justify-center shadow-md rounded-2xl"
        >
          <img className="w-[130px]" src={logo.src} alt="Company logo" />
        </div>
      ))}
    </div>
  );
};

export default CompanyLogos;
