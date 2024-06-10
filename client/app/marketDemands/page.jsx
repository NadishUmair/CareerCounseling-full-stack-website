import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HashLoader } from 'react-spinners';

const MarketDemands = () => {
  const [typeJobs, setTypeJobs] = useState('ALLJOBS');
  const [isLoading, setIsLoading] = useState(true);
  const [itJobs, setItJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [sliceCount, setSliceCount] = useState(9);

  const fetchJobs = async () => {
    try {
      const [itJobsResponse, allJobsResponse] = await Promise.all([
        axios.get('http://localhost:5500/ITjobs'),
        axios.get('http://localhost:5500/education-jobs')
      ]);

      setItJobs(itJobsResponse.data);
      setAllJobs(allJobsResponse.data);
    } catch (error) {
      console.log('Error in fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSliceCount = () => {
    setSliceCount(sliceCount + 9);
  };

  const handleItJobs = () => {
    setTypeJobs('ITJOBS');
  };

  const handleAllJobs = () => {
    setTypeJobs('ALLJOBS');
  };

  const jobsToDisplay = typeJobs === 'ITJOBS' ? itJobs : allJobs;

  return (
    <div>
      <h1 className='text-center font-bold text-2xl mt-4'>Jobs Demanding in Market</h1>
      <div className='flex flex-col justify-center items-center mt-2'>
        <div className='flex p-4 items-center'>
          <button className={`mr-2 ${typeJobs === "ALLJOBS" ?  'bg-blue-700 text-white' :'bg-white text-black border border-blue-700' }  px-4 py-2  font-semibold`} onClick={handleAllJobs}>All Jobs</button>
          <button className={`px-4 py-2  font-semibold ${typeJobs === 'ITJOBS' ? 'bg-blue-700 text-white' :'bg-white text-blue-700 border border-blue-700'} `} onClick={handleItJobs}>IT Jobs</button>
        </div>
      </div>
      {isLoading ? (
        <div className='h-[60vh] flex flex-col justify-center items-center mt-4'>
          <HashLoader color='#0000FF' />
        </div>
      ) : (
        <div>
          <div className='md:flex flex-wrap justify-center gap-8 mt-4'>
            {jobsToDisplay.slice(0, sliceCount).map((item, index) => (
              <div key={index} className='md:max-w-sm p-6 border border-gray-200 rounded-lg shadow md:w-[32%]'>
                <h5 className='mb-2 text-2xl tracking-tight text-gray-800 font-semibold'>Position: {item.title}</h5>
                <p className='mb-3 font-normal'>{item.company}</p>
                <p className='mb-3 font-normal'>{item.location}</p>
                <p className='mb-3 font-normal'>Posted {item.posted}</p>
                <a href={item.link} className='inline-flex font-medium items-center text-blue-600 hover:underline'>
                  Detail
                  <svg className='w-3 h-3 ml-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778' />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <div className='mt-4 flex justify-center items-center'>
            <button onClick={handleSliceCount} className='bg-blue-700 px-4 py-2 text-white font-semibold'>Show More</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketDemands;
