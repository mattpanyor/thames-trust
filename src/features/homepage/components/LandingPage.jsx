import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <>
      <section className="bg-grey dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Welcome to Thames Trust
              <span className="sm:block"> Let's Get Banking </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-white sm:text-xl/relaxed">
              Your ultimate banking app for easy financial management. Check balances, transfer
              funds, and pay bills with ease, anytime, anywhere.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to={'/login'}
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                Log In
              </Link>
              <Link
                to={'/sign-up'}
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-gray-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 dark:text-white sm:w-auto">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                Our Products
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-white sm:text-xl/relaxed">
                Explore how we can assist you with current accounts, mortgages, insurance, loans,
                credit cards, and savings accounts.
              </p>

              <Link
                to={'/login'}
                className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started Today
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                to="#">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    fill="#000000"
                    height="36px"
                    width="36px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 490.35 490.35"
                    xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path d="M15.075,106.65l279.7,161.5c3.9,2.2,10.1,2.2,13.9,0l166.8-96.9c3.8-2.2,3.8-5.8,0-8.1l-279.8-161.5 c-3.8-2.2-10.1-2.2-13.9,0l-166.8,96.9C11.175,100.75,11.175,104.45,15.075,106.65z M86.275,87.65c-1.6-0.9-3.2-1.7-5-2.4 l77.7-45.2c1.2,1,2.5,2,4.1,2.9c14.2,8.2,37.2,8.2,51.4,0c1.6-0.9,3-1.9,4.2-3l189.1,109.2c-2.5,0.9-4.9,1.9-7,3.2 c-14.1,8.2-14.1,21.5,0.2,29.8c2.2,1.3,4.6,2.3,7.2,3.2l-78.5,45.6c-1.5-1.5-3.4-2.9-5.6-4.1c-14.2-8.2-37.2-8.2-51.4,0 c-1.1,0.6-2,1.3-2.9,2l-188.5-109c1.8-0.7,3.5-1.5,5.2-2.5C100.575,109.15,100.475,95.85,86.275,87.65z M311.675,180.35l12.3-7.2 c1.9-1.1,5-1.1,6.9,0l21.6,12.5c1.9,1.1,1.9,2.9,0,4l-12.3,7.2c-1.9,1.1-5,1.1-6.9,0l-21.6-12.5 C309.775,183.25,309.775,181.45,311.675,180.35z M138.075,80.15l12.3-7.2c1.9-1.1,5-1.1,6.9,0l21.6,12.5c1.9,1.1,1.9,2.9,0,4 l-12.3,7.2c-1.9,1.1-5,1.1-6.9,0l-21.6-12.5C136.175,83.05,136.175,81.25,138.075,80.15z M456.575,212.85l21.8,12.6l-174.8,101.5 l-5.7-3.3l-16.1-9.3l-269.8-155.9l21.6-12.6l269.8,155.9L456.575,212.85z M282.075,369.05l-270.1-156.2l21.6-12.5l270.1,156.2 l152.6-88.7l21.7,12.5l-174.1,101.2l-5.6-3.3L282.075,369.05z M456.575,321.55l21.8,12.6l-174.8,101.5l-5.7-3.3l-16.1-9.3 l-269.8-155.8l21.6-12.6l269.8,155.9L456.575,321.55z M282.075,477.75l-270.1-156.2l21.6-12.5l270.1,156.2l152.6-88.7l21.7,12.5 l-174.1,101.3l-5.6-3.3L282.075,477.75z M189.475,167.15c30.7,17.7,80.5,17.7,111.2-0.1c30.6-17.8,30.6-46.6-0.1-64.4 c-30.8-17.8-80.6-17.7-111.2,0.1C158.675,120.55,158.675,149.35,189.475,167.15z M205.075,120.25l4.3-2.5c1.1-0.6,2.8-0.6,3.9,0 l5.3,3.1c1.2-0.7,2.3-1.4,3.5-2l-5.3-3.1c-1.1-0.6-1.1-1.6,0-2.2l4.3-2.5c1.1-0.6,2.8-0.6,3.9,0l6.7,3.9l0.9-0.3 c7.6-2.3,15.6-3.3,24.1-2.7c6.7,0.5,12.7,2.1,18.2,4.4c2.2,0.9,4.2,1.9,6,2.9c4.8,2.8,8.4,6,11.3,9.7l0.6,1 c0.6,1.4-0.1,2.3-2.4,2.8c-2.4,0.6-4.8,1.2-7.2,1.7c-1.7,0.4-2.9,0.3-3.9-0.3c-0.3-0.2-0.5-0.3-0.8-0.5c-1.6-1.5-3.1-3.1-4.8-4.6 c-1.5-1.4-3.2-2.6-5.1-3.7c-2.5-1.5-5.5-2.7-9-3.5c-5.2-1.3-10.4-1-15.5,0.2l-0.2,0.1l13.1,7.5c1.1,0.6,1.1,1.6,0,2.2l-4.3,2.5 c-1.1,0.6-2.8,0.6-3.9,0l-15-8.6c-1.1,0.7-2.3,1.3-3.5,2l15,8.6c1.1,0.6,1.1,1.6,0,2.2l-4.3,2.5c-1.1,0.6-2.8,0.6-3.9,0l-13.7-7.9 c-3,3.7-4,7.4-0.6,11.2c1.5,1.6,3.4,3,5.5,4.3c1.9,1.1,4,2.1,6.3,3c2.5,0.9,5.2,1.8,7.9,2.7c0.4,0.2,0.8,0.3,1.1,0.5 c1,0.6,1.2,1.3,0.6,2.3c-0.9,1.5-1.9,2.9-3,4.3c-0.9,1.3-2.6,1.7-4.9,1.3c-2.4-0.5-4.7-1.2-7-1.9c-4.2-1.4-8-3-11.3-4.9 c-3.5-2-6.4-4.3-8.7-6.9c-5.5-6.2-5.4-12.6-0.9-19c0.9-1.3,2.1-2.4,3.2-3.6l-6.4-3.7C203.975,121.85,203.975,120.85,205.075,120.25 z" />
                      </g>
                    </g>
                  </svg>
                </span>

                <h2 className="mx-auto mt-4 max-w-xl dark:text-white sm:text-xl/relaxed">
                  Current Accounts
                </h2>

                <p className="hidden dark:text-white sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Unlock perks with our current accounts; banking made smarter.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                to="#">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    fill="#000000"
                    height="36px"
                    width="36px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M264.551,0c-42.141,0-76.426,34.285-76.426,76.426s34.285,76.426,76.426,76.426s76.426-34.285,76.426-76.426 C340.977,34.285,306.692,0,264.551,0z M256.534,76.96h-9.62V50.238h9.62V76.96z M256.534,34.205h-17.637 c-4.427,0-8.017,3.588-8.017,8.017v42.756c0,4.428,3.589,8.017,8.017,8.017h17.637v18.171h-17.637 c-4.427,0-8.017,3.588-8.017,8.017s3.589,8.017,8.017,8.017h17.637v9.072c-29.522-3.936-52.376-29.263-52.376-59.844 s22.854-55.909,52.376-59.844V34.205z M272.568,92.994h9.62v18.171h-9.62V92.994z M272.568,136.27v-9.072h17.637 c4.427,0,8.017-3.588,8.017-8.017V84.977c0-4.428-3.589-8.017-8.017-8.017h-17.637V50.238h17.637c4.427,0,8.017-3.588,8.017-8.017 c0-4.428-3.589-8.017-8.017-8.017h-17.637V16.582c29.522,3.936,52.376,29.263,52.376,59.844S302.09,132.334,272.568,136.27z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M414.694,377.029c-3.998-1.903-8.782-0.206-10.685,3.79c-11.049,23.199-34.742,38.187-60.36,38.187 c-4.427,0-8.017,3.588-8.017,8.017c0,4.428,3.589,8.017,8.017,8.017c31.768,0,61.142-18.576,74.835-47.324 C420.388,383.717,418.692,378.933,414.694,377.029z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M418.472,265.086c-4.427,0-8.017,3.588-8.017,8.017v51.309c0,4.427,3.589,8.017,8.017,8.017 c4.427,0,8.017-3.589,8.017-8.017v-51.309C426.489,268.674,422.899,265.086,418.472,265.086z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M452.676,171.023c-4.427,0-8.017,3.588-8.017,8.017s3.589,8.017,8.017,8.017c23.87,0,43.29,19.42,43.29,43.29 c0,21.164-15.27,38.817-35.369,42.551c-2.363-61.289-52.952-110.425-114.811-110.425H208.293l-66.017-74.269 c-2.21-2.488-5.729-3.35-8.841-2.168c-3.112,1.183-5.168,4.164-5.168,7.493v70.843c-53.443,9.834-94.063,56.764-94.063,113.007 v8.886l-27.506,4.585C2.834,291.493,0,294.837,0,298.756v68.409c0,3.919,2.833,7.263,6.699,7.907l30.429,5.072 c11.202,48.841,53.204,84.898,103.144,88.73l5.178,36.243c0.564,3.95,3.946,6.884,7.937,6.884h51.307 c3.989,0,7.372-2.933,7.937-6.884l5.124-35.872h76.492l5.124,35.872c0.564,3.95,3.946,6.884,7.937,6.884h51.307 c3.989,0,7.372-2.933,7.937-6.884l5.559-38.917c51.666-12.074,88.583-58.21,88.583-111.861v-65.225 C489.625,285.186,512,260.338,512,230.347C512,197.636,485.388,171.023,452.676,171.023z M16.033,360.374v-54.828l18.171-3.028 v51.82c0,3.045,0.138,6.092,0.377,9.127L16.033,360.374z M144.301,114.614l42.541,47.858h-37.731h-4.81V114.614z M197.74,495.967 h-37.401l-3.817-26.722h45.036L197.74,495.967z M351.661,495.967H314.26l-3.818-26.722h35.345c3.252,0,6.508-0.15,9.752-0.423 L351.661,495.967z M444.66,281.653v72.685c0,47.852-34.117,88.765-81.122,97.282c-5.826,1.055-11.799,1.591-17.751,1.591h-44.588 h-90.397h-61.691c-0.479,0-0.957-0.009-1.432-0.017l-0.266-0.005h-0.001c-0.001,0-0.001,0-0.001,0 c-47.187-0.795-87.412-35.05-95.646-81.449c-1.013-5.707-1.526-11.561-1.526-17.402v-61.283v-15.677 c0-54.519,44.354-98.873,98.873-98.873h55.582h141.094c54.519,0,98.873,44.354,98.873,98.873V281.653z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M110.631,247.983c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.105,33.67-33.67 S129.196,247.983,110.631,247.983z M110.631,299.29c-9.725,0-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637 s17.637,7.912,17.637,17.637S120.355,299.29,110.631,299.29z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M332.96,213.779h-145.37c-4.427,0-8.017,3.588-8.017,8.017v42.756c0,4.428,3.589,8.017,8.017,8.017h145.37 c4.427,0,8.017-3.588,8.017-8.017v-42.756C340.977,217.367,337.388,213.779,332.96,213.779z M324.944,256.534H195.608v-26.722 h129.336V256.534z" />{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </span>

                <h2 className="mx-auto mt-4 max-w-xl dark:text-white sm:text-xl/relaxed">
                  Saving Accounts
                </h2>

                <p className="hidden dark:text-white sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Secure your future with us; savings that grow with you.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                to="#">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    fill="#000000"
                    height="36px"
                    width="36px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 490.2 490.2"
                    xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M368.4,245.1c0,12.9-10.5,23.4-23.4,23.4s-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4S368.4,232.2,368.4,245.1z M76.1,245.1 c0,12.9,10.5,23.4,23.4,23.4s23.4-10.5,23.4-23.4s-10.5-23.4-23.4-23.4S76.1,232.2,76.1,245.1z M38.5,382.7h268v-32.9H78.1 c0.4-2.3,0.7-4.7,0.7-7.2c0-21.5-17.5-39-39-39c-2.3,0-4.6,0.2-6.8,0.6V185.9c2.2,0.4,4.5,0.6,6.8,0.6c21.5,0,39-17.5,39-39 c0-2.5-0.2-4.8-0.7-7.2h286.1c-0.8,3-1.2,6.2-1.2,9.5c0,21.5,17.5,39,39,39c3.3,0,6.6-0.4,9.6-1.2v79.9h32.9V146 c0-21.2-17.3-38.5-38.5-38.5H38.5C17.3,107.5,0,124.8,0,146v198.2C0,365.4,17.3,382.7,38.5,382.7z M321.6,355.1 c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118c2.7,0,4.9-2.2,4.9-4.9V360c0-2.7-2.2-4.9-4.9-4.9H321.6z M467.4,339.1 v-17.8c0-2.7-2.2-4.9-4.9-4.9h-118c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118C465.2,344,467.4,341.8,467.4,339.1z M485.3,277.7h-118c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118c2.7,0,4.9-2.2,4.9-4.9v-17.8 C490.2,279.9,488,277.7,485.3,277.7z M222.3,160.7c46.6,0,84.4,37.8,84.4,84.4s-37.8,84.4-84.4,84.4s-84.4-37.8-84.4-84.4 S175.6,160.7,222.3,160.7z M229.7,182.4h-9.6c-1.5,0-2.6,1.2-2.6,2.6v11.5c-7.3,1.1-13.3,3.7-17.8,8.1c-5,4.8-7.5,10.9-7.5,18.4 c0,8.2,2.4,14.5,7.1,18.7c4.7,4.2,12.3,8.4,22.6,12.6c4.3,1.8,7.2,3.7,8.9,5.6c1.7,1.9,2.5,4.6,2.5,8.1c0,3-0.8,5.4-2.4,7.3 c-1.6,1.8-4,2.8-7.2,2.8c-3.8,0-6.9-1.2-9.2-3.6c-1.9-2-3.1-5-3.4-9c-0.1-1.6-1.5-2.8-3.1-2.7l-15.8,0.3c-1.7,0-3.1,1.5-3.1,3.2 c0.4,8.4,3.1,14.8,8.1,19.4c5.4,4.9,12.2,7.9,20.3,8.8v10.8c0,1.5,1.2,2.6,2.6,2.6h9.6c1.5,0,2.6-1.2,2.6-2.6v-11.2 c6.5-1.2,11.8-3.8,15.9-7.7c4.8-4.7,7.2-10.8,7.2-18.5c0-8-2.4-14.2-7.2-18.6c-4.8-4.3-12.3-8.7-22.5-13c-4.4-1.9-7.4-3.8-9-5.7 s-2.4-4.4-2.4-7.4s0.7-5.4,2.2-7.4c1.5-1.9,3.8-2.9,6.9-2.9c3.1,0,5.5,1.2,7.4,3.5c1.5,1.9,2.4,4.5,2.7,8c0.1,1.6,1.6,2.7,3.1,2.7 l15.8-0.2c1.7,0,3.2-1.5,3.1-3.2c-0.4-6.9-2.6-12.7-6.7-17.4c-4.2-4.9-9.7-8-16.6-9.4V185C232.3,183.5,231.1,182.4,229.7,182.4z" />{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </span>

                <h2 className="mx-auto mt-4 max-w-xl dark:text-white sm:text-xl/relaxed">
                  Credit Cards
                </h2>

                <p className="hidden dark:text-white sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Swipe into possibilities; credit cards that reward your lifestyle.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                to="#">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 60"
                    xmlSpace="preserve"
                    width="36px"
                    height="36px">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M58,28H44c-0.6,0-1,0.4-1,1v5v5v4H30c-0.6,0-1,0.4-1,1v4H17v-4v-5v-5c0-0.6-0.4-1-1-1H2c-0.6,0-1,0.4-1,1v5v5v5v5v5 c0,0.6,0.4,1,1,1h14h14h14h14c0.6,0,1-0.4,1-1v-5v-5v-5v-5v-5v-5C59,28.4,58.6,28,58,28z M31,50h12v3H31V50z M57,38H45v-3h12V38z M45,40h12v3H45V40z M57,45v3H45v-3H57z M45,50h12v3H45V50z M45,30h12v3H45V30z M31,45h12v3H31V45z M29,53H17v-3h12V53z M15,48H3 v-3h12V48z M15,43H3v-3h12V43z M3,50h12v3H3V50z M3,35h12v3H3V35z M3,55h12v3H3V55z M17,55h12v3H17V55z M31,55h12v3H31V55z M57,58 H45v-3h12V58z" />{' '}
                          <path d="M21,12h4c1.6,0,3-0.6,4-1.5V14c-5.6,0.5-10,5.2-10,10.9c0,6.1,4.9,11,11,11s11-4.9,11-11c0-5.8-4.4-10.4-10-10.9v-3.5 c1,0.9,2.4,1.5,4,1.5h4c3.4,0,6-2.6,6-6s-2.6-6-6-6h-4c-2.1,0-3.9,1-5,2.6C28.9,1,27.1,0,25,0h-4c-3.4,0-6,2.6-6,6S17.6,12,21,12z M39,25c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S39,20,39,25z M35,2h4c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4h-4c-1.9,0-3.4-1.3-3.9-3H38V5h-6.9 C31.6,3.3,33.1,2,35,2z M21,2h4c1.9,0,3.4,1.3,3.9,3H22v2h6.9c-0.4,1.7-2,3-3.9,3h-4c-2.2,0-4-1.8-4-4S18.8,2,21,2z" />{' '}
                          <path d="M29,18v2h-1c-1.2,0-2,0.8-2,2v2c0,1.2,0.8,2,2,2h4v2h-4v-1h-2v1c0,1.2,0.8,2,2,2h1v2h2v-2h1c1.2,0,2-0.8,2-2v-2 c0-1.2-0.8-2-2-2h-4v-2h4v1h2v-1c0-1.2-0.8-2-2-2h-1v-2H29z" />{' '}
                          <path d="M7,30c0.3,0,0.5-0.1,0.7-0.3l3-3l-1.4-1.4L8,26.6V8H6v18.6l-1.3-1.3l-1.4,1.4l3,3C6.5,29.9,6.7,30,7,30z" />{' '}
                          <path d="M53,25c0.3,0,0.5-0.1,0.7-0.3l3-3l-1.4-1.4L54,21.6V8h-2v13.6l-1.3-1.3l-1.4,1.4l3,3C52.5,24.9,52.7,25,53,25z" />{' '}
                          <rect x="52" y="4" width="2" height="2" />{' '}
                          <rect x="52" width="2" height="2" />{' '}
                          <rect x="6" y="4" width="2" height="2" />{' '}
                          <rect x="6" width="2" height="2" />{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </span>

                <h2 className="mx-auto mt-4 max-w-xl dark:text-white sm:text-xl/relaxed">
                  Investments
                </h2>

                <p className="hidden dark:text-white sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Plant seeds for tomorrow; investments that pave your path to success.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                to="#">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    fill="#000000"
                    height="36px"
                    width="36px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M352.316,37.762c-2.464-3.68-7.443-4.667-11.121-2.203c-3.679,2.463-4.666,7.442-2.203,11.121 c7.592,11.343,11.605,24.586,11.605,38.297c0,38.015-30.928,68.944-68.944,68.944s-68.944-30.928-68.944-68.944 s30.928-68.944,68.944-68.944c13.711,0,26.953,4.013,38.294,11.603c3.68,2.463,8.659,1.476,11.122-2.203 c2.463-3.679,1.476-8.659-2.203-11.122C314.877,4.949,298.551,0,281.653,0c-46.856,0-84.977,38.121-84.977,84.977 s38.121,84.977,84.977,84.977s84.977-38.121,84.977-84.977C366.63,68.079,361.68,51.752,352.316,37.762z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M296.618,76.96h-6.948V54.514h17.637c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H289.67v-9.086 c0-4.427-3.589-8.017-8.017-8.017s-8.017,3.589-8.017,8.017v9.086h-6.948c-10.314,0-18.706,8.392-18.706,18.706v17.102 c0,10.314,8.392,18.706,18.706,18.706h6.948v22.447H256c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.637v9.086 c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-9.086h6.948c10.314,0,18.706-8.392,18.706-18.706V95.666 C315.324,85.352,306.932,76.96,296.618,76.96z M273.637,76.96h-6.948c-1.473,0-2.672-1.199-2.672-2.672V57.186 c0-1.473,1.199-2.672,2.672-2.672h6.948V76.96z M299.29,112.768c0,1.473-1.199,2.672-2.672,2.672h-6.948V92.994h6.948 c1.473,0,2.672,1.199,2.672,2.672V112.768z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M511.957,306.476c-0.212-2.014-1.22-3.938-2.757-5.257L389.484,198.606c-1.453-1.245-3.303-1.93-5.217-1.93H127.733 c-1.865,0-3.798,0.713-5.217,1.93L2.799,301.22C1.047,302.724,0,304.999,0,307.307v119.716c0,4.427,3.589,8.017,8.017,8.017 c4.427,0,8.017-3.589,8.017-8.017V315.324h223.399v180.643h-60.927V367.165c0-4.427-3.589-8.017-8.017-8.017H84.977 c-4.427,0-8.017,3.589-8.017,8.017v128.802H16.033v-26.188c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.588-8.017,8.017 v34.205C0,508.411,3.589,512,8.017,512h495.967c4.427,0,8.017-3.589,8.017-8.017V307.307 C512,307.027,511.985,306.75,511.957,306.476z M162.472,495.967H92.994V375.182h69.478V495.967z M29.687,299.29l98.045-84.039 l98.045,84.039H29.687z M495.967,495.967H255.466V315.324h154.455c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017 H250.414l-101.01-86.58h231.898l101.01,86.58h-29.635c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h43.29V495.967z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M375.716,230.881H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h162.472 c4.427,0,8.017-3.589,8.017-8.017S380.143,230.881,375.716,230.881z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M350.063,359.148h-51.307c-4.427,0-8.017,3.589-8.017,8.017v85.511c0,4.427,3.589,8.017,8.017,8.017h51.307 c4.427,0,8.017-3.589,8.017-8.017v-85.511C358.079,362.738,354.49,359.148,350.063,359.148z M342.046,444.66h-35.273v-69.478 h35.273V444.66z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M452.676,359.148H401.37c-4.427,0-8.017,3.589-8.017,8.017v85.511c0,4.427,3.589,8.017,8.017,8.017h51.307 c4.427,0,8.017-3.589,8.017-8.017v-85.511C460.693,362.738,457.104,359.148,452.676,359.148z M444.66,444.66h-35.273v-69.478 h35.273V444.66z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M110.63,427.557c-4.427,0-8.017,3.589-8.017,8.017v8.551c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-8.551 C118.647,431.147,115.058,427.557,110.63,427.557z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M153.386,273.637h-51.307c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h51.307 c4.427,0,8.017-3.589,8.017-8.017S157.814,273.637,153.386,273.637z" />{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path d="M144.835,247.983H110.63c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h34.205 c4.427,0,8.017-3.589,8.017-8.017S149.262,247.983,144.835,247.983z" />{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </span>

                <h2 className="mx-auto mt-4 max-w-xl dark:text-white sm:text-xl/relaxed">
                  Mortgages
                </h2>

                <p className="hidden dark:text-white sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Build your dreams, one home at a time; mortgages tailored to you.
                </p>
              </Link>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    fill="#000000"
                    height="36px"
                    width="36px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 490.766 490.766"
                    xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g>
                        {' '}
                        <path d="M472.554,319.199c-9.4-0.7-28.8,9.8-34.1,12.5c-18.9,9.5-45.2,24.4-62.5,36.3c-1.2,0.8-2.8,1.9-4,2.7 c-7.8,5-16,8.3-25.1,10.3c-50.2,10.7-123.3,11.8-123.3,11.8l-4.3,0.2c-3.2,0.2-6.1-2.1-6.5-5.2c-0.5-3.4,2-6.6,5.6-6.9l108.7-10.3 c12-1.3,21.5-12.5,20.2-25.1s-12.9-21.8-24.9-20.5l-96.7-1.2c-6.6-0.1-17.1-1.7-23.4-3.6c-62.3-18.2-97.5-1.2-116.2,6.8 c-4.2-6.9-12.1-11.4-20.9-10.8l-41.7,2.8c-13.9,0.9-24.3,12.5-23.4,25.9l6.7,92.6c1,13.4,13,23.5,26.9,22.5l41.7-2.8 c8.8-0.6,16-6,19.1-13.4l183.2,7.9c20.4,2.2,39.5-0.3,57.5-9.7l5.2-2.7l138.5-81c6.8-4,11.6-10.9,11.9-18.5 C491.054,330.499,485.754,320.199,472.554,319.199z M48.954,438.099c-7.8,0-14.2-6.1-14.2-13.7s6.4-13.7,14.2-13.7 s14.2,6.1,14.2,13.7S56.754,438.099,48.954,438.099z M367.654,333.399c14.6-8,43.2-21.8,58.8-27.9c7.8-3.1,15.5-2.9,22.6,1.9 c-5.6,2-10.8,4.5-15.7,6.9c-16.4,8.2-45.3,23.9-59.4,33.8c-1.4,1-2.9,2-4.3,3c0.2-2.5,0.2-5.1-0.1-7.7c-0.3-3.3-1.1-6.4-2.1-9.4 C367.454,333.799,367.554,333.599,367.654,333.399z M411.354,296.199c-11.3,5-33,12.6-43.3,18.3l-7,3.8c-0.7,0.4-1.3,0.8-1.9,1.3 c-3.1-3.7-6.8-6.8-10.9-9.3c9.6-5.1,31-12,40.7-15.8C396.754,291.399,404.254,291.599,411.354,296.199z M114.954,232.999 c0-5.8,4.7-10.5,10.5-10.5h261.7c5.8,0,10.5,4.7,10.5,10.5s-4.7,10.5-10.5,10.5h-261.8 C119.654,243.499,114.954,238.799,114.954,232.999z M114.954,270.999c0-5.8,4.7-10.5,10.5-10.5h261.7c5.8,0,10.5,4.7,10.5,10.5 s-4.7,10.5-10.5,10.5h-261.8C119.654,281.499,114.954,276.799,114.954,270.999z M319.554,118.299c0-8.2,6.7-14.9,14.9-14.9 c8.2,0,14.9,6.7,14.9,14.9s-6.7,14.9-14.9,14.9C326.154,133.199,319.554,126.499,319.554,118.299z M163.254,118.299 c0-8.2,6.7-14.9,14.9-14.9s14.9,6.7,14.9,14.9s-6.7,14.9-14.9,14.9C169.854,133.199,163.254,126.499,163.254,118.299z M139.254,205.899h234c13.5,0,24.5-11,24.5-24.5v-126.2c0-13.5-11-24.5-24.5-24.5h-234c-13.5,0-24.5,11-24.5,24.5v126.2 C114.754,194.899,125.754,205.899,139.254,205.899z M135.654,80.599c1.4,0.3,2.9,0.4,4.4,0.4c13.7,0,24.8-11.1,24.8-24.8 c0-1.6-0.2-3.1-0.4-4.6h182.2c-0.5,1.9-0.8,4-0.8,6.1c0,13.7,11.1,24.8,24.8,24.8c2.1,0,4.2-0.3,6.1-0.8v76.1c-2-0.5-4-0.8-6.1-0.8 c-13.7,0-24.8,11.1-24.8,24.8c0,1,0.1,2.1,0.2,3.1h-181.6c0.3-1.5,0.4-3,0.4-4.6c0-13.7-11.1-24.8-24.8-24.8 c-1.5,0-2.9,0.1-4.4,0.4V80.599z M256.254,172.099c29.7,0,53.7-24.1,53.7-53.7s-24.1-53.7-53.7-53.7c-29.7,0-53.7,24.1-53.7,53.7 S226.554,172.099,256.254,172.099z M236.954,129.699l10-0.2c1,0,1.9,0.7,2,1.7c0.2,2.6,1,4.5,2.2,5.7c1.5,1.5,3.5,2.3,5.9,2.3 c2,0,3.5-0.6,4.6-1.8c1-1.2,1.6-2.7,1.6-4.6c0-2.2-0.5-3.9-1.6-5.1c-1.1-1.2-3-2.4-5.7-3.6c-6.6-2.6-11.4-5.3-14.4-8 s-4.5-6.7-4.5-11.9c0-4.7,1.6-8.6,4.8-11.7c2.9-2.8,6.7-4.5,11.3-5.2v-7.4c0-0.9,0.8-1.7,1.7-1.7h6.1c0.9,0,1.7,0.8,1.7,1.7v7.6 c4.4,0.9,7.9,2.9,10.6,6c2.6,3,4,6.7,4.2,11.1c0.1,1.1-0.9,2-2,2l-10.1,0.2c-1,0-1.9-0.7-2-1.7c-0.2-2.2-0.8-3.9-1.7-5.1 c-1.2-1.5-2.7-2.2-4.7-2.2s-3.5,0.6-4.4,1.8c-1,1.2-1.4,2.8-1.4,4.7c0,1.9,0.5,3.5,1.5,4.7s2.9,2.4,5.7,3.7 c6.5,2.8,11.3,5.5,14.3,8.3c3,2.8,4.6,6.7,4.6,11.8c0,4.9-1.5,8.8-4.6,11.8c-2.6,2.5-6,4.2-10.1,4.9v7.1c0,0.9-0.8,1.7-1.7,1.7 h-6.1c-0.9,0-1.7-0.8-1.7-1.7v-6.9c-5.2-0.6-9.5-2.5-12.9-5.6c-3.2-2.9-4.9-7-5.2-12.4 C234.954,130.699,235.954,129.699,236.954,129.699z" />{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </span>

                <h2 className="mx-auto mt-4 max-w-xl dark:text-white sm:text-xl/relaxed">Loans</h2>

                <p className="hidden dark:text-white sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Turn dreams into reality; loans that bridge the gap.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="bg-white-100 grid place-content-center rounded p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                    Seamless Transactions
                  </h2>

                  <p className="mt-4 text-gray-500 dark:text-white">
                    Discover the range of features and functionalities tailored to meet your
                    financial needs.
                  </p>
                </header>

                <a
                  className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  href="#">
                  Discover
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <img
                      src="https://omnio.global/wp-content/uploads/2022/06/shutterstock_1928122490-1440x823.jpg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image aspect-square w-full rounded object-cover"
                      alt="banking"></img>

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-500 dark:text-white">
                        Mobile & Online Banking
                      </h3>
                    </div>
                  </a>
                </li>
                <a href="#" className="group block">
                  <img
                    src="https://assets-global.website-files.com/6544fcf8a7afe272f64776fe/65a79f7d52f27f4c677411bd_QS3bhX1cnscjLKluPMRMpzInkBnb7L0z89ZYzFAQEPc.png"
                    alt="advanced security"
                    className="aspect-square w-full rounded object-cover"
                  />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-500 dark:text-white">Advanced Security</h3>
                  </div>
                </a>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              Trusted by Savers Worldwide
            </h2>
            <p className="mt-4 text-gray-500 dark:text-white sm:text-xl">
              Step into a world of financial empowerment with our banking app. From secure
              transactions to cutting-edge features, embark on a journey of confidence and
              convenience, backed by the trust of savers around the globe.
            </p>
          </div>
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                  Savers
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 dark:text-blue-50 md:text-5xl">
                  1.2m
                </dd>
              </div>
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                  Countries
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 dark:text-blue-50 md:text-5xl">
                  24
                </dd>
              </div>
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                  Offices
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 dark:text-blue-50 md:text-5xl">
                  8
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
