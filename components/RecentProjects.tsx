import { projects } from '@/data'
import React from 'react'
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import ShimmerButton from './ui/ShimmerButton';
import LitUpButton from './ui/LitUpButton';
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My Recent <span className="text-purple">Work</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link1, link2 }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[36rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[90vw]"
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-fill rounded-md group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-4">
                    {title}
                  </h1>
                </CardItem>
                <CardItem
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </CardItem>
                <CardItem>
                  <div className="flex items-center gap-2">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20 gap-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={link1}
                    target="__blank"
                    className="w-[20px]"
                  >
                    <ShimmerButton title="GitHub" />
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={link2}
                    target="__blank"
                  >
                    <LitUpButton title="Live Demo" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects