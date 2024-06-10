import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DotLoader } from 'react-spinners';
import { EditInstitute } from '../edituni/page';

interface InstituteInterface {
  title: string;
  Adimission: number;
  endDate: string;
  startDate: string;
  _id: string;
}

interface UserInterface {
  _id: string;
  role: string;
}

export const MyPost= () => {
  const [myInstitute, setmyInstitute] = useState<InstituteInterface[]>([]);
  const [loading, setloading] = useState(true);
  const [selectedInstitute, setselectedInstitute] = useState<string | null>(null);

  const user = useSelector((state: any) => state.custom.user) as UserInterface;

  // Check if the user is an admin
  const isAdmin = user?.role === 'admin';
console.log(user.role)
  const fetchmyInstitutes = async () => {
    try {
      const response = await axios.post('http://localhost:5500/myposts', { id: user._id });
       console.log(response);
      setmyInstitute(response.data.myunis);
    } catch (error) {
      console.log("error in fetching", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchmyInstitutes();
    }
  }, [user]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5200/deleteInstitute/${id}`);
      setmyInstitute(myInstitute.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id: string) => {
    setselectedInstitute(id);
  };

  return (
    <div>
      {selectedInstitute ? (
        <EditInstitute InstituteId={selectedInstitute} />
      ) : (
        loading ? (
          <div className='flex h-[70vh] flex-col items-center justify-center'>
            <DotLoader color="#b469e3" />
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            { user.role === "admin" &&
              <table className="w-full text-sm text-left rtl:text-right text-gray-600 bg-blue-200">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-700">
                <tr>
                  
                  <th scope="col" className="px-6 py-3">Institute Name</th>
                  {/* <th scope="col" className="px-6 py-3">Start Date</th> */}
                  <th scope="col" className="px-6 py-3">Start Date</th>
                  <th scope="col" className="px-6 py-3">Last Date</th>
         
                </tr>
              </thead>
              <tbody>
                {myInstitute?.map((item) => (
                  <tr key={item._id} className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.title}</th> */}
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">{item.startDate}</td>
                    <td className="px-6 py-4">{item.lastDate}</td>
                    <td className="px-6 py-4">
                      <Link href={''} onClick={() => handleEdit(item._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDelete(item._id)} className='border border-red-500 text-red-500 px-2 hover:bg-red-500 hover:text-white'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            }
          </div>
        )
      )}
    </div>
  );
};
