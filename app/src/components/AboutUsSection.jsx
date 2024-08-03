import React from "react";
import WhoRVImg from "../imgs/aboutus-1.png";
import OurServicesImg from "../imgs/aboutus-2.png";
import YChooseUs from "../imgs/aboutus-3.png";
import OurMissionImg from "../imgs/aboutus-4.png";
import JoinUsImg from "../imgs/aboutus-5.png";

export default function AboutUsSection() {
  return (
    <div className="sm:p-20 p-10 bg-slate-50 font-['Poppins'] text-gray-800">
      <h1 className="font-bold text-4xl mb-6">About Us</h1>
      <p className="text-sm mb-4">Welcome to Dawn Time Technologies!</p>
      <p className="text-sm mb-10">
        At Dawn Time Technologies, we specialize in providing top-tier web and
        app development services by connecting skilled developers with exciting
        projects from clients around the world. Our mission is to bridge the gap
        between talented developers and rewarding work opportunities, creating a
        win-win situation for both clients and developers.
      </p>
      <div className="flex gap-2 items-center justify-start mb-4">
        <img className="h-6" src={WhoRVImg} alt="" />
        <h2 className="font-bold text-2xl ">Who We Are</h2>
      </div>
      <p className="text-sm mb-10">
        Dawn Time Technologies was founded with the vision of harnessing the
        power of remote work to bring together a global network of expert
        developers. Our team consists of highly skilled professionals who may
        have faced challenges in finding job opportunities or freelance tasks.
        By joining our platform, these developers can now showcase their talents
        and work on a variety of projects that match their expertise.
      </p>
      <div className="flex items-center justify-start gap-2 mb-4">
        <img src={OurServicesImg} className="h-6" alt="" />
        <h2 className="font-bold text-2xl">Our Services</h2>
      </div>
      <ul className="list-disc list-inside mb-10">
        <li className="text-sm mb-2">
          <strong className="font-semibold">Web Development:</strong> Custom
          websites, E-commerce solutions, Web applications
        </li>
        <li className="text-sm mb-2">
          <strong className="font-semibold">App Development:</strong> iOS and
          Android apps, Cross-platform development, User-centric design
        </li>
      </ul>
      <div className="flex items-center justify-start gap-2 mb-4">
        <img
          className="h-6 border-[2px] rounded-full border-black"
          src={YChooseUs}
          alt=""
        />
        <h2 className="font-bold text-2xl ">Why Choose Us?</h2>
      </div>
      <ul className="list-disc list-inside mb-10">
        <li className="text-sm mb-2">
          <strong className="font-semibold">Empowering Developers:</strong> We
          believe in the potential of every developer. By joining Dawn Time
          Technologies, developers who struggled to find opportunities can now
          work on meaningful projects and build their careers.
        </li>
        <li className="text-sm mb-2">
          <strong className="font-semibold">Client-Centric Approach:</strong>{" "}
          Our priority is to understand and fulfill the unique needs of our
          clients, ensuring that every project is a success.
        </li>
        <li className="text-sm mb-2">
          <strong className="font-semibold">Global Talent Pool:</strong> By
          embracing remote work, we bring together the best talent from around
          the world, ensuring diverse perspectives and innovative solutions.
        </li>
        <li className="text-sm mb-2">
          <strong className="font-semibold">Quality and Reliability:</strong> We
          maintain rigorous quality standards, ensuring that every project is
          delivered with excellence and precision.
        </li>
      </ul>
      <div className="flex items-center justify-start gap-2 mb-4">
        <img className="h-6" src={OurMissionImg} alt="" />
        <h2 className="font-bold text-2xl ">Our Mission</h2>
      </div>
      <p className="text-sm mb-10">
        Our mission is to create a platform where skilled developers can thrive,
        and clients can access the expertise they need to bring their digital
        visions to life. We are committed to fostering a collaborative and
        supportive environment that drives innovation and success.
      </p>
      <div className="flex items-center justify-start gap-2 mb-4">
        <img className="h-6" src={JoinUsImg} alt="" />
        <h2 className="font-bold text-2xl ">Join Us</h2>
      </div>
      <p className="text-sm mb-10">
        Are you a developer looking for new opportunities? Or a client in need
        of expert development services? Dawn Time Technologies is here to help.
        Contact us today to learn more about how we can work together to achieve
        your goals.
      </p>
    </div>
  );
}