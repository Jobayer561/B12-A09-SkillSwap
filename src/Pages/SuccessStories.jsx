import React from "react";

const SuccessStories = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold my-6 text-center">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Provider"
            />
            <h3 className="text-xl font-bold mt-3">Henry Michael</h3>
            <p className="">
              <span className="font-semibold">Course : </span> Web Development
            </p>
            <p className="font-semibold mt-1">Batch : 11 </p>

            <p className="text-sm  mt-2">
              <span className="font-semibold">Duration:</span> 6 Month
            </p>
            <p className=" mt-1">
              <span className="font-semibold">Stories: </span> Learned HTML,
              CSS, JS, and React. Built 3 real-world projects and landed a
              freelance job
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Alex Martin"
            />
            <h3 className="text-xl font-bold mt-3">Stuart Law</h3>
            <p>
              <span className="font-semibold">Course: </span>Guitar Lessons
            </p>
            <p className="font-semibold mt-1">Batch: 5</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Duration:</span> 3 Month
            </p>
            <p className="mt-1">
              <span className="font-semibold">Stories: </span> Mastered basic
              chords and rhythm, performed first live session successfully
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Nina Roy"
            />
            <h3 className="text-xl font-bold mt-3">Mag Lanning</h3>
            <p>
              <span className="font-semibold">Course: </span>Digital Painting
            </p>
            <p className="font-semibold mt-1">Batch: 3</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Duration:</span> 4 Month
            </p>
            <p className="mt-1">
              <span className="font-semibold">Stories: </span> Learned character
              illustration and color theory. Published first digital artwork
              online
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Mehedi Hasan"
            />
            <h3 className="text-xl font-bold mt-3">Nicolas Carry</h3>
            <p>
              <span className="font-semibold">Course: </span>Python Programming
            </p>
            <p className="font-semibold mt-1">Batch: 2</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Duration:</span> 3 Month
            </p>
            <p className="mt-1">
              <span className="font-semibold">Stories: </span> Learned Python
              fundamentals and built small projects. Got first freelance coding
              task
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
