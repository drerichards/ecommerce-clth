import React from 'react'
import './scss/home_page.scss'

import MenuDirectory from 'components/menu_directory/MenuDirectory_Comp'
import dir_sections from 'data/directory_data'

const Home_Page = () => (
    <div className='homepage'>
        <MenuDirectory sections={dir_sections} />
    </div>
)

export default Home_Page