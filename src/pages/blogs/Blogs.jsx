import { Outlet } from 'react-router-dom'
import bg from '../../images/bg_images/bg2.jpg'
import CategoryLink from '../../shared/CategoryLink'

const Blogs = () => {
    return <div>
        <img className="fixed w-full" src={bg} alt="" />
        <div className="absolute z-20 top-0 left-0 py-32 mx-32 drawer-content flex flex-col">
            <div className="w-full navbar"> 
                <div className="">
                  <ul
                    className="menu pt-5 md:p-4 overflow-y-auto text-white 
                     flex flex-row 
                   gap-x-10 ml-5"
                  >
                    <CategoryLink
                      to="/blogs"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg 
                       font-semibold "
                    >
                      Water Cycle
                    </CategoryLink>
                    <CategoryLink
                      to="/blogs/problemsBlogs"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg 
                       font-semibold "
                    >
                      Problems
                    </CategoryLink>
                    <CategoryLink
                      to="/blogs/climateChange"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
                    >
                      Climate Change
                    </CategoryLink>
                    <CategoryLink
                      to="/blogs/solution"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg 
                       font-semibold"
                    >
                     Solution 
                    </CategoryLink>
                  </ul>
                </div>
            </div>
            <div className="drawer-content bg-none px-10">
              <Outlet />
            </div>
        </div>
    </div>
}

export default Blogs;