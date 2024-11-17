const Modal = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box max-w-lg bg-gray-50 rounded-lg shadow-lg p-6">
        {/* Form */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Book Appointment
        </h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Last Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Phone</span>
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered"
              required
            />
          </div>

          {/* Appointment Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Appointment Date</span>
            </label>
            <input type="date" className="input input-bordered" required />
          </div>

          {/* Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Address</span>
            </label>
            <textarea
              placeholder="Address"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button className="btn  bg-orange-500 text-white w-full" type="submit">
              Make Appointment
            </button>
          </div>
        </form>

        <div className="modal-action">
          {/* Close Modal Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-outline">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
