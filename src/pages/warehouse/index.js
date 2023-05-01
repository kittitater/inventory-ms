import Layout from "@/components/Layout";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Warehouse() {
  return (
    <div className="sm:ml-64">
      <Head>
        <title>Inventory MS - Warehouse</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </Head>
      {/* <Link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" /> */}
      {/* <Layout> */}

      <nav class=" bg-white w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"> */}
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-warehouse"
              >
                <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                <path d="M6 18h12"></path>
                <path d="M6 14h12"></path>
                <rect width="12" height="12" x="6" y="10"></rect>
              </svg>
            </div>
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Warehouse
            </span>
          </div>

          <div class="flex md:order-2">
            <button
              data-modal-target="defaultModal"
              data-modal-toggle="defaultModal"
              class="block text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              type="button"
            >
              Add New Warehouse
            </button>
          </div>
        </div>
      </nav>

      {/* <!--Verically centered modal--> */}
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-warehouse"
                >
                  <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                  <path d="M6 18h12"></path>
                  <path d="M6 14h12"></path>
                  <rect width="12" height="12" x="6" y="10"></rect>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                New Warehouse
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="">
              <form class="" action="Insert.php" method="post">
                <div class="items-center px-6 py-4 bg-gray-100 space-y-4   ">
                  <div className="flex flex-row space-x-16">
                    <label
                      for="product name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Manager Name
                    </label>
                    <input
                      type="text"
                      id="product_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
                      required
                    />
                  </div>
                  <div className="flex flex-row space-x-12">
                    <label
                      for="product name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Warehouse Name
                    </label>
                    <input
                      type="text"
                      id="product_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
                      required
                    />
                  </div>
                </div>
                <div class="px-6 py-4 grid gap-4 mb-4 md:grid-cols-2">
                  {/* <div class="mb-4 flex flex-row space-x-4"> */}
                  <div>
                    <label
                      for="street address"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      id="street_address"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Phayathai"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="city"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      City / District
                    </label>
                    <input
                      type="text"
                      id="city"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Pathumwan"
                      required
                    />
                    {/* </div> */}
                  </div>
                  <div>
                    <label
                      for="state"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      placeholder="Bangkok"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="Zip code"
                      class="block mb-2 text-sm font-medium text-gray-900"
                      
                    >
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      placeholder="11111"
                      required
                    />
                    {/* </div> */}
                  </div>
                </div>
                <div class=" px-6 py-4 bg-gray-100 grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123-456-6789"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5  "
                      placeholder="example@mail.com"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Confirm
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center min-h-min py-10 bg-gray-100 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-3xl md:px-4 md:py-4 ">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://www.novabizz.com/uploads/post/717804-1.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Warehouse 1
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              100/10 Bumroong Road, Tambon Pibulsongkram, Amphur Muang, Bangkok,
              12345
            </p>
            <p>Manager : Aun</p>
            <p>Email : abc@gmail.com</p>
            <p>Tel: 080-000-0000</p>
          </div>
          <div className="flex felx-col justify-start ">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              Dropdown
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mx-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-settings"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                class="py-2 text-sm text-gray-700 "
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* </Layout> */}
    </div>
  );
}
