
import 'remixicon/fonts/remixicon.css'
const FooterSection = () => {
  return (
    <div>


      {/* 🔹 Footer */}
      <div className="bg-[#263238] text-gray-300 px-8 md:px-20 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Nexcent</h2>
            <p className="text-sm mb-4">
              Copyright © 2026 Nexcent ltd. <br />
              All rights reserved
            </p>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"><i className="font-bold  text-white  ri-instagram-line"></i></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"><i className="font-bold  text-white ri-basketball-line"></i></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"><i className="text-white font-bold ri-twitter-fill"></i></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full
              flex items-center justify-center"><i class="font-bold text-white ri-youtube-line"></i></div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className=" space-y-2 text-sm">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay up to date</h3>
            
            <div className="flex items-center bg-gray-600 rounded-md px-3 py-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none text-sm flex-1 text-white placeholder-gray-300"
              />
              <span className="text-white">➤</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterSection;