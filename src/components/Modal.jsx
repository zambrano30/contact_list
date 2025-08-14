export function Modal() {
  return (
    <div key="modal" className="modal flex justify-center bg-white/50 ">
      <div className="modal-content bg-white border relative top-25 w-[80%] max-w-lg overflow-auto p-4 m-4   ">
        <div className="flex justify-between my-4 mx-2">
          <h2 className="text-xl font-bold ">Agregar Contacto</h2>
          <span className="close ">X</span>
        </div>
        <form
          key="contactForm"
          className=" flex flex-col justify-center mx-6 my-4 gap-2 text-[10px]"
        >
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            key="name"
            name="name"
            required
            className="border border-gray-200 rounded px-2 py-0.5"
          />
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            key="email"
            name="email"
            required
            className="border border-gray-200 rounded px-2 py-0.5"
          />
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            key="phone"
            name="phone"
            required
            className="border border-gray-200 rounded px-2 py-0.5"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-800 px-4 py-1 rounded"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}
