import React from 'react'
import { Link } from 'react-router-dom';

import car1 from "../../images/big-banner.jfif"
import Staff from '../Staff/Staff';
import Course from './../Course/Course';


const Home = (props) => {
  const listCourses = props.listCourses
  console.log('from Home, Listcourses ', listCourses)

  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Skills to enrich your</span>{' '}
                  <span className="block text-green-400 xl:inline">Life Forever</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Learning Goju Ryu Karate will enrich your life forever. Gain not only skills to win any confrontation but also the conidence to last you a lifetime.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/classes"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-white md:py-4 md:text-lg md:px-10 hover:text-green-400"
                    >
                      Get started
                    </Link>
                  </div>

                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={car1}
            alt=""
          />
        </div>
      </div>
      <div>
        <Staff></Staff>

      </div>

      <div className="flex justify-center">
        <Link to="/staff" className="w-full flex justify-center">
          <button className="px-8 py-3 w-3/4 border-transparent font-medium rounded-md text-white bg-green-400 hover:bg-white  hover:text-green-400">
            See Our Staff</button>
        </Link>
      </div>



      <section className="my-12 p-5 border-8 border-green-400	  border-solid	 rounded-lg grid grid-cols-4 gap-4 auto-rows-min	">

        {
          listCourses.map((details) => <Course
            key={details.courseID + 'details.courseID'}
            details={details}
          ></Course>)
        }

        <div className="flex justify-center col-span-4 my-5">
          <Link to="/Classes" className="w-full flex justify-center">
            <button className="px-8 py-3 w-3/4 border-transparent font-medium rounded-md text-white bg-green-400 hover:bg-white  hover:text-green-400">
              See More Courses</button>
          </Link>
        </div>

      </section>


    </div>
  )
}

export default Home
