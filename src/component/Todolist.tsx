import { FC } from 'react';

const Todolist: FC = () => {
  return (
    <>
      <div
        style={{ boxShadow: '0px 1px 5px 1px black' }}
        className="bg-white  p-5 mt-3 m-auto rounded-md w-full sm:w-10/12 "
      >
        <div className="flex flex-row justify-between border-b-2 italic text-slate-700 text-xl font-medium max-[600px]:flex-col">
          <p>Task Name :- Home work</p>
          <p>Your Name :- Pradeep</p>
          <p>Contact :- 1234567890</p>
        </div>
        <span className="text-xl underline font-medium text-slate-700 mt-5 ">
          Task Description
        </span>
        <p className="font-medium leading-5 text-slate-700 italic   scrol">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea
          eligendi fuga. Obcaecati cueriam consequuntur fuga dolores nulla
          cupiditateesciunt rem enim? lorem50000
        </p>
      </div>
    </>
  );
};

export default Todolist;
