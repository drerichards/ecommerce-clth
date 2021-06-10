import React from 'react'
import './scss/home_page.scss'

import MenuDirectory from 'components/menu_directory/MenuDirectory_Comp'

const Home_Page = () => (
    <div className='homepage'>
        <MenuDirectory />
    </div>
)

export default Home_Page