export  function Contact() {
  // function showContacts() {
  //     contact_list.innerHTML = ''
  //     for (let i = 0; i < contacts.length; i++) {
  //         const contact_template = `
  //         <li class="contact">
  //                <span class="name">${contacts[i].name}</span>
  //                <span class="details">${contacts[i].email} - ${contacts[i].phone}</span>
  //          </li>
  //        `
  //         contact_list.innerHTML += contact_template;
  //     }
  // }

  return (
    <>
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] m-0 p-[20px] bg-[#fff] relative font-sans mt-2 shadow-lg rounded-lg">
        <h1 className="font-bold text-3xl my-5 ">Lista de Contactos</h1>
        <ul className="p-0">
          <li className="grid mb-[10px] p-[10px] bg-[#f9f9f9] rounded-lg hover:bg-[#92c9ff86] text-black/0 hover:text-black hover:shadow-amber-200 hover:shadow-sm transition duration-300">
            <span className="text-black">Juan Perez</span>
            <span>juan@example.com - 123-456-7890</span>
          </li>
          <li className="grid mb-[10px] p-[10px] bg-[#f9f9f9] rounded-lg hover:bg-[#92c9ff86] text-black/0 hover:text-black hover:shadow-amber-200 hover:shadow-sm transition duration-300 ">
            <span className="text-black">María García</span>
            <span>maria@example.com - 987-654-3210</span>
          </li>
        </ul>
        <button
          className=" absolute bg-[#007bff] cursor-pointer border-none text-[1.8rem] text-[#ffffff] top-[20px] right-[20px] rounded-full w-[48px] h-[48px]"
          id="addContactBtn"
        >
          <strong>+</strong>
        </button>
      </div>
    </>
  );
}
