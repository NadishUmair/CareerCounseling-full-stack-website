import React, { useEffect, useState } from 'react';
import './uni.css'
import axios from 'axios';
const Institutes = () => {
  const [Institutes, setInstitutes] = useState([]);

  const fetchInstitutes = async () => {
    try {
      const response = await axios.get("http://localhost:5500/allinstitutes");
      console.log(response);
      setInstitutes(response.data.unis);
    } catch (error) {
      console.log("error in fetching Institutes", error);
    }
  };

  useEffect(() => {
    fetchInstitutes();
  }, []);

  console.log(Institutes);

  return (
    <>
      <div className='overflow-hidden  mt-4'>
        <h1 className=" text-2xl text-center font-bold mb-4">Admission Date of Institutes</h1>
        <div className='m-0 mt-2' id='searchUni'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 m-0'>
            <div>
              <label htmlFor="" className='mb-2 block '>Past Education</label>
              <select name="" id="" className='w-full border border-gray-300 rounded-md p-2'>
                <option value="" defaultValue>Select</option>
                <option value="">Martric/O Level</option>
                <option value="">FSC Pre Medical</option>
                <option value="">FSC Pre Engineering</option>
                <option value="">ICS</option>
                <option value="">BS</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className='mb-2 block '>Desicipline</label>
              <select name="" id="" className='w-full border border-gray-300 rounded-md p-2'>
                <option value="" defaultValue>Select</option>
                <option value="">School, Colleges, FSC, ICS</option>
                <option value="">Islamic Studies</option>
                <option value="">Engineering</option>
                <option value="">Medical Sciences</option>
                <option value="">Technical</option>
                <option value="">Agriculture Sciences</option>
                <option value="">Art & Design</option>
                <option value="">English</option>
                <option value="">Aviation</option>
                <option value="">Urdu</option>
                <option value="">Biological & Life Sciences</option>
                <option value="">Management Sciences</option>
                <option value="">Education</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className='mb-2 block '>Courses</label>
              <select name="" id="" className='focus:to-blue-400 w-full border border-gray-300 rounded-md p-2'>
                <option value="" defaultValue>Select</option>
                <option value="">BS</option>
                <option value="">MS</option>
                <option value="">Phd</option>
                <option value="">Phd</option>
                <option value="">Diploma</option>
                <option value="">Short Courses</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className='mb-2 block '>City</label>
              <select name="" id="" className='w-full border border-gray-300 rounded-md p-2'>
                <option value="" defaultValue>Select</option>
                <option value="">Lahore</option>
                <option value="">Okara</option>
                <option value="">Jehlum</option>
                <option value="">Sahiwal</option>
                <option value="">Islamabad</option>
                <option value="">Peshawar</option>
                <option value="">Sialkot</option>
                <option value="">Karachi</option>
              </select>
            </div>
          </div>
          <div className='mt-4 flex  justify-center'>
            <button className='w-[20%] px-10 py-2 bg-blue-700 border-blue-700 rounded text-white hover:bg-white hover:text-black hover:border hover:border-blue-700'>Search</button>
          </div>
        </div>

        {/* ################### Table Data ########################## */}

        <div className=' text-sm  p-4'>
          <table className=" w-full  ">
            <thead className=''>
              <tr>
                <th className='p-2 text-start'>Name</th>
                <th className='text-start'>Degree Level</th>
                <th className='text-start'>Discipline</th>
                <th className='text-start'>City</th>
                <th className='text-start'>Start Date</th>
                <th className='text-start'>Last Date</th>
              </tr>
            </thead>
            <tbody class="">
      {Institutes?.map((item,index) => (
        <tr class="w-full table-fixed" key={index}>
          <td class="p-2">{item.title}</td>
          <td>{item.degreelevel}</td>
          <td class="">{item.discipline}</td>
          <td>{item.city}</td>
          <td class="text-green-500 font-semibold">{item.startDate}</td>
          <td class="text-red-500 font-semibold">{item.lastDate}</td>
        </tr>
      ))}
    </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Institutes;
